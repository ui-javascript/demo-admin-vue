package space.qmen.leaf.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.leaf.dao.StuDao;
import space.qmen.leaf.domain.Stu;
import space.qmen.leaf.service.StuService;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class StuServiceImpl implements StuService {

    @Autowired
    private StuDao stuDao;

    public List<Stu> findAllStu(){
        return stuDao.findAllStu();
    }

    public Stu findStuById(Long id) {
        return stuDao.findById(id);
    }

    @Override
    public Long saveStu(Stu stu) {
        return stuDao.saveStu(stu);
    }

    @Override
    public Long updateStu(Stu stu) {
        return stuDao.updateStu(stu);
    }

    @Override
    public Long deleteStu(Long id) {
        return stuDao.deleteStu(id);
    }

}