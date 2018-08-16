package space.qmen.lot.dto;

import lombok.Data;

import java.sql.Time;


@Data
public class SpaceDetailsDTO {
    // 业主Id
    private Long ownerId;

    // 车位Id
    private Long spaceId;

    // 停车区
    private Long zoneId;

    // 小区名
    private Long communityId;
    private String communityName;

    // 车位号
    private String code;

    // 起止时间
    private Time morningBeginTime;
    private Time morningEndTime;
    private Time afternoonBeginTime;
    private Time afternoonEndTime;

    private Integer isMorningOk;
    private Integer isAfternoonOk;

    // 收益比
    private Double ownerBenifitPercent;
    private Double unitPrice;

    // 车位状态
    private Integer status;
}
