package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Zone;
import space.qmen.lot.service.IZoneService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

@Api(value="停车区", tags={"停车区"})
@RequestMapping("/api/v1/zone")
@RestController
public class ZoneRestController {
    @Autowired
    private IZoneService zoneSrervice;

    @ApiOperation("根据id获取停车区")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object getZoneById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(zoneSrervice.getZoneById(id));
    }

    @ApiOperation("获取所有停车区")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object listZone() {
        return ResultUtil.getResultWithSuccess(zoneSrervice.listZone());
    }

    @ApiOperation("新增停车区")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Object saveZone(@RequestBody Zone zone) {
        zoneSrervice.saveZone(zone);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改停车区信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Object updateZone(@RequestBody Zone zone) {
        zoneSrervice.updateZone(zone);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("根据id删除停车区")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Object deleteZone(@PathVariable("id") Long id) {
        zoneSrervice.deleteZone(id);
        return ResultUtil.getResultWithSuccess();
    }
}
