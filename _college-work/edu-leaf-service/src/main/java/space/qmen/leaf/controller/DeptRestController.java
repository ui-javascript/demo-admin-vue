package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Dept;
import space.qmen.leaf.service.DeptService;
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
public class DeptRestController {

    @Autowired
    private DeptService deptService;

    @RequestMapping(value = "/api/dept/{id}", method = RequestMethod.GET)
    public Dept findOneDept(@PathVariable("id") Long id) {
        return deptService.findDeptById(id);
    }

    @RequestMapping(value = "/api/dept", method = RequestMethod.GET)
    public List<Dept> findAllDept() {
        return deptService.findAllDept();
    }

    @RequestMapping(value = "/api/dept", method = RequestMethod.POST)
    public void createDept(@RequestBody Dept dept) {
        deptService.saveDept(dept);
    }

    @RequestMapping(value = "/api/dept", method = RequestMethod.PUT)
    public void modifyDept(@RequestBody Dept dept) {
        deptService.updateDept(dept);
    }

    @RequestMapping(value = "/api/dept/{id}", method = RequestMethod.DELETE)
    public void modifyDept(@PathVariable("id") Long id) {
        deptService.deleteDept(id);
    }
}