package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Dept;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface DeptDao {

    List<Dept> findAllDept();
    Dept findById(@Param("id") Long id);
    Long saveDept(Dept dept);
    Long updateDept(Dept dept);
    Long deleteDept(Long id);
}