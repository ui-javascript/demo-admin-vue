package space.qmen.lot.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class Order {
    private Long id;
    private Integer orderType;
    private Long fRentingStatusId;
    private String orderDescription;
    private Double unitPrice;
    private Double duration;
    private Double timeoutUnitPrice;
    private Double timeoutDuration;

    private Double expectedPayment;
    private Double reduction;
    private String reductionDescription;
    private Double prePayment;
    private Long fPrePaymentBillId;
    private Double actualPayment;
    private Long fActualPaymentBillId;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer status;


    // 用户打分反馈
    private Double orderScore;
    private Integer orderLevel;
}
