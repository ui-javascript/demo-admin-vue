package space.qmen.lot.dto;

import lombok.Data;

//import java.sql.Date;

@Data
public class CommunitySelectDTO {
    private Long fCommunityId;
    private String name;
//    private Long fAreaId;
//    private String fAreaCode;
//    private Double longitude;
//    private Double latitude;
//    private String address;
//    private Integer seq;
//    private String icon;
//    private String description;
//    private Date gmtCreate;
//    private Date gmtModified;
//    private Integer isDeleted;

    private Double ownerBenifitPercent;
}

