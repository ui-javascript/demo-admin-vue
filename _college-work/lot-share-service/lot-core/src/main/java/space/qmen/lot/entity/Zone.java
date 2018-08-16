package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Zone {
    private Long id;
    private String name;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
