package space.qmen.leaf.service;

import space.qmen.leaf.domain.Resource;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface ResourceService {

    List<Resource> findAllResource();

    Resource findResourceById(Long id);
    Long saveResource(Resource city);
    Long updateResource(Resource city);
    Long deleteResource(Long id);
}