package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.MaterialDao;
import space.qmen.leaf.domain.Material;
import space.qmen.leaf.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class MaterialServiceImpl implements MaterialService {

    @Autowired
    private MaterialDao materialDao;

    public List<Material> findAllMaterial(){
        return materialDao.findAllMaterial();
    }

    public Material findMaterialById(Long id) {
        return materialDao.findById(id);
    }

    @Override
    public Long saveMaterial(Material material) {
        return materialDao.saveMaterial(material);
    }

    @Override
    public Long updateMaterial(Material material) {
        return materialDao.updateMaterial(material);
    }

    @Override
    public Long deleteMaterial(Long id) {
        return materialDao.deleteMaterial(id);
    }

}