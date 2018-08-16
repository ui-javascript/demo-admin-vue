package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.MaterialTypeDao;
import space.qmen.leaf.domain.MaterialType;
import space.qmen.leaf.service.MaterialTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class MaterialTypeServiceImpl implements MaterialTypeService {

    @Autowired
    private MaterialTypeDao materialTypeDao;

    public List<MaterialType> findAllMaterialType(){
        return materialTypeDao.findAllMaterialType();
    }

    public MaterialType findMaterialTypeById(Long id) {
        return materialTypeDao.findById(id);
    }

    @Override
    public Long saveMaterialType(MaterialType materialType) {
        return materialTypeDao.saveMaterialType(materialType);
    }

    @Override
    public Long updateMaterialType(MaterialType materialType) {
        return materialTypeDao.updateMaterialType(materialType);
    }

    @Override
    public Long deleteMaterialType(Long id) {
        return materialTypeDao.deleteMaterialType(id);
    }

}