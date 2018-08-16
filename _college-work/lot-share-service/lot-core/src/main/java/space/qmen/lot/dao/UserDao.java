package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.User;

import java.util.List;

public interface UserDao {
    List<User> listUser();
    User getUserById(@Param("id") Long id);
    Long deleteUser(Long id);

    Long saveUser(User user);

    Long updateUser(User user);
}
