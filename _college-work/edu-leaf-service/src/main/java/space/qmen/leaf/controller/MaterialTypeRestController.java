package space.qmen.leaf.controller;

import space.qmen.leaf.domain.MaterialType;
import space.qmen.leaf.service.MaterialTypeService;
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
public class MaterialTypeRestController {

    @Autowired
    private MaterialTypeService materialTypeService;

    @RequestMapping(value = "/api/materialtype/{id}", method = RequestMethod.GET)
    public MaterialType findOneMaterialType(@PathVariable("id") Long id) {
        return materialTypeService.findMaterialTypeById(id);
    }

    @RequestMapping(value = "/api/materialtype", method = RequestMethod.GET)
    public List<MaterialType> findAllMaterialType() {
        return materialTypeService.findAllMaterialType();
    }

    @RequestMapping(value = "/api/materialtype", method = RequestMethod.POST)
    public void createMaterialType(@RequestBody MaterialType materialType) {
        materialTypeService.saveMaterialType(materialType);
    }

    @RequestMapping(value = "/api/materialtype", method = RequestMethod.PUT)
    public void modifyMaterialType(@RequestBody MaterialType materialType) {
        materialTypeService.updateMaterialType(materialType);
    }

    @RequestMapping(value = "/api/materialtype/{id}", method = RequestMethod.DELETE)
    public void modifyMaterialType(@PathVariable("id") Long id) {
        materialTypeService.deleteMaterialType(id);
    }
}