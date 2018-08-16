package space.qmen.lot.param;

import lombok.Data;

@Data
public class SpaceParam {

    // 车位编码
    private String code;
    private String name;

    // 车位面积
    private Double spaceArea;
    private String description;

    // 小区id
    private Long fCommunityId;

    // 车位id
    private Long fOwnerId;
}
