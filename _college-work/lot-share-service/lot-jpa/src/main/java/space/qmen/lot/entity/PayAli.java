package space.qmen.lot.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "pay_ali")
public class PayAli {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    @Column(name = "account_alipay_id")
    private Long accountAlipayId;

    @Column(name = "f_user_id")
    private Long fUserId;

    private String tel;

    @Column(name = "auth_password")
    private String authPassword;

    @Column(name = "password_salt")
    private String passwordSalt;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 支付宝绑定状态(0:未认证;1:验证通过;2:取消绑定）
     */
    private Boolean status;

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
     * @return account_alipay_id
     */
    public Long getAccountAlipayId() {
        return accountAlipayId;
    }

    /**
     * @param accountAlipayId
     */
    public void setAccountAlipayId(Long accountAlipayId) {
        this.accountAlipayId = accountAlipayId;
    }

    /**
     * @return f_user_id
     */
    public Long getfUserId() {
        return fUserId;
    }

    /**
     * @param fUserId
     */
    public void setfUserId(Long fUserId) {
        this.fUserId = fUserId;
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
     * @return auth_password
     */
    public String getAuthPassword() {
        return authPassword;
    }

    /**
     * @param authPassword
     */
    public void setAuthPassword(String authPassword) {
        this.authPassword = authPassword;
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
     * 获取支付宝绑定状态(0:未认证;1:验证通过;2:取消绑定）
     *
     * @return status - 支付宝绑定状态(0:未认证;1:验证通过;2:取消绑定）
     */
    public Boolean getStatus() {
        return status;
    }

    /**
     * 设置支付宝绑定状态(0:未认证;1:验证通过;2:取消绑定）
     *
     * @param status 支付宝绑定状态(0:未认证;1:验证通过;2:取消绑定）
     */
    public void setStatus(Boolean status) {
        this.status = status;
    }
}