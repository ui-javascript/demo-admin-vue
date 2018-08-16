package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.Vehicle;

import java.util.List;

public interface VehicleDao {
    List<Vehicle> listVehicle();
    List<Vehicle> listVehicleByRenterId(Long renterId);

    Vehicle getVehicleById(@Param("id") Long id);
    Long deleteVehicle(Long id);

    Long saveVehicle(Vehicle vehicle);
    Long updateVehicle(Vehicle vehicle);
}
