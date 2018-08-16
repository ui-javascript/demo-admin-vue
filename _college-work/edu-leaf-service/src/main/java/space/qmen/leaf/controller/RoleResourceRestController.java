package space.qmen.leaf.controller;

import space.qmen.leaf.domain.RoleResource;
import space.qmen.leaf.service.RoleResourceService;
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
public class RoleResourceRestController {

    @Autowired
    private RoleResourceService roleResourceService;

    @RequestMapping(value = "/api/roleresource/{id}", method = RequestMethod.GET)
    public RoleResource findOneRoleResource(@PathVariable("id") Long id) {
        return roleResourceService.findRoleResourceById(id);
    }

    @RequestMapping(value = "/api/roleresource", method = RequestMethod.GET)
    public List<RoleResource> findAllRoleResource() {
        return roleResourceService.findAllRoleResource();
    }

    @RequestMapping(value = "/api/roleresource", method = RequestMethod.POST)
    public void createRoleResource(@RequestBody RoleResource roleResource) {
        roleResourceService.saveRoleResource(roleResource);
    }

    @RequestMapping(value = "/api/roleresource", method = RequestMethod.PUT)
    public void modifyRoleResource(@RequestBody RoleResource roleResource) {
        roleResourceService.updateRoleResource(roleResource);
    }

    @RequestMapping(value = "/api/roleresource/{id}", method = RequestMethod.DELETE)
    public void modifyRoleResource(@PathVariable("id") Long id) {
        roleResourceService.deleteRoleResource(id);
    }
}