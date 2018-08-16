package space.qmen.lot.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;

@Table(name = "order")
public class Order {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    /**
     * 租用类型(0:短租;1:长租)
     */
    @Column(name = "order_type")
    private Long orderType;

    /**
     * 如果为短租, 所属租用情况id
     */
    @Column(name = "f_renting_status_id")
    private Long fRentingStatusId;

    @Column(name = "order_description")
    private String orderDescription;

    /**
     * 单价
     */
    @Column(name = "unit_price")
    private BigDecimal unitPrice;

    @Column(name = "timeout_unit_price")
    private BigDecimal timeoutUnitPrice;

    /**
     * 时长
     */
    private BigDecimal duration;

    @Column(name = "timeout_duration")
    private BigDecimal timeoutDuration;

    @Column(name = "timeout_payment")
    private BigDecimal timeoutPayment;

    @Column(name = "expected_payment")
    private BigDecimal expectedPayment;

    /**
     * 优惠折扣
     */
    private BigDecimal reduction;

    /**
     * 优惠折扣的原因
     */
    @Column(name = "reduction_description")
    private String reductionDescription;

    /**
     * 预支付金额
     */
    @Column(name = "pre_payment")
    private BigDecimal prePayment;

    /**
     * 预支付账单号
     */
    @Column(name = "f_pre_payment_bill_id")
    private Long fPrePaymentBillId;

    /**
     * 实际支付
     */
    @Column(name = "actual_payment")
    private BigDecimal actualPayment;

    /**
     * 实际支付账单号
     */
    @Column(name = "f_actual_payment_bill_id")
    private Long fActualPaymentBillId;

    /**
     * 车位打分
     */
    @Column(name = "order_score")
    private BigDecimal orderScore;

    /**
     * 车位等级
     */
    @Column(name = "order_level")
    private Boolean orderLevel;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 订单状态(0:预订->1:支付完成进行中->2:已完成;3:已取消)
     */
    private Boolean status;

    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取租用类型(0:短租;1:长租)
     *
     * @return order_type - 租用类型(0:短租;1:长租)
     */
    public Long getOrderType() {
        return orderType;
    }

    /**
     * 设置租用类型(0:短租;1:长租)
     *
     * @param orderType 租用类型(0:短租;1:长租)
     */
    public void setOrderType(Long orderType) {
        this.orderType = orderType;
    }

    /**
     * 获取如果为短租, 所属租用情况id
     *
     * @return f_renting_status_id - 如果为短租, 所属租用情况id
     */
    public Long getfRentingStatusId() {
        return fRentingStatusId;
    }

    /**
     * 设置如果为短租, 所属租用情况id
     *
     * @param fRentingStatusId 如果为短租, 所属租用情况id
     */
    public void setfRentingStatusId(Long fRentingStatusId) {
        this.fRentingStatusId = fRentingStatusId;
    }

    /**
     * @return order_description
     */
    public String getOrderDescription() {
        return orderDescription;
    }

    /**
     * @param orderDescription
     */
    public void setOrderDescription(String orderDescription) {
        this.orderDescription = orderDescription;
    }

    /**
     * 获取单价
     *
     * @return unit_price - 单价
     */
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    /**
     * 设置单价
     *
     * @param unitPrice 单价
     */
    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    /**
     * @return timeout_unit_price
     */
    public BigDecimal getTimeoutUnitPrice() {
        return timeoutUnitPrice;
    }

    /**
     * @param timeoutUnitPrice
     */
    public void setTimeoutUnitPrice(BigDecimal timeoutUnitPrice) {
        this.timeoutUnitPrice = timeoutUnitPrice;
    }

    /**
     * 获取时长
     *
     * @return duration - 时长
     */
    public BigDecimal getDuration() {
        return duration;
    }

    /**
     * 设置时长
     *
     * @param duration 时长
     */
    public void setDuration(BigDecimal duration) {
        this.duration = duration;
    }

    /**
     * @return timeout_duration
     */
    public BigDecimal getTimeoutDuration() {
        return timeoutDuration;
    }

    /**
     * @param timeoutDuration
     */
    public void setTimeoutDuration(BigDecimal timeoutDuration) {
        this.timeoutDuration = timeoutDuration;
    }

    /**
     * @return timeout_payment
     */
    public BigDecimal getTimeoutPayment() {
        return timeoutPayment;
    }

