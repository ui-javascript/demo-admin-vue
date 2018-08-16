package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.MaterialType;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface MaterialTypeDao {

    List<MaterialType> findAllMaterialType();
    MaterialType findById(@Param("id") Long id);
    Long saveMaterialType(MaterialType materialType);
    Long updateMaterialType(MaterialType materialType);
    Long deleteMaterialType(Long id);
}