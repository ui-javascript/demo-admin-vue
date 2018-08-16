package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.RBACDao;
import space.qmen.lot.entity.Resource;
import space.qmen.lot.entity.Role;
import space.qmen.lot.service.IRBACService;

import java.util.List;

@Service
public class RBACServiceImpl implements IRBACService {
    @Autowired
    private RBACDao rbacDao;

    /**
     * 角色
     * @return
     */
    @Override
    public List<Role> listRole(){
        return rbacDao.listRole();
    }

    @Override
    public Role getRoleById(Long id) { return rbacDao.getRoleById(id); }

    @Override
    public Long deleteRole(Long id) {
        return rbacDao.deleteRole(id);
    }

    @Override
    public Long saveRole(Role role) { return rbacDao.saveRole(role); }

    @Override
    public Long updateRole(Role role) { return rbacDao.updateRole(role); }

    /**
     * 权限
     */
    @Override
    public List<Resource> listResource(){
        return rbacDao.listResource();
    }

    @Override
    public Resource getResourceById(Long id) { return rbacDao.getResourceById(id); }

    @Override
    public Long deleteResource(Long id) {
        return rbacDao.deleteRole(id);
    }

    @Override
    public Long saveResource(Resource resource) { return rbacDao.saveResource(resource); }

    @Override
    public Long updateResource(Resource resource) { return rbacDao.updateResource(resource); }
}
