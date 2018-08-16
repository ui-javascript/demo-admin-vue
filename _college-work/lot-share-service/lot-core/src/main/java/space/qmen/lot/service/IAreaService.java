package space.qmen.lot.service;

import space.qmen.lot.dto.AreaSimpleDTO;
import space.qmen.lot.entity.Area;
import java.util.List;

public interface IAreaService {
    List<Area> listArea();

    Area getAreaById(Long id);
    Long getAreaIdByName(String areaName);

    Long deleteArea(Long id);

    Long saveArea(AreaSimpleDTO area);
    Long updateArea(AreaSimpleDTO area);
}
