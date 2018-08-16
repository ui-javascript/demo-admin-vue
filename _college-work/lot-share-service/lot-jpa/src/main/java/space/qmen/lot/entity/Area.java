package space.qmen.lot.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "area")
public class Area {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    private Long pid;

    @Column(name = "area_code")
    private String areaCode;

    private String name;

    /**
     * 行政等级(省:0; 市:1;区:2)
     */
    private Boolean level;

    private Boolean seq;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 是否是市区
     */
    @Column(name = "is_town")
    private Boolean isTown;

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
     * @return pid
     */
    public Long getPid() {
        return pid;
    }

    /**
     * @param pid
     */
    public void setPid(Long pid) {
        this.pid = pid;
    }

    /**
     * @return area_code
     */
    public String getAreaCode() {
        return areaCode;
    }

    /**
     * @param areaCode
     */
    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
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
     * 获取行政等级(省:0; 市:1;区:2)
     *
     * @return level - 行政等级(省:0; 市:1;区:2)
     */
    public Boolean getLevel() {
        return level;
    }

    /**
     * 设置行政等级(省:0; 市:1;区:2)
     *
     * @param level 行政等级(省:0; 市:1;区:2)
     */
    public void setLevel(Boolean level) {
        this.level = level;
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
     * 获取是否是市区
     *
     * @return is_town - 是否是市区
     */
    public Boolean getIsTown() {
        return isTown;
    }

    /**
     * 设置是否是市区
     *
     * @param isTown 是否是市区
     */
    public void setIsTown(Boolean isTown) {
        this.isTown = isTown;
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