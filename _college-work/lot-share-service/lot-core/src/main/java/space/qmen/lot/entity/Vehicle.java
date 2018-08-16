package space.qmen.lot.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.domain.BaseDTO;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Vehicle extends BaseDTO {
    private Long id;
    private Integer vehicleType;
    private String plateNum;
    private Integer color;
    private String description;

    @JsonIgnore
    private Date gmtCreate;

    @JsonIgnore
    private Date gmtModified;

    @JsonIgnore
    private Integer isDeleted;
}
