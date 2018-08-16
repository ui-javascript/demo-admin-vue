package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Order;
import space.qmen.lot.param.OrderParam;
import space.qmen.lot.param.OrderRentingParam;
import space.qmen.lot.service.IOrderService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

@Api(value="订单", tags={"订单"})
@RequestMapping("/api/v1")
@RestController
public class OrderRestController {
    @Autowired
    private IOrderService orderService;

    @ApiIgnore
    @ApiOperation("根据id获取订单")
    @RequestMapping(value = "/order/{id}", method = RequestMethod.GET)
    public Object getOrderById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(orderService.getOrderById(id));
    }

    @ApiIgnore
    @ApiOperation("获取所有订单")
    @RequestMapping(value = "/order", method = RequestMethod.GET)
    public Object listOrder() {
        return ResultUtil.getResultWithSuccess(orderService.listOrder());
    }

    @ApiOperation("新增订单(包括短租与长租)")
    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public Object saveOrder(@RequestBody OrderRentingParam orderRentingParam) {
        orderService.saveOrder(orderRentingParam);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("修改订单信息")
    @RequestMapping(value = "/order", method = RequestMethod.PUT)
    public Object updateOrder(@RequestBody Order order) {
        orderService.updateOrder(order);
        return ResultUtil.getResultWithSuccess();
    }


    @ApiOperation("取消订单信息")
    @RequestMapping(value = "/order/cancel/{orderId}", method = RequestMethod.GET)
    public Object cancelOrder(@PathVariable("orderId") Long orderId) {
        orderService.updateOrderStatus(orderId);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("根据id删除订单")
    @RequestMapping(value = "/order/{id}", method = RequestMethod.DELETE)
    public Object deleteOrder(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
        return ResultUtil.getResultWithSuccess();
    }


    // 自定义
    @ApiOperation("获取所有订单")
    @RequestMapping(value = "/owner-order", method = RequestMethod.GET)
    public Object listOrderRentingStatus(OrderParam orderParam) {
        return ResultUtil.getResultWithSuccess(orderService.listOrderByOwnerId(orderParam));
    }

    @ApiOperation("获取车位历史订单")
    @RequestMapping(value = "/space-history-order/{id}", method = RequestMethod.GET)
    public Object listSpaceHistoryOrder(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(orderService.listSpaceHistoryOrder(id));
    }

}
