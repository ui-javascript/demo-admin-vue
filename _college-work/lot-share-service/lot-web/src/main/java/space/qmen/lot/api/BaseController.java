package space.qmen.lot.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;


@ApiIgnore()
@RestController
@RequestMapping("/api/v1")
public abstract class BaseController {

}
