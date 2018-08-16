package space.qmen.lot.config;


import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import space.qmen.lot.mapper.MyMapper;
import tk.mybatis.spring.mapper.MapperScannerConfigurer;

import java.util.Properties;

/**
 * MyBatis扫描接口，使用的tk.mybatis.spring.mapper.MapperScannerConfigurer
 *
 * @author
 * @version 1.0 16/7/8
 * @since 1.0
 */
@Configuration
@AutoConfigureAfter(MyBatisAutoConfiguration.class)
@Slf4j
public class MyBatisMapperScannerConfig implements EnvironmentAware {

    private Environment environment;

    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
        mapperScannerConfigurer.setSqlSessionFactoryBeanName("sqlSessionFactory");
        //设置Mapper接口包路径
        mapperScannerConfigurer.setBasePackage(environment.getProperty(TkMapperConfig.MAPPER_PATH));
        log.info("Mapper Path:{}", environment.getProperty(TkMapperConfig.MAPPER_PATH));
        Properties properties = new Properties();
        properties.setProperty("mappers", MyMapper.class.getName());
        properties.setProperty("notEmpty", "false");
        properties.setProperty("IDENTITY", "MYSQL");
        properties.setProperty("ORDER", "AFTER");
        mapperScannerConfigurer.setProperties(properties);
        return mapperScannerConfigurer;
    }

    @Override
    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }
}
