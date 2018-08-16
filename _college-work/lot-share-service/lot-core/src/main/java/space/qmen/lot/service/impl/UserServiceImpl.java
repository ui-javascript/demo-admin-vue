package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.UserDao;
import space.qmen.lot.entity.User;
import space.qmen.lot.service.IUserService;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserDao userDao;


    @Override
    public List<User> listUser(){
        return userDao.listUser();
    }

    @Override
    public User getUserById(Long id) {
        return userDao.getUserById(id);
    }

    @Override
    public Long deleteUser(Long id) {
        return userDao.deleteUser(id);
    }

    @Override
    public Long saveUser(User user) { return userDao.saveUser(user); }

    @Override
    public Long updateUser(User user) { return userDao.updateUser(user); }
}
