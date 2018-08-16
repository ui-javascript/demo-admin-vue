package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Role {
    private Long id;
    private String roleName;
    private String description;
    private Date gmtCreate;
    private Long fCreateBy;
    private Date gmtModified;
    private Long fModifiedBy;
    private Integer isDeleted;
}
