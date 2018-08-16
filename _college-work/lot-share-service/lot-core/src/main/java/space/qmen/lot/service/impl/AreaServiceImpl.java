package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.AreaDao;
import space.qmen.lot.dto.AreaSimpleDTO;
import space.qmen.lot.entity.Area;
import space.qmen.lot.service.IAreaService;
import space.qmen.lot.utils.strUtils.AreaUtil;

import java.util.List;

@Service
public class AreaServiceImpl implements IAreaService {
    @Autowired
    private AreaDao areaDao;

    @Override
    public List<Area> listArea() {
        return areaDao.listArea();
    }

    @Override
    public Area getAreaById(Long id) {
        return areaDao.getAreaById(id);
    }

    @Override
    public Long getAreaIdByName(String areaName) {
        // 由地址获取区的名字
        areaName = AreaUtil.getAreaNameFromAddress(areaName);
        return areaDao.getAreaIdByName(areaName);
    }

    @Override
    public Long deleteArea(Long id) {
        return areaDao.deleteArea(id);
    }

    @Override
    public Long saveArea(AreaSimpleDTO area) {
        return areaDao.saveArea(area);
    }

    @Override
    public Long updateArea(AreaSimpleDTO area) {
        return areaDao.updateArea(area);
    }
}
