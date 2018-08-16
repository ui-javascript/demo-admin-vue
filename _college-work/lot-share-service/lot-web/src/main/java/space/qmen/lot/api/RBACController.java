package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Resource;
import space.qmen.lot.entity.Role;
import space.qmen.lot.service.IRBACService;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@ApiIgnore
@Api(value="RBAC", tags={"用户权限管理"})
@RequestMapping("/api/v1/rbac")
@RestController
public class RBACController {
    @Autowired
    private IRBACService rbacService;

    /**
     * 角色
     */
    @ApiOperation("根据id获取角色")
    @RequestMapping(value = "/role/{id}", method = RequestMethod.GET)
    public Role getRoleById(@PathVariable("id") Long id) {
        return rbacService.getRoleById(id);
    }

    @ApiOperation("获取所有角色")
    @RequestMapping(value = "/role", method = RequestMethod.GET)
    public List<Role> listRole() { return rbacService.listRole(); }

    @ApiOperation("新增角色")
    @RequestMapping(value = "/role", method = RequestMethod.POST)
    public void saveRole(@RequestBody Role role) {
        rbacService.saveRole(role);
    }

    @ApiOperation("修改角色信息")
    @RequestMapping(value = "/role", method = RequestMethod.PUT)
    public void updateRole(@RequestBody Role role) {  rbacService.updateRole(role);
    }

    @ApiOperation("根据id删除角色")
    @RequestMapping(value = "/role/{id}", method = RequestMethod.DELETE)
    public void deleteRole(@PathVariable("id") Long id) {
        rbacService.deleteRole(id);
    }


    /**
     * 权限
     */
    @ApiOperation("根据id获取权限")
    @RequestMapping(value = "/resource/{id}", method = RequestMethod.GET)
    public Resource getResourceById(@PathVariable("id") Long id) {
        return rbacService.getResourceById(id);
    }

    @ApiOperation("获取所有权限")
    @RequestMapping(value = "/resource", method = RequestMethod.GET)
    public List<Resource> listResource() { return rbacService.listResource(); }

    @ApiOperation("新增权限")
    @RequestMapping(value = "/resource", method = RequestMethod.POST)
    public void saveResource(@RequestBody Resource resource) {
        rbacService.saveResource(resource);
    }

    @ApiOperation("修改权限信息")
    @RequestMapping(value = "/resource", method = RequestMethod.PUT)
    public void updateResource(@RequestBody Resource resource) {  rbacService.updateResource(resource);
    }

    @ApiOperation("根据id删除权限")
    @RequestMapping(value = "/resource/{id}", method = RequestMethod.DELETE)
    public void deleteResource(@PathVariable("id") Long id) {
        rbacService.deleteResource(id);
    }
}
