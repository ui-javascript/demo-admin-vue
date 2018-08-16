package space.qmen.lot.api;

//https://my.oschina.net/qjedu/blog/1550704
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import space.qmen.lot.domain.UploadModel;
import space.qmen.lot.utils.ResultUtil;
import space.qmen.lot.utils.strUtils.MD5Util;
import space.qmen.lot.utils.timeUtils.DateUtil;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Api(value="上传", tags={"上传"})
@RequestMapping("/api/v1/upload")
@Controller
public class UploadFileController {

    private final Logger logger = LoggerFactory.getLogger(UploadFileController.class);

    // 文件存储路径
    private static String UPLOADED_FOLDER = "e:/temp/pic";
//    private static String UPLOADED_FOLDER = "/opt/uploads"; // 部署到操作系统上

    private ResourceLoader resourceLoader;

    @ApiOperation("上传测试页")
    @RequestMapping("/")
    public String index(HashMap<String, Object> map) {
        map.put("hello", "欢迎下载测试");
        return "uploads";
    }


//    @ApiOperation("单文件上传")
//    @PostMapping("/file")
//    // If not @RestController, uncommen t this
//    //@ResponseBody
//    public Object uploadXsl(
//            @RequestParam("file") MultipartFile uploadfile) {
//
//        if (uploadfile.isEmpty()) {
//            return new ResponseEntity("please select a file!", HttpStatus.OK);
//        }
//
//        String fileName = null;
//        try {
////            readDeptXls(saveUploadedFiles(Arrays.asList(uploadfile)));
//            fileName = saveUploadedFiles(Arrays.asList(uploadfile));
//        } catch (IOException e) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//
////        return new ResponseEntity("Successfully uploaded - " +
////                uploadfile.getOriginalFilename(), new HttpHeaders(), HttpStatus.OK);
//
//        HashMap<String, String> fileInfo = new HashMap<>();
//        fileInfo.put("path", fileName);
//        return ResultUtil.getResultWithSuccess(fileInfo);
//    }

    // 多文件上传
    @PostMapping("/file/multi")
    @ApiOperation("文件上传")
    public Object uploadXslMulti(@RequestParam("files") MultipartFile[] uploadfiles) {

        logger.debug("Multiple file upload!");

        String fileName = "";
        List filePathArr = null;
        try {
//            readDeptXls(saveUploadedFiles(Arrays.asList(uploadfiles)));
            filePathArr = saveUploadedFiles(Arrays.asList(uploadfiles));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        HashMap<String, List> fileInfo = new HashMap<>();
        fileInfo.put("path", filePathArr);
        return new ResponseEntity(filePathArr, HttpStatus.OK);
    }

    // maps html form to a Model
//    @PostMapping("/file/multi/model")
//    public Object multiUploadFileModel(@ModelAttribute UploadModel model) {
//        logger.debug("Multiple file upload! With UploadModel");
//
//        try {
////            readDeptXls(saveUploadedFiles(Arrays.asList(model.getFiles())));
//            saveUploadedFiles(Arrays.asList(model.getFiles()));
//        } catch (IOException e) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//
////        return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);
//        return ResultUtil.getResultWithSuccess();
//
//    }


    // 保存文件
    private List saveUploadedFiles(List<MultipartFile> files) throws IOException {

        String tmpUrl = "";
        String prefix = "";
        String filePath = "";
        List filePathArr = new ArrayList<String>();

        for (MultipartFile file : files) {
            if (file.isEmpty()) {
                continue; //next pls
            }

            filePath = file.getOriginalFilename(); // 获取文件名
            prefix = filePath.substring(filePath.lastIndexOf(".") + 1); // 后缀扩展类型
            tmpUrl = MD5Util.encrypt(DateUtil.getDateSequence() + filePath) + "." + prefix;


            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER  + "/"
                    + tmpUrl);
            Files.write(path, bytes);
            filePathArr.add(tmpUrl);
        }

        return filePathArr;
    }

//    public void readDeptXls(String path) throws IOException {
//        InputStream is = new FileInputStream(path);
//        HSSFWorkbook hssfWorkbook = new HSSFWorkbook(is);
//
//        // 循环工作表Sheet
//        for (int numSheet = 0; numSheet < hssfWorkbook.getNumberOfSheets(); numSheet++) {
//            HSSFSheet hssfSheet = hssfWorkbook.getSheetAt(numSheet);
//            if (hssfSheet == null) {
//                continue;
//            }
//
//            // 循环行Row
//            for (int rowNum = 1; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
//                HSSFRow hssfRow = hssfSheet.getRow(rowNum);
//                if (hssfRow != null) {
//
////                    dept = new Dept();
////                    HSSFCell name = hssfRow.getCell(0);
////                    HSSFCell intro = hssfRow.getCell(1);
////                    HSSFCell description = hssfRow.getCell(2);
////
////                    dept.setId(null);
////                    dept.setName(getValue(name));
////                    dept.setIntro(getValue(intro));
////                    dept.setDescription(getValue(description));
////                    dept.setStatus(1);
////                    deptService.saveDept(dept);
//                }
//            }
//        }
//    }

//    @SuppressWarnings("static-access")
//    private String getValue(HSSFCell hssfCell) {
//        if (hssfCell.getCellType() == hssfCell.CELL_TYPE_BOOLEAN) {
//            // 返回布尔类型的值
//            return String.valueOf(hssfCell.getBooleanCellValue());
//        } else if (hssfCell.getCellType() == hssfCell.CELL_TYPE_NUMERIC) {
//            // 返回数值类型的值
//            return String.valueOf(hssfCell.getNumericCellValue());
//        } else {
//            // 返回字符串类型的值
//            return String.valueOf(hssfCell.getStringCellValue());
//        }
//    }

    @RequestMapping(value = "/download", method = RequestMethod.GET)
    public void testDownload(HttpServletResponse res, String fileName) {
//        String fileName = "f56bef10ade0567a0897bce1152cb148.jpg";

        res.setHeader("content-type", "application/octet-stream");
        res.setContentType("application/octet-stream");
        res.setHeader("Content-Disposition", "attachment;filename=" + fileName);

        byte[] buff = new byte[1024];
        BufferedInputStream bis = null;
        OutputStream os = null;
        try {
            os = res.getOutputStream();
            bis = new BufferedInputStream(new FileInputStream(new File(UPLOADED_FOLDER + "/"
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
//        System.out.println("success");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{filename:.+}")
    @ResponseBody
    public ResponseEntity<?> getFile(@PathVariable String filename) {

        try {
            System.out.println("file://" + UPLOADED_FOLDER + "/" + filename);
            return ResponseEntity.ok(resourceLoader.getResource("file://" + UPLOADED_FOLDER + "/" + filename));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}