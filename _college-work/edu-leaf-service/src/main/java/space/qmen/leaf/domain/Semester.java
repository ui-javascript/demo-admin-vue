package space.qmen.leaf.domain;

import java.sql.Date;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class Semester {

    private Long id;
    private String name;
    private Date begin_date;
    private Date end_date;
    private String description;
    private Long year_id;
    private int is_now;
    private int status;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Date getBegin_date() {
        return begin_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public String getDescription() {
        return description;
    }

    public Long getYear_id() {
        return year_id;
    }

    public int getIs_now() {
        return is_now;
    }

    public int getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBegin_date(Date begin_date) {
        this.begin_date = begin_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setYear_id(Long year_id) {
        this.year_id = year_id;
    }

    public void setIs_now(int is_now) {
        this.is_now = is_now;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
