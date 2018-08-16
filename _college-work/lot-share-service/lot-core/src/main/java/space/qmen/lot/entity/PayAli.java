package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class PayAli {
    private Long id;
    private Long accountAlipayId;
    private Long fUserId;
    private String tel;
    private String authPassword;
    private String passwordSalt;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer status;
}
