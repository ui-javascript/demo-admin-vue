package space.qmen.leaf.service;

import space.qmen.leaf.domain.Dept;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface DeptService {

    List<Dept> findAllDept();

    Dept findDeptById(Long id);
    Long saveDept(Dept city);
    Long updateDept(Dept city);
    Long deleteDept(Long id);
}