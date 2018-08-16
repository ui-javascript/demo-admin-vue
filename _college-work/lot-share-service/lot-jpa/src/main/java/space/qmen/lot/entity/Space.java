package space.qmen.lot.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;

@Table(name = "space")
public class Space {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    /**
     * 车位号
     */
    private String code;

    private String name;

    /**
     * 车位照片
     */
    private String icon;

    /**
     * 车位面积（单位：平方米）
     */
    @Column(name = "space_area")
    private BigDecimal spaceArea;

    /**
     * 等级
     */
    private Byte level;

    /**
     * 得分
     */
    private BigDecimal score;

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
     * 获取车位号
     *
     * @return code - 车位号
     */
    public String getCode() {
        return code;
    }

    /**
     * 设置车位号
     *
     * @param code 车位号
     */
    public void setCode(String code) {
        this.code = code;
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
     * 获取车位照片
     *
     * @return icon - 车位照片
     */
    public String getIcon() {
        return icon;
    }

    /**
     * 设置车位照片
     *
     * @param icon 车位照片
     */
    public void setIcon(String icon) {
        this.icon = icon;
    }

    /**
     * 获取车位面积（单位：平方米）
     *
     * @return space_area - 车位面积（单位：平方米）
     */
    public BigDecimal getSpaceArea() {
        return spaceArea;
    }

    /**
     * 设置车位面积（单位：平方米）
     *
     * @param spaceArea 车位面积（单位：平方米）
     */
    public void setSpaceArea(BigDecimal spaceArea) {
        this.spaceArea = spaceArea;
    }

    /**
     * 获取等级
     *
     * @return level - 等级
     */
    public Byte getLevel() {
        return level;
    }

    /**
     * 设置等级
     *
     * @param level 等级
     */
    public void setLevel(Byte level) {
        this.level = level;
    }

    /**
     * 获取得分
     *
     * @return score - 得分
     */
    public BigDecimal getScore() {
        return score;
    }

    /**
     * 设置得分
     *
     * @param score 得分
     */
    public void setScore(BigDecimal score) {
        this.score = score;
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