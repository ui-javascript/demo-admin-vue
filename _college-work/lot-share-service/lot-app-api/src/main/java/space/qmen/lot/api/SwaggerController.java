package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import springfox.documentation.annotations.ApiIgnore;


@ApiIgnore()
@Api("API文档")
@Controller
public class SwaggerController {

    @ApiOperation("SwaggerUI文档")
    @GetMapping("/")
    public String index() {
        return "redirect:swagger-ui.html";
    }

    @ApiOperation("SwaggerUI文档")
    @GetMapping("/api")
    public String swagger() {
        return "redirect:swagger-ui.html";
    }
}
