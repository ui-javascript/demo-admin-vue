package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.UserDao;
import space.qmen.leaf.domain.User;
import space.qmen.leaf.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public List<User> findAllUser(){
        return userDao.findAllUser();
    }

    public User findUserById(Long id) {
        return userDao.findById(id);
    }

    @Override
    public Long saveUser(User user) {
        return userDao.saveUser(user);
    }

    @Override
    public Long updateUser(User user) {
        return userDao.updateUser(user);
    }

    @Override
    public Long deleteUser(Long id) {
        return userDao.deleteUser(id);
    }

}