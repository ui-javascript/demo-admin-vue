package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Zone;

import java.util.List;

public interface ZoneDao {
    List<Zone> listZone();
    Zone getZoneById(@Param("id") Long id);
    Long deleteZone(Long id);

    Long saveZone(Zone zone);
    Long updateZone(Zone zone);
}
