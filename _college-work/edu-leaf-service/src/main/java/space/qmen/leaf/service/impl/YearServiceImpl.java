package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.YearDao;
import space.qmen.leaf.domain.Year;
import space.qmen.leaf.service.YearService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class YearServiceImpl implements YearService {

    @Autowired
    private YearDao yearDao;

    public List<Year> findAllYear(){
        return yearDao.findAllYear();
    }

    public Year findYearById(Long id) {
        return yearDao.findById(id);
    }

    @Override
    public Long saveYear(Year year) {
        return yearDao.saveYear(year);
    }

    @Override
    public Long updateYear(Year year) {
        return yearDao.updateYear(year);
    }

    @Override
    public Long deleteYear(Long id) {
        return yearDao.deleteYear(id);
    }

}