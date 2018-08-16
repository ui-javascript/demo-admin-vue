package space.qmen.leaf.domain;

import java.util.Date;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class Tch {
    private Long id;
    private String job_num;
    private String name;
    private Long gender;
    private String title;
    private String qualification;
    private String qualification_school;
    private String degree;
    private String degree_school;
    private String research_area;
    private String tel;
    private String mobile;
    private String email;
    private Date birthday;
    private String description;
    private Long status;

    public Long getId() {
        return id;
    }

    public String getJob_num() {
        return job_num;
    }

    public String getName() {
        return name;
    }

    public Long getGender() {
        return gender;
    }

    public String getTitle() {
        return title;
    }

    public String getQualification() {
        return qualification;
    }

    public String getQualification_school() {
        return qualification_school;
    }

    public String getDegree() {
        return degree;
    }

    public String getDegree_school() {
        return degree_school;
    }

    public String getResearch_area() {
        return research_area;
    }

    public String getTel() {
        return tel;
    }

    public String getMobile() {
        return mobile;
    }

    public String getEmail() {
        return email;
    }

    public Date getBirthday() {
        return birthday;
    }

    public String getDescription() {
        return description;
    }

    public Long getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setJob_num(String job_num) {
        this.job_num = job_num;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGender(Long gender) {
        this.gender = gender;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public void setQualification_school(String qualification_school) {
        this.qualification_school = qualification_school;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public void setDegree_school(String degree_school) {
        this.degree_school = degree_school;
    }

    public void setResearch_area(String research_area) {
        this.research_area = research_area;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(Long status) {
        this.status = status;
    }
}
