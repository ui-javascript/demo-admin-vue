package space.qmen.lot.config;

import com.github.pagehelper.PageHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.TransactionManagementConfigurer;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * MyBatis基础配置
 *
 * @author  
 * @version 1.0 16/7/8
 * @since 1.0
 */
@Configuration
@EnableTransactionManagement
@EnableConfigurationProperties(MyBatisConfig.class)
@Slf4j
public class MyBatisAutoConfiguration implements TransactionManagementConfigurer {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private MyBatisConfig myBatisConfig;

    @Bean(name = "sqlSessionFactory")
    public SqlSessionFactory sqlSessionFactoryBean() throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        sqlSessionFactoryBean.setTypeAliasesPackage(myBatisConfig.getTypeAliasesPackage());
        log.info("typeAliasesPackage:{}", myBatisConfig.getTypeAliasesPackage());

        //设置分页插件参数
        PageHelper pageHelper = new PageHelper();
        Properties properties = new Properties();
        //3.3.0版本可用 - 分页参数合理化,默认false禁用,启用合理化时,如果pageNum<1会查询第一页,如果pageNum>pages会查询最后一页,禁用合理化时,如果pageNum<1或pageNum>pages会返回空数据
        properties.setProperty("reasonable", "false");
        //支持通过Mapper接口参数来传递分页参数
        properties.setProperty("supportMethodsArguments", "true");
        //always总是返回PageInfo类型,check检查返回类型是否为PageInfo,none返回Page
        properties.setProperty("returnPageInfo", "check");
        //properties.setProperty("params", "count=countSql");
        pageHelper.setProperties(properties);

        //添加分页插件
        sqlSessionFactoryBean.setPlugins(new Interceptor[]{(Interceptor) pageHelper});

        //添加Mapper XML文件
        sqlSessionFactoryBean.setMapperLocations(myBatisConfig.getMapperLocations());
        log.info("mapperLocations:{}", myBatisConfig.getMapperLocations().length);
        return sqlSessionFactoryBean.getObject();
    }

    @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

    @Override
    public PlatformTransactionManager annotationDrivenTransactionManager() {
        return new DataSourceTransactionManager(dataSource);
    }
}
