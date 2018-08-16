package space.qmen.leaf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.leaf.domain.Semester;
import space.qmen.leaf.service.SemesterService;

import java.util.List;

/**
 * 城市 Controller 实现 Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class SemesterRestController {

    @Autowired
    private SemesterService semesterService;

    @RequestMapping(value = "/api/semester/{id}", method = RequestMethod.GET)
    public Semester findOneSemester(@PathVariable("id") Long id) {
        return semesterService.findSemesterById(id);
    }

    @RequestMapping(value = "/api/semester", method = RequestMethod.GET)
    public List<Semester> findAllSemester() {
        return semesterService.findAllSemester();
    }

    @RequestMapping(value = "/api/semester", method = RequestMethod.POST)
    public void createSemester(@RequestBody Semester semester) {
        semesterService.saveSemester(semester);
    }

    @RequestMapping(value = "/api/semester", method = RequestMethod.PUT)
    public void modifySemester(@RequestBody Semester semester) {
        semesterService.updateSemester(semester);
    }

    @RequestMapping(value = "/api/Semester/{id}", method = RequestMethod.DELETE)
    public void modifySemester(@PathVariable("id") Long id) {
        semesterService.deleteSemester(id);
    }
}