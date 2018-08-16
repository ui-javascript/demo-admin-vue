package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Accessors(chain = true)
@Data
public class LongSpaceRentingStatusVO {
    private List<WeekSpaceRentingStatusVO> weekStatusList;

    private int[] weekRuleList;
    private int isMorningOk;
    private int isAfternoonOk;
    private int isFestivalOk;

    public LongSpaceRentingStatusVO() {
        this.isMorningOk = 0;
        this.isAfternoonOk = 0;
        this.isFestivalOk = 0;
    }
}
