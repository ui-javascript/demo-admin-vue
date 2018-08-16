package space.qmen.leaf.service;

import space.qmen.leaf.domain.User;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface UserService {

    List<User> findAllUser();

    User findUserById(Long id);
    Long saveUser(User city);
    Long updateUser(User city);
    Long deleteUser(Long id);
}