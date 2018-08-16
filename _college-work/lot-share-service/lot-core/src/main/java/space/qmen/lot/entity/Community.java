package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Community {
    private Long id;
    private String name;
    private Long fAreaId;
    private String fAreaCode;
    private Double longitude;
    private Double latitude;
    private String address;
    private Integer seq;
    private String icon;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}
