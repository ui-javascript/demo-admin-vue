package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.utils.timeUtils.DateUtil;

import java.sql.Date;
import java.util.List;

@Accessors(chain = true)
@Data
public class SpaceWeekRentingStatusVO {
    private Date fromDate;
    private Date toDate;
    private Date currDate;
    private Integer currDayOfWeek;

    private List<SpaceDayRentingStatusVO> weekList;

    public SpaceWeekRentingStatusVO () {
        this.currDate = new java.sql.Date(DateUtil.getCurrentTime());
    }
}
