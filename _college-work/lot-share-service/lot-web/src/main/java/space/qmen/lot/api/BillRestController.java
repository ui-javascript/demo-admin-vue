package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Bill;
import space.qmen.lot.param.WalletParam;
import space.qmen.lot.service.IBillService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

@Api(value="账单", tags={"账单|钱包|收入"})
@RequestMapping("/api/v1")
@RestController
public class BillRestController {
    @Autowired
    private IBillService billService;

    @ApiIgnore
    @ApiOperation("根据id获取账单")
    @RequestMapping(value = "/bill/{id}", method = RequestMethod.GET)
    public Object getBillById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(billService.getBillById(id));
    }

    @ApiIgnore
    @ApiOperation("获取所有账单")
    @RequestMapping(value = "/bill", method = RequestMethod.GET)
    public Object listBill() {
        return ResultUtil.getResultWithSuccess(billService.listBill());
    }

    @ApiIgnore
    @ApiOperation("新增账单")
    @RequestMapping(value = "/bill", method = RequestMethod.POST)
    public Object saveBill(@RequestBody Bill bill) {
        billService.saveBill(bill);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("修改账单信息")
    @RequestMapping(value = "/bill", method = RequestMethod.PUT)
    public Object updateBill(@RequestBody Bill bill) {
        billService.updateBill(bill);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore
    @ApiOperation("根据id删除账单")
    @RequestMapping(value = "/bill/{id}", method = RequestMethod.DELETE)
    public Object deletBill(@PathVariable("id") Long id) {
        billService.deleteBill(id);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("获取X用户A年B月的总收入")
    @RequestMapping(value = "/wallet-total", method = RequestMethod.GET)
    public Object getWalletTotal(WalletParam walletParam) {
        return ResultUtil.getResultWithSuccess(billService.getWalletTotal(walletParam));
    }

    @ApiOperation("获取X用户A年B月的账单收入")
    @RequestMapping(value = "/bill-owner-details", method = RequestMethod.GET)
    public Object listWalletDetail(WalletParam walletParam) {
        return ResultUtil.getResultWithSuccess(billService.listBillDetails(walletParam));
    }

    @ApiOperation("图表显示X用户A年B月的每天的账单")
    @RequestMapping(value = "/income-owner-charts", method = RequestMethod.GET)
    public Object listIncomeOwnerCharts(WalletParam walletParam) {
        return ResultUtil.getResultWithSuccess(billService.listOwnerIncomeCharts(walletParam));
    }
}
