package space.qmen.leaf.service;

import space.qmen.leaf.domain.MaterialType;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface MaterialTypeService {

    List<MaterialType> findAllMaterialType();

    MaterialType findMaterialTypeById(Long id);
    Long saveMaterialType(MaterialType city);
    Long updateMaterialType(MaterialType city);
    Long deleteMaterialType(Long id);
}