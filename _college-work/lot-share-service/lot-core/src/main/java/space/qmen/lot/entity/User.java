package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;


import java.io.Serializable;
import java.sql.Date;

@Accessors(chain = true)
@Data

public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private String realName;

    private String tel;

    private String idCard;

    private String password;

    private String passwordSalt;

    private String nickName;

    private Integer gender;

    private String icon;

    private String email;

    private String description;

    private Date gmtCreate;

    private Date gmtModified;

    private Integer isOwner;

    private Integer isRenter;

    private Integer isAdmin;

    private Integer isDeleted;
}
