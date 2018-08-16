package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;
import java.sql.Time;

@Accessors(chain = true)
@Data
public class OrderHistoryOrderVO {
    private Integer orderType;
    private Integer orderStatus;
    private Integer orderLevel;
    private Integer orderScore;
    private Double billAmount;
    private Integer periodType;
    private Date dateBegin;
    private Date dateEnd;
    private Time morningBeginTime;
    private Time morningEndTime;
    private Time afternoonBeginTime;
    private Time afternoonEndTime;
}
