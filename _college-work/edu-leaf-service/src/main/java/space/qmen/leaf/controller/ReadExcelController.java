package space.qmen.leaf.controller;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import space.qmen.leaf.domain.Dept;
import space.qmen.leaf.domain.Material;
import space.qmen.leaf.model.UploadModel;
import space.qmen.leaf.service.DeptService;
import space.qmen.leaf.service.MaterialService;
import space.qmen.leaf.util.DateUtil;
import space.qmen.leaf.util.MD5Util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class ReadExcelController {

    private final Logger logger = LoggerFactory.getLogger(ReadExcelController.class);

    // 文件存储路径
//    private static String UPLOADED_FOLDER = "e:/temp/";
    private static String UPLOADED_FOLDER = "/opt/uploads/"; // 部署到操作系统上

    private Dept dept;

    // 自动完成
    @Autowired
    private DeptService deptService;

    // 自动完成
    @Autowired
    private MaterialService materialService;

    // 单文件上传
    @PostMapping("/api/excel/dept")
    // If not @RestController, uncommen t this
    //@ResponseBody
    public ResponseEntity<?> uploadXsl(
            @RequestParam("file") MultipartFile uploadfile) {

        if (uploadfile.isEmpty()) {
            return new ResponseEntity("please select a file!", HttpStatus.OK);
        }

        try {
            readDeptXls(saveUploadedFiles(Arrays.asList(uploadfile)));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity("Successfully uploaded - " +
                uploadfile.getOriginalFilename(), new HttpHeaders(), HttpStatus.OK);
    }

    // 多文件上传
    @PostMapping("/api/excel/dept/multi")
    public ResponseEntity<?> uploadXslMulti(
            @RequestParam("extraField") String extraField,
            @RequestParam("files") MultipartFile[] uploadfiles) {

        logger.debug("Multiple file upload!");

        try {
            readDeptXls(saveUploadedFiles(Arrays.asList(uploadfiles)));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity("Successfully uploaded", HttpStatus.OK);

    }

    // maps html form to a Model
    @PostMapping("/api/excel/dept/multi/model")
    public ResponseEntity<?> multiUploadFileModel(@ModelAttribute UploadModel model) {
        logger.debug("Multiple file upload! With UploadModel");

        try {
            readDeptXls(saveUploadedFiles(Arrays.asList(model.getFiles())));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);
    }

    // 保存文件
    private String saveUploadedFiles(List<MultipartFile> files) throws IOException {

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


            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER  + "/"
                    + tmpUrl);
            Files.write(path, bytes);

            return UPLOADED_FOLDER  + "/" + tmpUrl;
        }

        return "";
    }

    public void readDeptXls(String path) throws IOException {
        InputStream is = new FileInputStream(path);
        HSSFWorkbook hssfWorkbook = new HSSFWorkbook(is);

        // 循环工作表Sheet
        for (int numSheet = 0; numSheet < hssfWorkbook.getNumberOfSheets(); numSheet++) {
            HSSFSheet hssfSheet = hssfWorkbook.getSheetAt(numSheet);
            if (hssfSheet == null) {
                continue;
            }

            // 循环行Row
            for (int rowNum = 1; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
                HSSFRow hssfRow = hssfSheet.getRow(rowNum);
                if (hssfRow != null) {
                    dept = new Dept();
                    HSSFCell name = hssfRow.getCell(0);
                    HSSFCell intro = hssfRow.getCell(1);
                    HSSFCell description = hssfRow.getCell(2);

                    dept.setId(null);
                    dept.setName(getValue(name));
                    dept.setIntro(getValue(intro));
                    dept.setDescription(getValue(description));
                    dept.setStatus(1);
                    deptService.saveDept(dept);
                }
            }
        }
    }

    @SuppressWarnings("static-access")
    private String getValue(HSSFCell hssfCell) {
        if (hssfCell.getCellType() == hssfCell.CELL_TYPE_BOOLEAN) {
            // 返回布尔类型的值
            return String.valueOf(hssfCell.getBooleanCellValue());
        } else if (hssfCell.getCellType() == hssfCell.CELL_TYPE_NUMERIC) {
            // 返回数值类型的值
            return String.valueOf(hssfCell.getNumericCellValue());
        } else {
            // 返回字符串类型的值
            return String.valueOf(hssfCell.getStringCellValue());
        }
    }
}