package space.qmen.leaf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.leaf.domain.Stu;
import space.qmen.leaf.service.StuService;

import java.util.List;

/**
 * 城市 Controller 实现 Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class StuRestController {

    @Autowired
    private StuService stuService;

    @RequestMapping(value = "/api/stu/{id}", method = RequestMethod.GET)
    public Stu findOneStu(@PathVariable("id") Long id) {
        return stuService.findStuById(id);
    }

    @RequestMapping(value = "/api/stu", method = RequestMethod.GET)
    public List<Stu> findAllStu() {
        return stuService.findAllStu();
    }

    @RequestMapping(value = "/api/stu", method = RequestMethod.POST)
    public void createStu(@RequestBody Stu stu) {
        stuService.saveStu(stu);
    }

    @RequestMapping(value = "/api/stu", method = RequestMethod.PUT)
    public void modifyStu(@RequestBody Stu stu) {
        stuService.updateStu(stu);
    }

    @RequestMapping(value = "/api/stu/{id}", method = RequestMethod.DELETE)
    public void modifyStu(@PathVariable("id") Long id) {
        stuService.deleteStu(id);
    }
}