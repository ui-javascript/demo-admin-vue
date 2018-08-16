package space.qmen.leaf.domain;

import java.sql.Timestamp;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class Material {

    private Long id;
    private String name;
    private String url;
    private Timestamp uploadDt;
    private Long uploaderId;
    private String size;
    private int dlTimes;
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private Long materialTypeId;
    private int status;

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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Timestamp getUploadDt() {
        return uploadDt;
    }

    public void setUploadDt(Timestamp uploadDt) {
        this.uploadDt = uploadDt;
    }

    public Long getUploaderId() {
        return uploaderId;
    }

    public void setUploaderId(Long uploaderId) {
        this.uploaderId = uploaderId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getDlTimes() {
        return dlTimes;
    }

    public void setDlTimes(int dlTimes) {
        this.dlTimes = dlTimes;
    }

    public Long getMaterialTypeId() {
        return materialTypeId;
    }

    public void setMaterialTypeId(Long materialTypeId) {
        this.materialTypeId = materialTypeId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

}
