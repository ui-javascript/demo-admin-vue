package space.qmen.leaf.controller;

import space.qmen.leaf.domain.UserRole;
import space.qmen.leaf.service.UserRoleService;
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
public class UserRoleRestController {

    @Autowired
    private UserRoleService userRoleService;

    @RequestMapping(value = "/api/userrole/{id}", method = RequestMethod.GET)
    public UserRole findOneUserRole(@PathVariable("id") Long id) {
        return userRoleService.findUserRoleById(id);
    }

    @RequestMapping(value = "/api/userrole", method = RequestMethod.GET)
    public List<UserRole> findAllUserRole() {
        return userRoleService.findAllUserRole();
    }

    @RequestMapping(value = "/api/userrole", method = RequestMethod.POST)
    public void createUserRole(@RequestBody UserRole userRole) {
        userRoleService.saveUserRole(userRole);
    }

    @RequestMapping(value = "/api/userrole", method = RequestMethod.PUT)
    public void modifyUserRole(@RequestBody UserRole userRole) {
        userRoleService.updateUserRole(userRole);
    }

    @RequestMapping(value = "/api/userrole/{id}", method = RequestMethod.DELETE)
    public void modifyUserRole(@PathVariable("id") Long id) {
        userRoleService.deleteUserRole(id);
    }
}