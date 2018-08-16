package space.qmen.lot.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "vehicle")
public class Vehicle {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    /**
     * 车辆类型(0:小客车;1:货车...)
     */
    @Column(name = "vehicle_type")
    private Byte vehicleType;

    @Column(name = "plate_num")
    private String plateNum;

    private Byte color;

    private String description;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 软删除
     */
    @Column(name = "is_deleted")
    private Boolean isDeleted;

    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取车辆类型(0:小客车;1:货车...)
     *
     * @return vehicle_type - 车辆类型(0:小客车;1:货车...)
     */
    public Byte getVehicleType() {
        return vehicleType;
    }

    /**
     * 设置车辆类型(0:小客车;1:货车...)
     *
     * @param vehicleType 车辆类型(0:小客车;1:货车...)
     */
    public void setVehicleType(Byte vehicleType) {
        this.vehicleType = vehicleType;
    }

    /**
     * @return plate_num
     */
    public String getPlateNum() {
        return plateNum;
    }

    /**
     * @param plateNum
     */
    public void setPlateNum(String plateNum) {
        this.plateNum = plateNum;
    }

    /**
     * @return color
     */
    public Byte getColor() {
        return color;
    }

    /**
     * @param color
     */
    public void setColor(Byte color) {
        this.color = color;
    }

    /**
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return gmt_create
     */
    public Date getGmtCreate() {
        return gmtCreate;
    }

    /**
     * @param gmtCreate
     */
    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    /**
     * @return gmt_modified
     */
    public Date getGmtModified() {
        return gmtModified;
    }

    /**
     * @param gmtModified
     */
    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    /**
     * 获取软删除
     *
     * @return is_deleted - 软删除
     */
    public Boolean getIsDeleted() {
        return isDeleted;
    }

    /**
     * 设置软删除
     *
     * @param isDeleted 软删除
     */
    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }
}