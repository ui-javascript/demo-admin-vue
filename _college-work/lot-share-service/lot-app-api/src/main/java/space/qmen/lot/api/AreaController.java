package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Area;
import space.qmen.lot.service.IAreaService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;


@Api(value="省市区", tags={"省市区"})
@RequestMapping("/api/v1")
@RestController
public class AreaController {

    @Autowired
    private IAreaService areaService;

    @ApiIgnore
    @ApiOperation("根据id获取地区")
    @RequestMapping(value = "/area/{id}", method = RequestMethod.GET)
    public Object getAreaById(@PathVariable("id") Long id) {
        Area area = areaService.getAreaById(id);
        return ResultUtil.getResultWithSuccess(area);
    }

}