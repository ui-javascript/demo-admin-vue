package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Bill {
    private Long id;
    private Integer transactionType;
    private Double billAmount;
    private Long fromAccountId;
    private String fromAccountName;
    private Long toAccountId;
    private String toAccountName;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
