package space.qmen.leaf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.leaf.domain.Tch;
import space.qmen.leaf.service.TchService;

import java.util.List;

/**
 * 城市 Controller 实现 Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class TchRestController {

    @Autowired
    private TchService tchService;

    @RequestMapping(value = "/api/tch/{id}", method = RequestMethod.GET)
    public Tch findOneTch(@PathVariable("id") Long id) {
        return tchService.findTchById(id);
    }

    @RequestMapping(value = "/api/tch", method = RequestMethod.GET)
    public List<Tch> findAllTch() {
        return tchService.findAllTch();
    }

    @RequestMapping(value = "/api/tch", method = RequestMethod.POST)
    public void createTch(@RequestBody Tch tch) {
        tchService.saveTch(tch);
    }

    @RequestMapping(value = "/api/tch", method = RequestMethod.PUT)
    public void modifyTch(@RequestBody Tch tch) {
        tchService.updateTch(tch);
    }

    @RequestMapping(value = "/api/tch/{id}", method = RequestMethod.DELETE)
    public void modifyTch(@PathVariable("id") Long id) {
        tchService.deleteTch(id);
    }
}