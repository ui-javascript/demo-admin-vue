package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.User;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface UserDao {

    List<User> findAllUser();
    User findById(@Param("id") Long id);
    Long saveUser(User user);
    Long updateUser(User user);
    Long deleteUser(Long id);
}