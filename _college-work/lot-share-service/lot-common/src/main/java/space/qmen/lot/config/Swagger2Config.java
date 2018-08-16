package space.qmen.lot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Swagger2Config {
    /**
     * 添加摘要信息(Docket)
     */
    @Bean
    public Docket controllerApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new ApiInfoBuilder()
                        .title("标题：车位共享_接口文档")
                        .description("描述：App与Web后台管理系统接口")
                        .contact(new Contact("luo0412",null,null))
                        .version("版本号:被我们吃了")
                        .build())
                .select()
                .apis(RequestHandlerSelectors.basePackage("space.qmen.lot.api"))
                .paths(PathSelectors.any())
                .build();
    }
}