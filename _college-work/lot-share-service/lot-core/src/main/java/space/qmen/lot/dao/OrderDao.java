package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.dto.OwnerOrderDTO;
import space.qmen.lot.entity.Order;
import space.qmen.lot.param.OrderParam;
import space.qmen.lot.param.OrderRentingParam;
import space.qmen.lot.vo.OrderHistoryOrderVO;

import java.util.List;

public interface OrderDao {

    List<Order> listOrder();
    List<OwnerOrderDTO> listOrderByOwnerId(OrderParam orderParam);
    List<OrderHistoryOrderVO> listSpaceHistoryOrder(Long spaceId);

    Order getOrderById(@Param("id") Long id);
    Integer getOrderHistoryNum(Long communityId);

    Long deleteOrder(Long id);

    Long saveOrder(Order order);

    // 新增订单需对应的车位租用状态
    Long saveOrderRentingStatus(OrderRentingParam orderRentingParam);
    // 紧接上一步初次生成订单
    Long saveOrderFirstly();

    Long updateOrder(Order order);
    Long updateOrderStatus(Long orderId);
    Long updateRuleStatus(Long orderId);

}
