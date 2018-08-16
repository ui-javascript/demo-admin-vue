package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.entity.Area;
import space.qmen.lot.mapper.AreaMapper;
import space.qmen.lot.service.IAreaService;
import tk.mybatis.mapper.entity.Example;

@Service
public class AreaServiceImpl implements IAreaService {
    @Autowired
    private AreaMapper areaMapper;

    @Override
    public Area getAreaById(Long id) {
        Example example = new Example(Area.class);
        example.createCriteria().andEqualTo("id", id);
        return areaMapper.selectByPrimaryKey(id);
    }

}
