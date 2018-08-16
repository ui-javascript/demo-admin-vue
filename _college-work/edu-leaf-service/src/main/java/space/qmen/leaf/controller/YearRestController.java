package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Year;
import space.qmen.leaf.service.YearService;
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
public class YearRestController {

    @Autowired
    private YearService yearService;

    @RequestMapping(value = "/api/year/{id}", method = RequestMethod.GET)
    public Year findOneYear(@PathVariable("id") Long id) {
        return yearService.findYearById(id);
    }

    @RequestMapping(value = "/api/year", method = RequestMethod.GET)
    public List<Year> findAllYear() {
        return yearService.findAllYear();
    }

    @RequestMapping(value = "/api/year", method = RequestMethod.POST)
    public void createYear(@RequestBody Year year) {
        yearService.saveYear(year);
    }

    @RequestMapping(value = "/api/year", method = RequestMethod.PUT)
    public void modifyYear(@RequestBody Year year) {
        yearService.updateYear(year);
    }

    @RequestMapping(value = "/api/year/{id}", method = RequestMethod.DELETE)
    public void modifyYear(@PathVariable("id") Long id) {
        yearService.deleteYear(id);
    }
}