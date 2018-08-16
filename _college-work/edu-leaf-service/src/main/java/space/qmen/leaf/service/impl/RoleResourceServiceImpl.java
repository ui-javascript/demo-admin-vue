package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.RoleResourceDao;
import space.qmen.leaf.domain.RoleResource;
import space.qmen.leaf.service.RoleResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class RoleResourceServiceImpl implements RoleResourceService {

    @Autowired
    private RoleResourceDao roleResourceDao;

    public List<RoleResource> findAllRoleResource(){
        return roleResourceDao.findAllRoleResource();
    }

    public RoleResource findRoleResourceById(Long id) {
        return roleResourceDao.findById(id);
    }

    @Override
    public Long saveRoleResource(RoleResource roleResource) {
        return roleResourceDao.saveRoleResource(roleResource);
    }

    @Override
    public Long updateRoleResource(RoleResource roleResource) {
        return roleResourceDao.updateRoleResource(roleResource);
    }

    @Override
    public Long deleteRoleResource(Long id) {
        return roleResourceDao.deleteRoleResource(id);
    }

}