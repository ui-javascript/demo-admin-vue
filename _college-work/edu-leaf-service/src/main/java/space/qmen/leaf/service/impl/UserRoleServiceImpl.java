package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.UserRoleDao;
import space.qmen.leaf.domain.UserRole;
import space.qmen.leaf.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class UserRoleServiceImpl implements UserRoleService {

    @Autowired
    private UserRoleDao userRoleDao;

    public List<UserRole> findAllUserRole(){
        return userRoleDao.findAllUserRole();
    }

    public UserRole findUserRoleById(Long id) {
        return userRoleDao.findById(id);
    }

    @Override
    public Long saveUserRole(UserRole userRole) {
        return userRoleDao.saveUserRole(userRole);
    }

    @Override
    public Long updateUserRole(UserRole userRole) {
        return userRoleDao.updateUserRole(userRole);
    }

    @Override
    public Long deleteUserRole(Long id) {
        return userRoleDao.deleteUserRole(id);
    }

}