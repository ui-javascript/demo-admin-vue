package space.qmen.lot.entity;

import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Data
public class CommunityPolicy {
    private Long id;
    private Long fCommunityId;

    private Double ownerBenefitPercent;
    private Double communityBenefitPercent;

    private Double timeoutUnitPrice;
    private Double unitPrice;
    private Time morningBeginTime;
    private Time morningEndTime;
    private Time afternoonBeginTime;
    private Time afternoonEndTime;
    private Date gmtCreate;
    private Date gmtModified;
}
