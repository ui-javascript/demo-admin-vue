package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.MajorDao;
import space.qmen.leaf.domain.Major;
import space.qmen.leaf.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class MajorServiceImpl implements MajorService {

    @Autowired
    private MajorDao majorDao;

    public List<Major> findAllMajor(){
        return majorDao.findAllMajor();
    }

    public Major findMajorById(Long id) {
        return majorDao.findById(id);
    }

    @Override
    public Long saveMajor(Major major) {
        return majorDao.saveMajor(major);
    }

    @Override
    public Long updateMajor(Major major) {
        return majorDao.updateMajor(major);
    }

    @Override
    public Long deleteMajor(Long id) {
        return majorDao.deleteMajor(id);
    }

}