package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class PayBank {
    private Long id;
    private Long accountAlipayId;
    private Long fUserId;
    private Long bankCode;
    private String bankName;
    private String idCard;
    private String tel;
    private String authPassword;
    private String passwordSalt;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer status;
}
