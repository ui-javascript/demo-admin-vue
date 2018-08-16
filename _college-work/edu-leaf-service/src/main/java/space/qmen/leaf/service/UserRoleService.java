package space.qmen.leaf.service;

import space.qmen.leaf.domain.UserRole;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface UserRoleService {

    List<UserRole> findAllUserRole();

    UserRole findUserRoleById(Long id);
    Long saveUserRole(UserRole city);
    Long updateUserRole(UserRole city);
    Long deleteUserRole(Long id);
}