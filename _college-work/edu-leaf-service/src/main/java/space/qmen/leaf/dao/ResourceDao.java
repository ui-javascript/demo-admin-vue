package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Resource;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface ResourceDao {

    List<Resource> findAllResource();
    Resource findById(@Param("id") Long id);
    Long saveResource(Resource resource);
    Long updateResource(Resource resource);
    Long deleteResource(Long id);
}