package space.qmen.lot.service;

import space.qmen.lot.entity.User;

import java.util.List;


public interface IUserService {
    List<User> listUser();
    User getUserById(Long id);
    Long deleteUser(Long id);

    Long saveUser(User user);
    Long updateUser(User user);
}
