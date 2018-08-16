package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Plan;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface PlanDao {

    List<Plan> findAllPlan();
    Plan findById(@Param("id") Long id);
    Long savePlan(Plan plan);
    Long updatePlan(Plan plan);
    Long deletePlan(Long id);
}