package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.dto.AreaSimpleDTO;
import space.qmen.lot.entity.Area;
import space.qmen.lot.service.IAreaService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@Api(value="省市区", tags={"省市区"})
@RequestMapping("/api/v1")
@RestController
public class AreaRestController {

    @Autowired
    private IAreaService areaService;

    @ApiIgnore
    @ApiOperation("根据id获取地区")
    @RequestMapping(value = "/area/{id}", method = RequestMethod.GET)
    public Object getAreaById(@PathVariable("id") Long id) {
        Area area = areaService.getAreaById(id);
        return ResultUtil.getResultWithSuccess(area);
    }

    @ApiOperation("根据地址获取区的id")
    @RequestMapping(value = "/areaId/by/{areaName}", method = RequestMethod.GET)
    public Object getAreaIdByName(@PathVariable("areaName") String areaName) {
        Long areaId = areaService.getAreaIdByName(areaName);
        return ResultUtil.getResultWithSuccess(areaId);
    }

    @ApiIgnore
    @ApiOperation("获取所有地区")
    @RequestMapping(value = "/area", method = RequestMethod.GET)
    public Object listCity() {
        List<Area> list = areaService.listArea();
        return ResultUtil.getResultWithSuccess(list);
    }

    @ApiIgnore
    @ApiOperation("新增地区")
    @RequestMapping(value = "/area", method = RequestMethod.POST)
    public Object saveArea(@RequestBody AreaSimpleDTO area) {
        areaService.saveArea(area);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("修改地区信息")
    @RequestMapping(value = "/area", method = RequestMethod.PUT)
    public Object updateArea(@RequestBody AreaSimpleDTO area) {
        areaService.updateArea(area);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("根据id删除地区")
    @RequestMapping(value = "/area/{id}", method = RequestMethod.DELETE)
    public Object deleteArea(@PathVariable("id") Long id) {
        areaService.deleteArea(id);
        return ResultUtil.getResultWithSuccess();
    }
}