package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.UserRole;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface UserRoleDao {

    List<UserRole> findAllUserRole();
    UserRole findById(@Param("id") Long id);
    Long saveUserRole(UserRole userRole);
    Long updateUserRole(UserRole userRole);
    Long deleteUserRole(Long id);
}