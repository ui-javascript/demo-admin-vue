package space.qmen.lot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Space {
    private Long id;
    // 车位编码
    private String code;
    private String name;
    private String icon;
    // 车位面积
    private Double spaceArea;
    private Integer level;
    private Double score;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;

    @JsonIgnore
    private Integer isDeleted;
}
