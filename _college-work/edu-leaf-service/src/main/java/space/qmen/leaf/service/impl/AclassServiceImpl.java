package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.AclassDao;
import space.qmen.leaf.domain.Aclass;
import space.qmen.leaf.service.AclassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class AclassServiceImpl implements AclassService {

    @Autowired
    private AclassDao aclassDao;

    public List<Aclass> findAllAclass(){
        return aclassDao.findAllAclass();
    }

    public Aclass findAclassById(Long id) {
        return aclassDao.findById(id);
    }

    @Override
    public Long saveAclass(Aclass aclass) {
        return aclassDao.saveAclass(aclass);
    }

    @Override
    public Long updateAclass(Aclass aclass) {
        return aclassDao.updateAclass(aclass);
    }

    @Override
    public Long deleteAclass(Long id) {
        return aclassDao.deleteAclass(id);
    }

}