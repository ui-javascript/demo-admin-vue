package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.RoleResource;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface RoleResourceDao {

    List<RoleResource> findAllRoleResource();
    RoleResource findById(@Param("id") Long id);
    Long saveRoleResource(RoleResource dept);
    Long updateRoleResource(RoleResource dept);
    Long deleteRoleResource(Long id);
}