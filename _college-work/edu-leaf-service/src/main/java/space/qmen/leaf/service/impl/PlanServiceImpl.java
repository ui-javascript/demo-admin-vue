package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.PlanDao;
import space.qmen.leaf.domain.Plan;
import space.qmen.leaf.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanDao planDao;

    public List<Plan> findAllPlan(){
        return planDao.findAllPlan();
    }

    public Plan findPlanById(Long id) {
        return planDao.findById(id);
    }

    @Override
    public Long savePlan(Plan plan) {
        return planDao.savePlan(plan);
    }

    @Override
    public Long updatePlan(Plan plan) {
        return planDao.updatePlan(plan);
    }

    @Override
    public Long deletePlan(Long id) {
        return planDao.deletePlan(id);
    }

}