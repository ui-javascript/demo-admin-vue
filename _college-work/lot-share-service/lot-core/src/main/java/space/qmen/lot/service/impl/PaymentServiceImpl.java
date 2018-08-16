package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.PaymentDao;
import space.qmen.lot.entity.PayAli;
import space.qmen.lot.entity.PayBank;
import space.qmen.lot.entity.PayWechat;
import space.qmen.lot.service.IPaymentService;

import java.util.List;

@Service
public class PaymentServiceImpl implements IPaymentService {
    @Autowired
    private PaymentDao paymentDao;

    /**
     * 支付宝账号
     */
    @Override
    public List<PayAli> listPayAli(){ return paymentDao.listPayAli(); }

    @Override
    public PayAli getPayAliById(Long id) { return paymentDao.getPayAliById(id); }

    @Override
    public Long deletePayAli(Long id) {
        return paymentDao.deletePayAli(id);
    }

    @Override
    public Long savePayAli(PayAli payAli) { return paymentDao.savePayAli(payAli); }

    @Override
    public Long updatePayAli(PayAli payAli) { return paymentDao.updatePayAli(payAli); }

    /**
     * 微信支付
     */
    @Override
    public List<PayWechat> listPayWechat(){ return paymentDao.listPayWechat(); }

    @Override
    public PayWechat getPayWechatById(Long id) { return paymentDao.getPayWechatById(id); }

    @Override
    public Long deletePayWechat(Long id) {
        return paymentDao.deletePayWechat(id);
    }

    @Override
    public Long savePayWechat(PayWechat payWechat) { return paymentDao.savePayWechat(payWechat); }

    @Override
    public Long updatePayWechat(PayWechat payWechat) { return paymentDao.updatePayWechat(payWechat); }

    /**
     * 银行卡支付
     */
    @Override
    public List<PayBank> listPayBank(){ return paymentDao.listPayBank(); }

    @Override
    public PayBank getPayBankById(Long id) { return paymentDao.getPayBankById(id); }

    @Override
    public Long deletePayBank(Long id) {
        return paymentDao.deletePayBank(id);
    }

    @Override
    public Long savePayBank(PayBank payBank) { return paymentDao.savePayBank(payBank); }

    @Override
    public Long updatePayBank(PayBank payBank) { return paymentDao.updatePayBank(payBank); }

}
