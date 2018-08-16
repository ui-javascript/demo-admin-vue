package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.DeptDao;
import space.qmen.leaf.domain.Dept;
import space.qmen.leaf.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class DeptServiceImpl implements DeptService {

    @Autowired
    private DeptDao deptDao;

    public List<Dept> findAllDept(){
        return deptDao.findAllDept();
    }

    public Dept findDeptById(Long id) {
        return deptDao.findById(id);
    }

    @Override
    public Long saveDept(Dept dept) {
        return deptDao.saveDept(dept);
    }

    @Override
    public Long updateDept(Dept dept) {
        return deptDao.updateDept(dept);
    }

    @Override
    public Long deleteDept(Long id) {
        return deptDao.deleteDept(id);
    }

}