package space.qmen.leaf.service;

import space.qmen.leaf.domain.RoleResource;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface RoleResourceService {

    List<RoleResource> findAllRoleResource();

    RoleResource findRoleResourceById(Long id);
    Long saveRoleResource(RoleResource city);
    Long updateRoleResource(RoleResource city);
    Long deleteRoleResource(Long id);
}