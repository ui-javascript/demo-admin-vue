package space.qmen.lot.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;

@Table(name = "bill")
public class Bill {
    @Id
    @SequenceGenerator(name="",sequenceName="SELECT LAST_INSERT_ID()")
    private Long id;

    /**
     * 交易类型(0:银行卡，1:支付宝，2：微信支付) 
     */
    @Column(name = "transaction_type")
    private Byte transactionType;

    /**
     * 账单金额
     */
    @Column(name = "bill_amount")
    private BigDecimal billAmount;

    /**
     * 第三方支付接口的支付方账号id
     */
    @Column(name = "from_account_id")
    private Long fromAccountId;

    @Column(name = "from_user_id")
    private Long fromUserId;

    /**
     * 收款方支付宝账号id(统一支付宝处理)
     */
    @Column(name = "to_account_id")
    private Long toAccountId;

    @Column(name = "to_user_id")
    private Long toUserId;

    private String description;

    @Column(name = "gmt_create")
    private Date gmtCreate;

    @Column(name = "gmt_modified")
    private Date gmtModified;

    /**
     * 软删除
     */
    @Column(name = "is_deleted")
    private Boolean isDeleted;

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
     * 获取交易类型(0:银行卡，1:支付宝，2：微信支付) 
     *
     * @return transaction_type - 交易类型(0:银行卡，1:支付宝，2：微信支付) 
     */
    public Byte getTransactionType() {
        return transactionType;
    }

    /**
     * 设置交易类型(0:银行卡，1:支付宝，2：微信支付) 
     *
     * @param transactionType 交易类型(0:银行卡，1:支付宝，2：微信支付) 
     */
    public void setTransactionType(Byte transactionType) {
        this.transactionType = transactionType;
    }

    /**
     * 获取账单金额
     *
     * @return bill_amount - 账单金额
     */
    public BigDecimal getBillAmount() {
        return billAmount;
    }

    /**
     * 设置账单金额
     *
     * @param billAmount 账单金额
     */
    public void setBillAmount(BigDecimal billAmount) {
        this.billAmount = billAmount;
    }

    /**
     * 获取第三方支付接口的支付方账号id
     *
     * @return from_account_id - 第三方支付接口的支付方账号id
     */
    public Long getFromAccountId() {
        return fromAccountId;
    }

    /**
     * 设置第三方支付接口的支付方账号id
     *
     * @param fromAccountId 第三方支付接口的支付方账号id
     */
    public void setFromAccountId(Long fromAccountId) {
        this.fromAccountId = fromAccountId;
    }

    /**
     * @return from_user_id
     */
    public Long getFromUserId() {
        return fromUserId;
    }

    /**
     * @param fromUserId
     */
    public void setFromUserId(Long fromUserId) {
        this.fromUserId = fromUserId;
    }

    /**
     * 获取收款方支付宝账号id(统一支付宝处理)
     *
     * @return to_account_id - 收款方支付宝账号id(统一支付宝处理)
     */
    public Long getToAccountId() {
        return toAccountId;
    }

    /**
     * 设置收款方支付宝账号id(统一支付宝处理)
     *
     * @param toAccountId 收款方支付宝账号id(统一支付宝处理)
     */
    public void setToAccountId(Long toAccountId) {
        this.toAccountId = toAccountId;
    }

    /**
     * @return to_user_id
     */
    public Long getToUserId() {
        return toUserId;
    }

    /**
     * @param toUserId
     */
    public void setToUserId(Long toUserId) {
        this.toUserId = toUserId;
    }

    /**
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
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
     * 获取软删除
     *
     * @return is_deleted - 软删除
     */
    public Boolean getIsDeleted() {
        return isDeleted;
    }

    /**
     * 设置软删除
     *
     * @param isDeleted 软删除
     */
    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }
}