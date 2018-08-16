package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.entity.PayAli;
import space.qmen.lot.entity.PayBank;
import space.qmen.lot.entity.PayWechat;

import java.util.List;

public interface PaymentDao {
    /**
     * 支付宝账号
     */
    List<PayAli> listPayAli();
    PayAli getPayAliById(@Param("id") Long id);
    Long deletePayAli(Long id);

    Long savePayAli(PayAli payAli);
    Long updatePayAli(PayAli payAli);

    /**
     * 微信支付账号
     */
    List<PayWechat> listPayWechat();
    PayWechat getPayWechatById(@Param("id") Long id);
    Long deletePayWechat(Long id);

    Long savePayWechat(PayWechat payWechat);
    Long updatePayWechat(PayWechat payWechat);

    /**
     * 银行卡支付账号
     */
    List<PayBank> listPayBank();
    PayBank getPayBankById(@Param("id") Long id);
    Long deletePayBank(Long id);

    Long savePayBank(PayBank payBank);
    Long updatePayBank(PayBank payBank);
}
