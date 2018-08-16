package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.ResourceDao;
import space.qmen.leaf.domain.Resource;
import space.qmen.leaf.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class ResourceServiceImpl implements ResourceService {

    @Autowired
    private ResourceDao resourceDao;

    public List<Resource> findAllResource(){
        return resourceDao.findAllResource();
    }

    public Resource findResourceById(Long id) {
        return resourceDao.findById(id);
    }

    @Override
    public Long saveResource(Resource resource) {
        return resourceDao.saveResource(resource);
    }

    @Override
    public Long updateResource(Resource resource) {
        return resourceDao.updateResource(resource);
    }

    @Override
    public Long deleteResource(Long id) {
        return resourceDao.deleteResource(id);
    }

}