package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Material;
import space.qmen.leaf.service.MaterialService;
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
public class MaterialRestController {

    @Autowired
    private MaterialService materialService;

    @RequestMapping(value = "/api/material/{id}", method = RequestMethod.GET)
    public Material findOneMaterial(@PathVariable("id") Long id) {
        return materialService.findMaterialById(id);
    }

    @RequestMapping(value = "/api/material", method = RequestMethod.GET)
    public List<Material> findAllMaterial() {
        return materialService.findAllMaterial();
    }

    @RequestMapping(value = "/api/material", method = RequestMethod.POST)
    public void createMaterial(@RequestBody Material material) {
        materialService.saveMaterial(material);
    }

    @RequestMapping(value = "/api/material", method = RequestMethod.PUT)
    public void modifyMaterial(@RequestBody Material material) {
        materialService.updateMaterial(material);
    }

    @RequestMapping(value = "/api/material/{id}", method = RequestMethod.DELETE)
    public void modifyMaterial(@PathVariable("id") Long id) {
        materialService.deleteMaterial(id);
    }
}