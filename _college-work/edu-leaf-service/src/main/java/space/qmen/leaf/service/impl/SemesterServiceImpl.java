package space.qmen.leaf.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.leaf.dao.SemesterDao;
import space.qmen.leaf.domain.Semester;
import space.qmen.leaf.service.SemesterService;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class SemesterServiceImpl implements SemesterService {

    @Autowired
    private SemesterDao semesterDao;

    public List<Semester> findAllSemester(){
        return semesterDao.findAllSemester();
    }

    public Semester findSemesterById(Long id) {
        return semesterDao.findById(id);
    }

    @Override
    public Long saveSemester(Semester semester) {
        return semesterDao.saveSemester(semester);
    }

    @Override
    public Long updateSemester(Semester semester) {
        return semesterDao.updateSemester(semester);
    }

    @Override
    public Long deleteSemester(Long id) {
        return semesterDao.deleteSemester(id);
    }

}