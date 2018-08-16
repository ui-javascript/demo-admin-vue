package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
@Data
public class WeekSpaceRentingStatusVO {
    private Integer year;
    private Integer weekOfYear;
    private String fromDate;
    private String toDate;

    // 车位租用情况
    // 是否本人租用
    private Integer spaceStatus;
    private Integer isMyself;

    public WeekSpaceRentingStatusVO () {
        this.spaceStatus = 1;
        isMyself = 0;
    }
}
