package space.qmen.lot.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
@Data
public class SpaceDayRentingStatusDTO {
    private Long renterId;

    // 租用类型
    // 0表示租上午，1表示租下午, 2表示全天, 3长期租用
    private Integer periodType;
}
