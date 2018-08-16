package space.qmen.leaf.service;

import space.qmen.leaf.domain.Plan;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface PlanService {

    List<Plan> findAllPlan();

    Plan findPlanById(Long id);
    Long savePlan(Plan city);
    Long updatePlan(Plan city);
    Long deletePlan(Long id);
}