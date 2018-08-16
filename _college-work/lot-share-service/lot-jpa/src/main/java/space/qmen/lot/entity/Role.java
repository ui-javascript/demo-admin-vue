package space.qmen.lot.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "role")
public class Role {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    @Column(name = "role_name")
    private String roleName;

    private String description;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "f_create_by")
    private Long fCreateBy;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    @Column(name = "f_modified_by")
    private Long fModifiedBy;

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
     * @return role_name
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * @param roleName
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
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
     * @return f_create_by
     */
    public Long getfCreateBy() {
        return fCreateBy;
    }

    /**
     * @param fCreateBy
     */
    public void setfCreateBy(Long fCreateBy) {
        this.fCreateBy = fCreateBy;
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
     * @return f_modified_by
     */
    public Long getfModifiedBy() {
        return fModifiedBy;
    }

    /**
     * @param fModifiedBy
     */
    public void setfModifiedBy(Long fModifiedBy) {
        this.fModifiedBy = fModifiedBy;
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