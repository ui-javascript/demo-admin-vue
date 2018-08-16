package space.qmen.lot.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "notice")
public class Notice {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    /**
     * 短信类型(0: 车位；1:订单；)
     */
    private Boolean action;

    /**
     * 状态(0:审核中；1：通过；2：被禁用)
     */
    private Boolean state;

    private String title;

    private String url;

    private String content;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 优先级
     */
    private Boolean seq;

    /**
     * 是否已阅读
     */
    @Column(name = "is_read")
    private Boolean isRead;

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
     * 获取短信类型(0: 车位；1:订单；)
     *
     * @return action - 短信类型(0: 车位；1:订单；)
     */
    public Boolean getAction() {
        return action;
    }

    /**
     * 设置短信类型(0: 车位；1:订单；)
     *
     * @param action 短信类型(0: 车位；1:订单；)
     */
    public void setAction(Boolean action) {
        this.action = action;
    }

    /**
     * 获取状态(0:审核中；1：通过；2：被禁用)
     *
     * @return state - 状态(0:审核中；1：通过；2：被禁用)
     */
    public Boolean getState() {
        return state;
    }

    /**
     * 设置状态(0:审核中；1：通过；2：被禁用)
     *
     * @param state 状态(0:审核中；1：通过；2：被禁用)
     */
    public void setState(Boolean state) {
        this.state = state;
    }

    /**
     * @return title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * @return content
     */
    public String getContent() {
        return content;
    }

    /**
     * @param content
     */
    public void setContent(String content) {
        this.content = content;
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
     * 获取优先级
     *
     * @return seq - 优先级
     */
    public Boolean getSeq() {
        return seq;
    }

    /**
     * 设置优先级
     *
     * @param seq 优先级
     */
    public void setSeq(Boolean seq) {
        this.seq = seq;
    }

    /**
     * 获取是否已阅读
     *
     * @return is_read - 是否已阅读
     */
    public Boolean getIsRead() {
        return isRead;
    }

    /**
     * 设置是否已阅读
     *
     * @param isRead 是否已阅读
     */
    public void setIsRead(Boolean isRead) {
        this.isRead = isRead;
    }

    /**
     * @return is_deleted
     */
    public Boolean getIsDeleted() {
        return isDeleted;
    }

    /**
     * @param isDeleted
     */
    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }
}