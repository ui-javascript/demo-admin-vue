package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Plan;
import space.qmen.leaf.service.PlanService;
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
public class PlanRestController {

    @Autowired
    private PlanService planService;

    @RequestMapping(value = "/api/plan/{id}", method = RequestMethod.GET)
    public Plan findOnePlan(@PathVariable("id") Long id) {
        return planService.findPlanById(id);
    }

    @RequestMapping(value = "/api/plan", method = RequestMethod.GET)
    public List<Plan> findAllPlan() {
        return planService.findAllPlan();
    }

    @RequestMapping(value = "/api/plan", method = RequestMethod.POST)
    public void createPlan(@RequestBody Plan plan) {
        planService.savePlan(plan);
    }

    @RequestMapping(value = "/api/plan", method = RequestMethod.PUT)
    public void modifyPlan(@RequestBody Plan plan) {
        planService.updatePlan(plan);
    }

    @RequestMapping(value = "/api/plan/{id}", method = RequestMethod.DELETE)
    public void modifyPlan(@PathVariable("id") Long id) {
        planService.deletePlan(id);
    }
}