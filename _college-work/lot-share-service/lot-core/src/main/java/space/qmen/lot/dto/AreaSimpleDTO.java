package space.qmen.lot.dto;

import lombok.Data;


@Data
public class AreaSimpleDTO {

    private Long id;
    private Long pid;
    private String areaCode;

    private String name;

    private Integer level;
    private Integer seq;

//    private Date gmtCreate;
//    private Date gmtModified;

    private Integer isTown;
//    private Byte isDeleted;
}
