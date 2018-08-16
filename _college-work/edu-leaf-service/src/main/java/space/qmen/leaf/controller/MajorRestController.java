package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Major;
import space.qmen.leaf.service.MajorService;
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
public class MajorRestController {

    @Autowired
    private MajorService majorService;

    @RequestMapping(value = "/api/major/{id}", method = RequestMethod.GET)
    public Major findOneMajor(@PathVariable("id") Long id) {
        return majorService.findMajorById(id);
    }

    @RequestMapping(value = "/api/major", method = RequestMethod.GET)
    public List<Major> findAllMajor() {
        return majorService.findAllMajor();
    }

    @RequestMapping(value = "/api/major", method = RequestMethod.POST)
    public void createMajor(@RequestBody Major major) {
        majorService.saveMajor(major);
    }

    @RequestMapping(value = "/api/major", method = RequestMethod.PUT)
    public void modifyMajor(@RequestBody Major major) {
        majorService.updateMajor(major);
    }

    @RequestMapping(value = "/api/major/{id}", method = RequestMethod.DELETE)
    public void modifyMajor(@PathVariable("id") Long id) {
        majorService.deleteMajor(id);
    }
}