package space.qmen.lot.service;

import space.qmen.lot.entity.Resource;
import space.qmen.lot.entity.Role;

import java.util.List;

public interface IRBACService {
    /**
     * 角色
     */
    List<Role> listRole();
    Role getRoleById(Long id);
    Long deleteRole(Long id);

    Long saveRole(Role role);
    Long updateRole(Role role);

    /**
     * 权限/资源
     */
    List<Resource> listResource();
    Resource getResourceById(Long id);
    Long deleteResource(Long id);

    Long saveResource(Resource resource);
    Long updateResource(Resource resource);

}
