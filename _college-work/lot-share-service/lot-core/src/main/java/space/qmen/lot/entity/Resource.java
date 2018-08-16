package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Resource {
    private Long id;
    private String resourceName;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
