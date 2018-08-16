package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Resource;
import space.qmen.lot.entity.Role;

import java.util.List;

public interface RBACDao {
    /**
     * 角色
     */
    List<Role> listRole();
    Role getRoleById(@Param("id") Long id);
    Long deleteRole(Long id);

    Long saveRole(Role role);
    Long updateRole(Role role);


    /**
     * 权限
     */
    List<Resource> listResource();
    Resource getResourceById(@Param("id") Long id);
    Long deleteResource(Long id);

    Long saveResource(Resource resource);
    Long updateResource(Resource resource);


}
