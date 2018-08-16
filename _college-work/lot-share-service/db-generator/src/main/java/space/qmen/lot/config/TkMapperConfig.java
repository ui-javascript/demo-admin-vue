package space.qmen.lot.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 通用Mapper配置
 *
 * @author  
 * @version 1.0 16/8/4
 * @since 1.0
 */
@ConfigurationProperties(prefix = TkMapperConfig.TK_MAPPER_PREFIX)
public class TkMapperConfig {

    /**
     * TkMapper配置前缀
     */
    public static final String TK_MAPPER_PREFIX = "tk.mapper";

    /**
     * Mapper接口包路径
     */
    public static final String MAPPER_PATH = "tk.mapper.basePackage";
}
