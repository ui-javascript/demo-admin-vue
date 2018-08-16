package space.qmen.lot.param;

import lombok.Data;

@Data
public class OrderParam extends PageParam {
    private Long userId;
    private Long renterId;

    // 0表示租客 1表示业主
//    private Long userType;

    // 订单状态
    // 4表示全部
    // (0:预订->1:支付完成进行中->2:已完成;3:已取消)
    private Long orderStatus;

}
