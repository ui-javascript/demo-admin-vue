package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.dto.SpaceCheckDTO;
import space.qmen.lot.entity.Space;
import space.qmen.lot.param.*;
import space.qmen.lot.service.ISpaceService;
import space.qmen.lot.utils.ResultUtil;
import space.qmen.lot.vo.SpaceExVO;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;

@Api(value="车位", tags={"车位"})
@RequestMapping("/api/v1")
@RestController
public class SpaceRestController {
    @Autowired
    private ISpaceService spaceService;

    @ApiIgnore()
    @ApiOperation("根据id获取车位")
    @RequestMapping(value = "/space/{id}", method = RequestMethod.GET)
    public Object getSpaceById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceById(id));
    }

    @ApiOperation("查询车位收藏状态")
    @RequestMapping(value = "/is-space-collected", method = RequestMethod.GET)
    public Object getSpaceById(SpaceCollectionParam spaceCollectionParam) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceCollectionStatus(spaceCollectionParam));
    }

    @ApiOperation("根据id获取车位详细信息")
    @RequestMapping(value = "/space-info/{id}", method = RequestMethod.GET)
    public Object getSpaceInfoById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceInfoById(id));
    }

    @ApiOperation("获取车位的开放规则")
    @RequestMapping(value = "/space-rule/{id}", method = RequestMethod.GET)
    public Object getSpaceRuleById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceRuleBySpaceId(id));
    }

    @ApiOperation("获取某车位当前周的开放情况")
    @RequestMapping(value = "/space-week-rentings-status", method = RequestMethod.GET)
    public Object getSpaceWeekRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceWeekRentingStatus(spaceWeekRentingStatusParam));
    }

    @ApiOperation("获取某车位长租(往后的四星期)的开放情况")
    @RequestMapping(value = "/space-long-rentings-status", method = RequestMethod.GET)
    public Object getSpaceLongRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceLongRentingStatus(spaceWeekRentingStatusParam));
    }

    @ApiIgnore()
    @ApiOperation("获取所有车位")
    @RequestMapping(value = "/space", method = RequestMethod.GET)
    public Object listSpace() {
        return ResultUtil.getResultWithSuccess(spaceService.listSpace());
    }

    @ApiOperation("获取所有车位(更多信息)")
    @RequestMapping(value = "/spaceEx", method = RequestMethod.GET)
    public Object listSpaceEx() {
        return ResultUtil.getResultWithSuccess(spaceService.listSpaceEx());
    }

    @ApiOperation("获取所有车位审核信息")
    @RequestMapping(value = "/spaceCheck", method = RequestMethod.GET)
    public Object listSpaceCheck() {
        return ResultUtil.getResultWithSuccess(spaceService.listSpaceCheck());
    }

    @ApiOperation("新增车位")
    @RequestMapping(value = "/space", method = RequestMethod.POST)
    public Object saveSpace(@RequestBody SpaceParam space) {
        spaceService.saveSpace(space);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("收藏/取消收藏 车位")
    @RequestMapping(value = "/collect-space", method = RequestMethod.POST)
    public Object saveSpaceCollection(@RequestBody SpaceCollectionParam spaceCollectionParam) {
        spaceService.saveSpaceCollection(spaceCollectionParam);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("修改车位信息")
    @RequestMapping(value = "/space", method = RequestMethod.PUT)
    public Object updateSpace(@RequestBody Space space) {
        spaceService.updateSpace(space);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("修改车位信息(增强)")
    @RequestMapping(value = "/spaceEx", method = RequestMethod.PUT)
    public Object updateSpaceEx(@RequestBody SpaceExVO spaceExVO) {
        spaceService.updateSpaceEx(spaceExVO);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("车位校验")
    @RequestMapping(value = "/spacePassDisabled", method = RequestMethod.PUT)
    public Object updateSpaceCheckPass(@RequestBody SpaceCheckDTO spaceCheckDTO) {
        spaceService.updateSpaceCheckPass(spaceCheckDTO);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("根据id删除车位")
    @RequestMapping(value = "/space/{id}", method = RequestMethod.DELETE)
    public Object deleteSpace(@PathVariable("id") Long id) {
        spaceService.deleteSpace(id);
        return ResultUtil.getResultWithSuccess();
    }

    // 自定义
    @ApiOperation("根据业主信息获取车位详细信息")
    @RequestMapping(value = "/space-details/owner/{id}", method = RequestMethod.GET)
    public Object listSpaceDetailsByOwnerId(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.listSpaceDetailsByOwnerId(id));
    }

    @ApiOperation("根据车位id更新车位开放规则")
    @RequestMapping(value = "/space-rule", method = RequestMethod.POST)
    public Object updateSpaceRule(@Valid @RequestBody WeekRuleParam weekRuleParam) {
        spaceService.updateSpaceRule(weekRuleParam);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("确认车位归属")
    @RequestMapping(value = "/uczs-match-user", method = RequestMethod.POST)
    public Object updateUCZSUser(@RequestBody UCZSMatchUserParam uczsMatchUserParam) {
        spaceService.updateUCZSUser(uczsMatchUserParam);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("获取某Community的可租用车位数")
    @RequestMapping(value = "/community-space-available", method = RequestMethod.GET)
    public Object listCommunitySpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam) {
        return ResultUtil.getResultWithSuccess(spaceService.listCommunitySpaceAvailable(communitySpaceAvailableParam));
    }

    @ApiOperation("获取某Area的可租用车位数")
    @RequestMapping(value = "/area-space-available", method = RequestMethod.GET)
    public Object listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam) {
        return ResultUtil.getResultWithSuccess(spaceService.listAreaSpaceAvailable(areaSpaceAvailableParam));
    }

    @ApiOperation("获取某小区未被注册的车位")
    @RequestMapping(value = "/space-unreg/community/{id}", method = RequestMethod.GET)
    public Object listSpaceUnregByCommunityId(Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.listSpaceByCommunityId(id));
    }

}
