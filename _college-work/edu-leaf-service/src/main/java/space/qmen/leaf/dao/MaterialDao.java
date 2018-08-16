package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Material;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface MaterialDao {

    List<Material> findAllMaterial();
    Material findById(@Param("id") Long id);
    Long saveMaterial(Material material);
    Long updateMaterial(Material material);
    Long deleteMaterial(Long id);
}