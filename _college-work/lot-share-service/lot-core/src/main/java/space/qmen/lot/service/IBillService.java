package space.qmen.lot.service;

import space.qmen.lot.dto.BillDetailsDTO;
import space.qmen.lot.entity.Bill;
import space.qmen.lot.param.WalletParam;
import space.qmen.lot.vo.IncomeChartsVO;

import java.util.List;

public interface IBillService {
    List<Bill> listBill();
    Bill getBillById(Long id);
    Long deleteBill(Long id);

    Long saveBill(Bill bill);
    Long updateBill(Bill bill);

    // 自定义
    Double getWalletTotal(WalletParam walletParam);
    List<BillDetailsDTO> listBillDetails(WalletParam walletParam);
    IncomeChartsVO listOwnerIncomeCharts(WalletParam walletParam);
}
