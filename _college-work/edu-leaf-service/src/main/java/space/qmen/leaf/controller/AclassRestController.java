package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Aclass;
import space.qmen.leaf.service.AclassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 城市 Controller 实现 Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class AclassRestController {

    @Autowired
    private AclassService aclassService;

    @RequestMapping(value = "/api/aclass/{id}", method = RequestMethod.GET)
    public Aclass findOneAclass(@PathVariable("id") Long id) {
        return aclassService.findAclassById(id);
    }

    @RequestMapping(value = "/api/aclass", method = RequestMethod.GET)
    public List<Aclass> findAllAclass() {
        return aclassService.findAllAclass();
    }

    @RequestMapping(value = "/api/aclass", method = RequestMethod.POST)
    public void createAclass(@RequestBody Aclass aclass) {
        aclassService.saveAclass(aclass);
    }

    @RequestMapping(value = "/api/aclass", method = RequestMethod.PUT)
    public void modifyAclass(@RequestBody Aclass aclass) {
        aclassService.updateAclass(aclass);
    }

    @RequestMapping(value = "/api/aclass/{id}", method = RequestMethod.DELETE)
    public void modifyAclass(@PathVariable("id") Long id) {
        aclassService.deleteAclass(id);
    }
}