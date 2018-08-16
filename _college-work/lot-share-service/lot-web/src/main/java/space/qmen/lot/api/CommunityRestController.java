package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Community;
import space.qmen.lot.service.ICommunityService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@Api(value="小区", tags={"小区"})
@RequestMapping("/api/v1")
@RestController
public class CommunityRestController {
    @Autowired
    private ICommunityService communityService;

    @ApiIgnore()
    @ApiOperation("根据id获取小区")
    @RequestMapping(value = "/community/{id}", method = RequestMethod.GET)
    public Object getCommunityById(@PathVariable("id") Long id) {

        return ResultUtil.getResultWithSuccess(communityService.getCommunityById(id));
    }

    @ApiIgnore()
    @ApiOperation("获取所有小区")
    @RequestMapping(value = "/community", method = RequestMethod.GET)
    public Object listCommunity() {
//        PageHelper.startPage(1,1);
        List<Community> list = communityService.listCommunity();
//        PageInfo pageInfo = new PageInfo(list);
        return ResultUtil.getResultWithSuccess(list);
    }

    @ApiOperation("根据AreaID获取所有小区ID")
    @RequestMapping(value = "/community-ids/area/{id}", method = RequestMethod.GET)
    public Object listCommunity(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(communityService.listCommunityIdsByAreaId(id));
    }

    @ApiOperation("新增小区")
    @RequestMapping(value = "/community", method = RequestMethod.POST)
    public Object saveCommunity(@RequestBody Community community) {
        communityService.saveCommunity(community);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("修改小区信息")
    @RequestMapping(value = "/community", method = RequestMethod.PUT)
    public Object updateCommunity(@RequestBody Community community) {
        communityService.updateCommunity(community);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("根据id删除小区")
    @RequestMapping(value = "/community/{id}", method = RequestMethod.DELETE)
    public Object deleteCommunity(@PathVariable("id") Long id) {
        communityService.deleteCommunity(id);
        return ResultUtil.getResultWithSuccess();
    }

    @Deprecated
    @ApiIgnore
    @ApiOperation("根据(省市)区的AreaID获取小区及其经纬度")
    @RequestMapping(value = "/community/area/{id}", method = RequestMethod.GET)
    public Object listCommunityByAreaId(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(communityService.listCommunityByAreaId(id));
    }


    @ApiOperation("获取小区及其收费标准")
    @RequestMapping(value = "/community-policy", method = RequestMethod.GET)
    public Object listCommunityByOwnerId() {
        return ResultUtil.getResultWithSuccess(communityService.listCommunityByOwnerId());
    }

    @ApiOperation("根据id获取小区车位共享开放")
    @RequestMapping(value = "/community-policy/{id}", method = RequestMethod.GET)
    public Object getCommunityPolicyById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(communityService.getCommunityPolicyById(id));
    }

}
