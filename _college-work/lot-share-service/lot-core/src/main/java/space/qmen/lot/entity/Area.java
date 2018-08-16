package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Area {

    private Long id;
    private Long pid;
    private String areaCode;

    private String name;

    private Integer level;
    private Integer seq;

    private Date gmtCreate;
    private Date gmtModified;

    private Integer isTown;
    private Integer isDeleted;
}
