package space.qmen.leaf.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.leaf.dao.TchDao;
import space.qmen.leaf.domain.Tch;
import space.qmen.leaf.service.TchService;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class TchServiceImpl implements TchService {

    @Autowired
    private TchDao tchDao;

    public List<Tch> findAllTch(){
        return tchDao.findAllTch();
    }

    public Tch findTchById(Long id) {
        return tchDao.findById(id);
    }

    @Override
    public Long saveTch(Tch tch) {
        return tchDao.saveTch(tch);
    }

    @Override
    public Long updateTch(Tch tch) {
        return tchDao.updateTch(tch);
    }

    @Override
    public Long deleteTch(Long id) {
        return tchDao.deleteTch(id);
    }

}