package space.qmen.lot.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;

@Table(name = "community")
public class Community {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    private String name;

    /**
     * 外键，所属区
     */
    @Column(name = "f_area_id")
    private Long fAreaId;

    @Column(name = "f_area_code")
    private String fAreaCode;

    private BigDecimal longitude;

    private BigDecimal latitude;

    /**
     * 详细地址
     */
    private String address;

    private Boolean seq;

    private String icon;

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
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取外键，所属区
     *
     * @return f_area_id - 外键，所属区
     */
    public Long getfAreaId() {
        return fAreaId;
    }

    /**
     * 设置外键，所属区
     *
     * @param fAreaId 外键，所属区
     */
    public void setfAreaId(Long fAreaId) {
        this.fAreaId = fAreaId;
    }

    /**
     * @return f_area_code
     */
    public String getfAreaCode() {
        return fAreaCode;
    }

    /**
     * @param fAreaCode
     */
    public void setfAreaCode(String fAreaCode) {
        this.fAreaCode = fAreaCode;
    }

    /**
     * @return longitude
     */
    public BigDecimal getLongitude() {
        return longitude;
    }

    /**
     * @param longitude
     */
    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    /**
     * @return latitude
     */
    public BigDecimal getLatitude() {
        return latitude;
    }

    /**
     * @param latitude
     */
    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    /**
     * 获取详细地址
     *
     * @return address - 详细地址
     */
    public String getAddress() {
        return address;
    }

    /**
     * 设置详细地址
     *
     * @param address 详细地址
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * @return seq
     */
    public Boolean getSeq() {
        return seq;
    }

    /**
     * @param seq
     */
    public void setSeq(Boolean seq) {
        this.seq = seq;
    }

    /**
     * @return icon
     */
    public String getIcon() {
        return icon;
    }

    /**
     * @param icon
     */
    public void setIcon(String icon) {
        this.icon = icon;
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