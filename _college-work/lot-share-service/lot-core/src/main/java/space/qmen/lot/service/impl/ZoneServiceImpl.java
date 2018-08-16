package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.ZoneDao;
import space.qmen.lot.entity.Zone;
import space.qmen.lot.service.IZoneService;

import java.util.List;

@Service
public class ZoneServiceImpl implements IZoneService {
    @Autowired
    private ZoneDao zoneDao;

    @Override
    public List<Zone> listZone(){
        return zoneDao.listZone();
    }

    @Override
    public Zone getZoneById(Long id) { return zoneDao.getZoneById(id); }

    @Override
    public Long deleteZone(Long id) {
        return zoneDao.deleteZone(id);
    }

    @Override
    public Long saveZone(Zone zone) { return zoneDao.saveZone(zone); }

    @Override
    public Long updateZone(Zone zone) { return zoneDao.updateZone(zone); }
}
