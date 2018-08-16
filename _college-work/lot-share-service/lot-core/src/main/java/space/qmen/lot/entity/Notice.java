package space.qmen.lot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Notice {
    private Long id;
    private Integer action;
    private Integer state;
    private String title;
    private String content;
    private Date gmtCreate;

    @JsonIgnore
    private Date gmtModified;

    @JsonIgnore
    private Integer isDeleted;
}

