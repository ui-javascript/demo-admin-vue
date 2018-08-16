package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Role;
import space.qmen.leaf.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class RoleRestController {

    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/api/role/{id}", method = RequestMethod.GET)
    public Role findOneRole(@PathVariable("id") Long id) {
        return roleService.findRoleById(id);
    }

    @RequestMapping(value = "/api/role", method = RequestMethod.GET)
    public List<Role> findAllRole() {
        return roleService.findAllRole();
    }

    @RequestMapping(value = "/api/role", method = RequestMethod.POST)
    public void createRole(@RequestBody Role role) {
        roleService.saveRole(role);
    }

    @RequestMapping(value = "/api/role", method = RequestMethod.PUT)
    public void modifyRole(@RequestBody Role role) {
        roleService.updateRole(role);
    }

    @RequestMapping(value = "/api/role/{id}", method = RequestMethod.DELETE)
    public void modifyRole(@PathVariable("id") Long id) {
        roleService.deleteRole(id);
    }
}