package space.qmen.leaf.service;

import space.qmen.leaf.domain.Material;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface MaterialService {

    List<Material> findAllMaterial();

    Material findMaterialById(Long id);
    Long saveMaterial(Material city);
    Long updateMaterial(Material city);
    Long deleteMaterial(Long id);
}