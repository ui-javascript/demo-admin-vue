package space.qmen.lot.service;

import space.qmen.lot.entity.Zone;

import java.util.List;

public interface IZoneService {
    List<Zone> listZone();
    Zone getZoneById(Long id);
    Long deleteZone(Long id);

    Long saveZone(Zone zone);
    Long updateZone(Zone zone);
}
