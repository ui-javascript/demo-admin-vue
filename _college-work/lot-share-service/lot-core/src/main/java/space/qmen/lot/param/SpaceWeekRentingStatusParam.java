package space.qmen.lot.param;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.utils.timeUtils.DateUtil;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class SpaceWeekRentingStatusParam {
    // App发送过来的日期, 默认今日
    private Date date;

    private Long spaceId;

    // 租客id
    private Long renterId;

    public SpaceWeekRentingStatusParam() {
        this.date = new java.sql.Date(DateUtil.getCurrentTime());
    }
}
