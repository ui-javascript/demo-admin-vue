package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.User;
import space.qmen.lot.service.IUserService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;


@Api(value="用户", tags={"用户"})
@RequestMapping("/api/v1/user")
@RestController
public class UserRestController {
    @Autowired
    private IUserService userService;

    @ApiOperation("根据id获取用户")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object getUserById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(userService.getUserById(id));
    }

    @ApiOperation("获取所有用户")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object listUser() {
        return ResultUtil.getResultWithSuccess(userService.listUser());
    }

    @ApiOperation("新增用户")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Object saveUser(@RequestBody User user) {
        userService.saveUser(user);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改用户信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Object updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("根据id删除用户")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Object deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ResultUtil.getResultWithSuccess();
    }
}
