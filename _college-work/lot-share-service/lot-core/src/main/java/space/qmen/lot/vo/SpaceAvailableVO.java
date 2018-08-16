package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.entity.Community;

@Accessors(chain = true)
@Data
public class SpaceAvailableVO extends Community {
    private Integer spaceCount;
    private Long[] spaceIdList;

    // 空车位数LEVEL
    private Integer level;

    // 历史交易次数
    private Integer historyOrderNum;

    private Double unitPrice;

    public SpaceAvailableVO() {
        this.spaceCount = 0;
        this.historyOrderNum = 0;
    }

}
