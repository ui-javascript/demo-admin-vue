package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class SpaceDayRentingStatusVO {

    // 周几
    private Integer dayOfWeek;

    private Date date;

    // 上午的租用状态
    // 0 已过期或不开放
    // 1 可租用
    // 2 被租用
    private Integer morningStatus;
    // 上午是否是自己租用
    private Integer isMorningMyself;

    private Integer afternoonStatus;
    private Integer isAfternoonMyself;

    public SpaceDayRentingStatusVO() {
        // 默认无人租用
        // 默认不是自己租用
        this.morningStatus = 1;
        this.isMorningMyself = 0;

        this.afternoonStatus = 1;
        this.isAfternoonMyself = 0;
    }
}
