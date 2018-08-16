package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.RoleDao;
import space.qmen.leaf.domain.Role;
import space.qmen.leaf.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    public List<Role> findAllRole(){
        return roleDao.findAllRole();
    }

    public Role findRoleById(Long id) {
        return roleDao.findById(id);
    }

    @Override
    public Long saveRole(Role role) {
        return roleDao.saveRole(role);
    }

    @Override
    public Long updateRole(Role role) {
        return roleDao.updateRole(role);
    }

    @Override
    public Long deleteRole(Long id) {
        return roleDao.deleteRole(id);
    }

}