package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Role;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface RoleDao {

    List<Role> findAllRole();
    Role findById(@Param("id") Long id);
    Long saveRole(Role role);
    Long updateRole(Role role);
    Long deleteRole(Long id);
}