    /**
     * @param timeoutPayment
     */
    public void setTimeoutPayment(BigDecimal timeoutPayment) {
        this.timeoutPayment = timeoutPayment;
    }

    /**
     * @return expected_payment
     */
    public BigDecimal getExpectedPayment() {
        return expectedPayment;
    }

    /**
     * @param expectedPayment
     */
    public void setExpectedPayment(BigDecimal expectedPayment) {
        this.expectedPayment = expectedPayment;
    }

    /**
     * 获取优惠折扣
     *
     * @return reduction - 优惠折扣
     */
    public BigDecimal getReduction() {
        return reduction;
    }

    /**
     * 设置优惠折扣
     *
     * @param reduction 优惠折扣
     */
    public void setReduction(BigDecimal reduction) {
        this.reduction = reduction;
    }

    /**
     * 获取优惠折扣的原因
     *
     * @return reduction_description - 优惠折扣的原因
     */
    public String getReductionDescription() {
        return reductionDescription;
    }

    /**
     * 设置优惠折扣的原因
     *
     * @param reductionDescription 优惠折扣的原因
     */
    public void setReductionDescription(String reductionDescription) {
        this.reductionDescription = reductionDescription;
    }

    /**
     * 获取预支付金额
     *
     * @return pre_payment - 预支付金额
     */
    public BigDecimal getPrePayment() {
        return prePayment;
    }

    /**
     * 设置预支付金额
     *
     * @param prePayment 预支付金额
     */
    public void setPrePayment(BigDecimal prePayment) {
        this.prePayment = prePayment;
    }

    /**
     * 获取预支付账单号
     *
     * @return f_pre_payment_bill_id - 预支付账单号
     */
    public Long getfPrePaymentBillId() {
        return fPrePaymentBillId;
    }

    /**
     * 设置预支付账单号
     *
     * @param fPrePaymentBillId 预支付账单号
     */
    public void setfPrePaymentBillId(Long fPrePaymentBillId) {
        this.fPrePaymentBillId = fPrePaymentBillId;
    }

    /**
     * 获取实际支付
     *
     * @return actual_payment - 实际支付
     */
    public BigDecimal getActualPayment() {
        return actualPayment;
    }

    /**
     * 设置实际支付
     *
     * @param actualPayment 实际支付
     */
    public void setActualPayment(BigDecimal actualPayment) {
        this.actualPayment = actualPayment;
    }

    /**
     * 获取实际支付账单号
     *
     * @return f_actual_payment_bill_id - 实际支付账单号
     */
    public Long getfActualPaymentBillId() {
        return fActualPaymentBillId;
    }

    /**
     * 设置实际支付账单号
     *
     * @param fActualPaymentBillId 实际支付账单号
     */
    public void setfActualPaymentBillId(Long fActualPaymentBillId) {
        this.fActualPaymentBillId = fActualPaymentBillId;
    }

    /**
     * 获取车位打分
     *
     * @return order_score - 车位打分
     */
    public BigDecimal getOrderScore() {
        return orderScore;
    }

    /**
     * 设置车位打分
     *
     * @param orderScore 车位打分
     */
    public void setOrderScore(BigDecimal orderScore) {
        this.orderScore = orderScore;
    }

    /**
     * 获取车位等级
     *
     * @return order_level - 车位等级
     */
    public Boolean getOrderLevel() {
        return orderLevel;
    }

    /**
     * 设置车位等级
     *
     * @param orderLevel 车位等级
     */
    public void setOrderLevel(Boolean orderLevel) {
        this.orderLevel = orderLevel;
    }

    /**
     * @return gmt_create
     */
    public Date getGmtCreate() {
        return gmtCreate;
    }

    /**
     * @param gmtCreate
     */
    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    /**
     * @return gmt_modified
     */
    public Date getGmtModified() {
        return gmtModified;
    }

    /**
     * @param gmtModified
     */
    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    /**
     * 获取订单状态(0:预订->1:支付完成进行中->2:已完成;3:已取消)
     *
     * @return status - 订单状态(0:预订->1:支付完成进行中->2:已完成;3:已取消)
     */
    public Boolean getStatus() {
        return status;
    }

    /**
     * 设置订单状态(0:预订->1:支付完成进行中->2:已完成;3:已取消)
     *
     * @param status 订单状态(0:预订->1:支付完成进行中->2:已完成;3:已取消)
     */
    public void setStatus(Boolean status) {
        this.status = status;
    }
}