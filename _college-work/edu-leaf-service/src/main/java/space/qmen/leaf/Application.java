package space.qmen.leaf;

import org.mybatis.spring.annotation.MapperScan;
//import space.qmen.leaf.dao.DeptDao;
//import space.qmen.leaf.domain.Dept;
//import org.springframework.boot.CommandLineRunner; // 如果有页面的话不需要
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * Spring Boot 应用启动类
 */

@SpringBootApplication // Spring Boot 应用的标识
@MapperScan("space.qmen.leaf.dao") // mapper 接口类扫描包配置
//@EnableConfigurationProperties(UploadFileProperties.class)

public class Application {

    public static void main(String[] args) {
        // 程序启动入口
        // 启动嵌入式的 Tomcat 并初始化 Spring 环境及其各 Spring 组件
        SpringApplication.run(Application.class,args);
    }


}