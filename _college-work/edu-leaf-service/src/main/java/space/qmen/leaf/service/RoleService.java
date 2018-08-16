package space.qmen.leaf.service;

import space.qmen.leaf.domain.Role;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface RoleService {

    List<Role> findAllRole();

    Role findRoleById(Long id);
    Long saveRole(Role city);
    Long updateRole(Role city);
    Long deleteRole(Long id);
}