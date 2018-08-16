package space.qmen.leaf.domain;

import java.util.Date;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class TaskUser {
    private Long id;
    private Long task_id;
    private Long user_id;
    private Date begin_dt;
    private Date end_dt;
    private Long status;

    public Long getId() {
        return id;
    }

    public Long getTask_id() {
        return task_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public Date getBegin_dt() {
        return begin_dt;
    }

    public Date getEnd_dt() {
        return end_dt;
    }

    public Long getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTask_id(Long task_id) {
        this.task_id = task_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public void setBegin_dt(Date begin_dt) {
        this.begin_dt = begin_dt;
    }

    public void setEnd_dt(Date end_dt) {
        this.end_dt = end_dt;
    }

    public void setStatus(Long status) {
        this.status = status;
    }
}
