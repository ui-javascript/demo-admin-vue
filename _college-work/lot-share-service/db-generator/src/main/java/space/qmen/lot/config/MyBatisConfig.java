package space.qmen.lot.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.io.Resource;

/**
 * MyBatis相关配置信息
 *
 * @author  
 * @version 1.0 16/7/8
 * @since 1.0
 */
@ConfigurationProperties(prefix = MyBatisConfig.MYBATIS_PREFIX)
@Data
public class MyBatisConfig {

    /**
     * MyBatis配置前缀
     */
    public static final String MYBATIS_PREFIX = "mybatis";

    /**
     * MyBatis实体类包名
     */
    private String typeAliasesPackage;

    /**
     * MyBatis Mapper XML文件位置
     */
    private Resource[] mapperLocations;
}
