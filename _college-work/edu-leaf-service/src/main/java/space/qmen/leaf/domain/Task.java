package space.qmen.leaf.domain;

import java.util.Date;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class Task {
    private Long id;
    private String name;
    private Long publisherId;
    private String content;
    private String description;
    private Date beginDt;
    private Date endDt;
    private Double fulfillment;
    private Long completedNum;
    private Long totalNum;
    private Long status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPublisherId() {
        return publisherId;
    }

    public void setPublisherId(Long publisherId) {
        this.publisherId = publisherId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getBeginDt() {
        return beginDt;
    }

    public void setBeginDt(Date beginDt) {
        this.beginDt = beginDt;
    }

    public Date getEndDt() {
        return endDt;
    }

    public void setEndDt(Date endDt) {
        this.endDt = endDt;
    }

    public Double getFulfillment() {
        return fulfillment;
    }

    public void setFulfillment(Double fulfillment) {
        this.fulfillment = fulfillment;
    }

    public Long getCompletedNum() {
        return completedNum;
    }

    public void setCompletedNum(Long completedNum) {
        this.completedNum = completedNum;
    }

    public Long getTotalNum() {
        return totalNum;
    }

    public void setTotalNum(Long totalNum) {
        this.totalNum = totalNum;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }
}
