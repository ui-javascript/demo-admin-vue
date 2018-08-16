package space.qmen.leaf.domain;

import java.sql.Timestamp;

/**
 * Created by Luo_0412 on 2017/5/24.
 */
public class Stu {private Long id;
      private String stu_id;
      private String name;
      private int gender;
      private Long dept_id;
      private Long major_id;
      private Long class_id;
      private int grade;
      private String mobile;
      private String email;
      private Timestamp birthday;
      private String description;

      public Long getId() {
            return id;
      }

      public String getStu_id() {
            return stu_id;
      }

      public String getName() {
            return name;
      }

      public int getGender() {
            return gender;
      }

      public Long getDept_id() {
            return dept_id;
      }

      public Long getMajor_id() {
            return major_id;
      }

      public Long getClass_id() {
            return class_id;
      }

      public int getGrade() {
            return grade;
      }

      public String getMobile() {
            return mobile;
      }

      public String getEmail() {
            return email;
      }

      public Timestamp getBirthday() {
            return birthday;
      }

      public String getDescription() {
            return description;
      }

      public void setId(Long id) {
            this.id = id;
      }

      public void setStu_id(String stu_id) {
            this.stu_id = stu_id;
      }

      public void setName(String name) {
            this.name = name;
      }

      public void setGender(int gender) {
            this.gender = gender;
      }

      public void setDept_id(Long dept_id) {
            this.dept_id = dept_id;
      }

      public void setMajor_id(Long major_id) {
            this.major_id = major_id;
      }

      public void setClass_id(Long class_id) {
            this.class_id = class_id;
      }

      public void setGrade(int grade) {
            this.grade = grade;
      }

      public void setMobile(String mobile) {
            this.mobile = mobile;
      }

      public void setEmail(String email) {
            this.email = email;
      }

      public void setBirthday(Timestamp birthday) {
            this.birthday = birthday;
      }

      public void setDescription(String description) {
            this.description = description;
      }
}
