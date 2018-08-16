package space.qmen.lot.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "user")
public class User {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    @Column(name = "real_name")
    private String realName;

    private String tel;

    @Column(name = "id_card")
    private String idCard;

    private String password;

    @Column(name = "password_salt")
    private String passwordSalt;

    @Column(name = "nick_name")
    private String nickName;

    private Boolean gender;

    private String icon;

    private String email;

    private String description;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 是否是业主
     */
    @Column(name = "is_owner")
    private Boolean isOwner;

    /**
     * 是否是租客
     */
    @Column(name = "is_renter")
    private Boolean isRenter;

    /**
     * 是否是管理员
     */
    @Column(name = "is_admin")
    private Boolean isAdmin;

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
     * @return real_name
     */
    public String getRealName() {
        return realName;
    }

    /**
     * @param realName
     */
    public void setRealName(String realName) {
        this.realName = realName;
    }

    /**
     * @return tel
     */
    public String getTel() {
        return tel;
    }

    /**
     * @param tel
     */
    public void setTel(String tel) {
        this.tel = tel;
    }

    /**
     * @return id_card
     */
    public String getIdCard() {
        return idCard;
    }

    /**
     * @param idCard
     */
    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return password_salt
     */
    public String getPasswordSalt() {
        return passwordSalt;
    }

    /**
     * @param passwordSalt
     */
    public void setPasswordSalt(String passwordSalt) {
        this.passwordSalt = passwordSalt;
    }

    /**
     * @return nick_name
     */
    public String getNickName() {
        return nickName;
    }

    /**
     * @param nickName
     */
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    /**
     * @return gender
     */
    public Boolean getGender() {
        return gender;
    }

    /**
     * @param gender
     */
    public void setGender(Boolean gender) {
        this.gender = gender;
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
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     */
    public void setEmail(String email) {
        this.email = email;
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
     * 获取是否是业主
     *
     * @return is_owner - 是否是业主
     */
    public Boolean getIsOwner() {
        return isOwner;
    }

    /**
     * 设置是否是业主
     *
     * @param isOwner 是否是业主
     */
    public void setIsOwner(Boolean isOwner) {
        this.isOwner = isOwner;
    }

    /**
     * 获取是否是租客
     *
     * @return is_renter - 是否是租客
     */
    public Boolean getIsRenter() {
        return isRenter;
    }

    /**
     * 设置是否是租客
     *
     * @param isRenter 是否是租客
     */
    public void setIsRenter(Boolean isRenter) {
        this.isRenter = isRenter;
    }

    /**
     * 获取是否是管理员
     *
     * @return is_admin - 是否是管理员
     */
    public Boolean getIsAdmin() {
        return isAdmin;
    }

    /**
     * 设置是否是管理员
     *
     * @param isAdmin 是否是管理员
     */
    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
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