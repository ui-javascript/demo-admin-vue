package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.VehicleDao;
import space.qmen.lot.entity.Vehicle;
import space.qmen.lot.service.IVehicleService;

import java.util.List;

@Service
public class VehicleServiceImpl implements IVehicleService {
    @Autowired
    private VehicleDao vehicleDao;

    @Override
    public List<Vehicle> listVehicle(){
        return vehicleDao.listVehicle();
    }

    @Override
    public List<Vehicle> listVehicleByRenterId(Long renterId) {
        return vehicleDao.listVehicleByRenterId(renterId);
    }


    @Override
    public Vehicle getVehicleById(Long id) { return vehicleDao.getVehicleById(id); }

    @Override
    public Long deleteVehicle(Long id) {
        return vehicleDao.deleteVehicle(id);
    }

    @Override
    public Long saveVehicle(Vehicle vehicle) { return vehicleDao.saveVehicle(vehicle); }

    @Override
    public Long updateVehicle(Vehicle vehicle) { return vehicleDao.updateVehicle(vehicle); }
}
