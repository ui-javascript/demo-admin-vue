package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Vehicle;
import space.qmen.lot.service.IVehicleService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

@Api(value="车辆", tags={"车辆"})
@RequestMapping("/api/v1")
@RestController
public class VehicleRestController {
    @Autowired
    private IVehicleService vehicleService;

    @ApiIgnore
    @ApiOperation("根据id获取车辆")
    @RequestMapping(value = "/vehicle/{id}", method = RequestMethod.GET)
    public Object getVehicleById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(vehicleService.getVehicleById(id));
    }

    @ApiIgnore
    @ApiOperation("获取所有车辆")
    @RequestMapping(value = "/vehicle", method = RequestMethod.GET)
    public Object listVehicle() {
        return ResultUtil.getResultWithSuccess(vehicleService.listVehicle());
    }

    @ApiOperation("获取所有车辆")
    @RequestMapping(value = "/vehicle/renter/{id}", method = RequestMethod.GET)
    public Object listVehicleByRenterId(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(vehicleService.listVehicleByRenterId(id));
    }

    @ApiOperation("新增车辆")
    @RequestMapping(value = "/vehicle", method = RequestMethod.POST)
    public Object saveVehicle(@RequestBody Vehicle vehicle) {
        vehicleService.saveVehicle(vehicle);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改车辆信息")
    @RequestMapping(value = "/vehicle", method = RequestMethod.PUT)
    public Object updateVehicle(@RequestBody Vehicle vehicle) {
        vehicleService.updateVehicle(vehicle);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("根据id删除车辆")
    @RequestMapping(value = "/vehicle/{id}", method = RequestMethod.DELETE)
    public Object deleteVehicle(@PathVariable("id") Long id) {
        vehicleService.deleteVehicle(id);
        return ResultUtil.getResultWithSuccess();
    }
}
