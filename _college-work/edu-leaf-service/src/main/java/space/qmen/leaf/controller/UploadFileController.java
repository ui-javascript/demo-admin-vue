package space.qmen.leaf.controller;

import java.io.*;
import java.security.MessageDigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.leaf.domain.Material;
import space.qmen.leaf.model.UploadModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import space.qmen.leaf.service.MaterialService;
import space.qmen.leaf.util.DateUtil;
import space.qmen.leaf.util.MD5Util;

import javax.servlet.http.HttpServletResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
//import java.util.Map;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class UploadFileController {

    private final Logger logger = LoggerFactory.getLogger(UploadFileController.class);

    // 文件存储路径
//    private static String UPLOADED_FOLDER = "e:/temp/";
    private static String UPLOADED_FOLDER = "/opt/uploads/"; // 部署到操作系统上

    private Material material;
//    private MaterialDao materialDao;

    // 自动完成
    @Autowired
    private MaterialService materialService;

    @RequestMapping("/welcome")
    public String welcome(Map<String,Object> map) {
        map.put("welcome","from TemplateController.helloHtml");
        return "/welcome";
    }


    // 单文件上传
    @PostMapping("/api/upload")
    // If not @RestController, uncommen t this
    //@ResponseBody
    public ResponseEntity<?> uploadFile(
            @RequestParam("file") MultipartFile uploadfile) {

        logger.debug("Single file upload!");


        if (uploadfile.isEmpty()) {
            return new ResponseEntity("please select a file!", HttpStatus.OK);
        }

        try {
            saveUploadedFiles(Arrays.asList(uploadfile));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        String fileName = uploadfile.getOriginalFilename();


        return new ResponseEntity("Successfully uploaded - " +
                uploadfile.getOriginalFilename(), new HttpHeaders(), HttpStatus.OK);

    }

    // 多文件上传
    @PostMapping("/api/upload/multi")
    public ResponseEntity<?> uploadFileMulti(
            @RequestParam("extraField") String extraField,
            @RequestParam("files") MultipartFile[] uploadfiles) {

        logger.debug("Multiple file upload!");

        //
//        String uploadedFileName = Arrays.stream(uploadfiles).map(x -> x.getOriginalFilename())
//                .filter(x -> !StringUtils.isEmpty(x)).collect(Collectors.joining(" , "));

        // 上传文件为空
//        if (StringUtils.isEmpty(uploadedFileName)) {
//            return new ResponseEntity("please select a file!", HttpStatus.OK);
//        }

        try {
            saveUploadedFiles(Arrays.asList(uploadfiles));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

//        return new ResponseEntity("Successfully uploaded - "
//                + uploadedFileName, HttpStatus.OK);

        return new ResponseEntity("Successfully uploaded", HttpStatus.OK);

    }

    // maps html form to a Model
    @PostMapping("/api/upload/multi/model")
    public ResponseEntity<?> multiUploadFileModel(@ModelAttribute UploadModel model) {
        logger.debug("Multiple file upload! With UploadModel");

        try {
            saveUploadedFiles(Arrays.asList(model.getFiles()));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);
    }

    // 保存文件
    private void saveUploadedFiles(List<MultipartFile> files) throws IOException {

        String tmpUrl = null;
        String prefix = null;
        String fileName = "";
        for (MultipartFile file : files) {
            if (file.isEmpty()) {
                continue; //next pls
            }

            fileName = file.getOriginalFilename(); // 获取文件名
            prefix = fileName.substring(fileName.lastIndexOf(".") + 1); // 后缀扩展类型
            tmpUrl = MD5Util.encrypt(DateUtil.getDateSequence() + fileName) + "." + prefix;

            // 尝试新建
            material = new Material();
            material.setId(null);
            material.setName(file.getOriginalFilename());
            material.setUrl("/" + tmpUrl);
            material.setUploadDt(null);
            material.setSize(null);
            material.setDlTimes(0);
            material.setDescription(null);
            material.setUploaderId(Long.parseLong("2"));
            material.setMaterialTypeId(Long.parseLong("2"));
            material.setStatus(1);
            materialService.saveMaterial(material);

            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER  + "/"
                    + tmpUrl);
            Files.write(path, bytes);
        }
    }

    @RequestMapping(value = "/testDownload", method = RequestMethod.GET)
    public void testDownload(HttpServletResponse res) {
        String fileName = "f56bef10ade0567a0897bce1152cb148.jpg";
        res.setHeader("content-type", "application/octet-stream");
        res.setContentType("application/octet-stream");
        res.setHeader("Content-Disposition", "attachment;filename=" + fileName);
        byte[] buff = new byte[1024];
        BufferedInputStream bis = null;
        OutputStream os = null;
        try {
            os = res.getOutputStream();
            bis = new BufferedInputStream(new FileInputStream(new File("/opt/uploads/"
                    + fileName)));
            int i = bis.read(buff);
            while (i != -1) {
                os.write(buff, 0, buff.length);
                os.flush();
                i = bis.read(buff);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (bis != null) {
                try {
                    bis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        System.out.println("success");
    }

}