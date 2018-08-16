package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.PayAli;
import space.qmen.lot.entity.PayBank;
import space.qmen.lot.entity.PayWechat;
import space.qmen.lot.service.IPaymentService;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@ApiIgnore
@Api(value="支付", tags={"支付"})
@RequestMapping("/api/v1/pay")
@RestController
public class PaymentRestController {
    @Autowired
    private IPaymentService paymentService;

    /**
     * 支付宝
     */
    @ApiOperation("根据id获取支付宝账号")
    @RequestMapping(value = "/ali/{id}", method = RequestMethod.GET)
    public PayAli getPayAliById(@PathVariable("id") Long id) {
        return paymentService.getPayAliById(id);
    }

    @ApiOperation("获取所有支付宝账号")
    @RequestMapping(value = "/ali", method = RequestMethod.GET)
    public List<PayAli> listPayAli() {
        return paymentService.listPayAli();
    }

    @ApiOperation("新增支付宝账号")
    @RequestMapping(value = "/ali", method = RequestMethod.POST)
    public void savePayAli(@RequestBody PayAli payAli) {
        paymentService.savePayAli(payAli);
    }

    @ApiOperation("修改支付宝账号信息")
    @RequestMapping(value = "/ali", method = RequestMethod.PUT)
    public void updatePayAli(@RequestBody PayAli payAli) {  paymentService.updatePayAli(payAli); }

    @ApiOperation("根据id删除支付宝账号")
    @RequestMapping(value = "/ali/{id}", method = RequestMethod.DELETE)
    public void deletePayAli(@PathVariable("id") Long id) {
        paymentService.deletePayAli(id);
    }

    /**
     * 微信
     */
    @ApiOperation("根据id获取微信账号")
    @RequestMapping(value = "/wechat/{id}", method = RequestMethod.GET)
    public PayWechat getPayWechatById(@PathVariable("id") Long id) {
        return paymentService.getPayWechatById(id);
    }

    @ApiOperation("获取所有微信账号")
    @RequestMapping(value = "/wechat", method = RequestMethod.GET)
    public List<PayWechat> listPayWechat() { return paymentService.listPayWechat(); }

    @ApiOperation("新增微信账号")
    @RequestMapping(value = "/wechat", method = RequestMethod.POST)
    public void savePayWechat(@RequestBody PayWechat payWechat) {
        paymentService.savePayWechat(payWechat);
    }

    @ApiOperation("修改微信账号信息")
    @RequestMapping(value = "/wechat", method = RequestMethod.PUT)
    public void updatePayWechat(@RequestBody PayWechat payWechat) {  paymentService.updatePayWechat(payWechat); }

    @ApiOperation("根据id删除支付宝账号")
    @RequestMapping(value = "/wechat/{id}", method = RequestMethod.DELETE)
    public void deletePayWechat(@PathVariable("id") Long id) {
        paymentService.deletePayWechat(id);
    }

    /**
     * 银行
     */
    @ApiOperation("根据id获取银行账号")
    @RequestMapping(value = "/bank/{id}", method = RequestMethod.GET)
    public PayBank getPayBankById(@PathVariable("id") Long id) {
        return paymentService.getPayBankById(id);
    }

    @ApiOperation("获取所有银行账号")
    @RequestMapping(value = "/bank", method = RequestMethod.GET)
    public List<PayBank> listPayBank() { return paymentService.listPayBank(); }

    @ApiOperation("新增银行账号")
    @RequestMapping(value = "/bank", method = RequestMethod.POST)
    public void savePayBank(@RequestBody PayBank payBank) {
        paymentService.savePayBank(payBank);
    }

    @ApiOperation("修改银行账号信息")
    @RequestMapping(value = "/bank", method = RequestMethod.PUT)
    public void updatePayBank(@RequestBody PayBank payBank) {  paymentService.updatePayBank(payBank); }

    @ApiOperation("根据id删除银行账号")
    @RequestMapping(value = "/bank/{id}", method = RequestMethod.DELETE)
    public void deletePayBank(@PathVariable("id") Long id) {
        paymentService.deletePayBank(id);
    }


}
