package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Resource;
import space.qmen.leaf.service.ResourceService;
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
public class ResourceRestController {

    @Autowired
    private ResourceService resourceService;

    @RequestMapping(value = "/api/resource/{id}", method = RequestMethod.GET)
    public Resource findOneResource(@PathVariable("id") Long id) {
        return resourceService.findResourceById(id);
    }

    @RequestMapping(value = "/api/resource", method = RequestMethod.GET)
    public List<Resource> findAllResource() {
        return resourceService.findAllResource();
    }

    @RequestMapping(value = "/api/resource", method = RequestMethod.POST)
    public void createResource(@RequestBody Resource resource) {
        resourceService.saveResource(resource);
    }

    @RequestMapping(value = "/api/resource", method = RequestMethod.PUT)
    public void modifyResource(@RequestBody Resource resource) {
        resourceService.updateResource(resource);
    }

    @RequestMapping(value = "/api/resource/{id}", method = RequestMethod.DELETE)
    public void modifyResource(@PathVariable("id") Long id) {
        resourceService.deleteResource(id);
    }
}