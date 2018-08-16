package space.qmen.lot.service;

import space.qmen.lot.entity.PayAli;
import space.qmen.lot.entity.PayBank;
import space.qmen.lot.entity.PayWechat;

import java.util.List;

public interface IPaymentService {
    /**
     * 支付宝账号
      * @return
     */
    List<PayAli> listPayAli();
    PayAli getPayAliById(Long id);
    Long deletePayAli(Long id);

    Long savePayAli(PayAli payAli);
    Long updatePayAli(PayAli payAli);


    /**
     * 微信支付账号
     * @return
     */
    List<PayWechat> listPayWechat();
    PayWechat getPayWechatById(Long id);
    Long deletePayWechat(Long id);

    Long savePayWechat(PayWechat payWechat);
    Long updatePayWechat(PayWechat payWechat);

    /**
     * 银行卡支付
      * @return
     */
    List<PayBank> listPayBank();
    PayBank getPayBankById(Long id);
    Long deletePayBank(Long id);

    Long savePayBank(PayBank payBank);
    Long updatePayBank(PayBank payBank);


}
