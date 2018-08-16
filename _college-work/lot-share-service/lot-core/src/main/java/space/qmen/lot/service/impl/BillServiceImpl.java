package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.BillDao;
import space.qmen.lot.dto.BillDetailsDTO;
import space.qmen.lot.entity.Bill;
import space.qmen.lot.param.WalletParam;
import space.qmen.lot.service.IBillService;
import space.qmen.lot.vo.IncomeChartsVO;

import java.util.List;

@Service
public class BillServiceImpl implements IBillService {
    @Autowired
    private BillDao billDao;

    @Override
    public List<Bill> listBill(){
        return billDao.listBill();
    }

    @Override
    public Bill getBillById(Long id) { return billDao.getBillById(id); }

    @Override
    public Long deleteBill(Long id) {
        return billDao.deleteBill(id);
    }

    @Override
    public Long saveBill(Bill bill) { return billDao.saveBill(bill); }

    @Override
    public Long updateBill(Bill bill) { return billDao.updateBill(bill); }

    @Override
    public Double getWalletTotal(WalletParam walletParam) { return billDao.getWalletTotal(walletParam); }

    @Override
    public List<BillDetailsDTO> listBillDetails(WalletParam walletParam) { return billDao.listBillDetails(walletParam); }

    @Override
    public IncomeChartsVO listOwnerIncomeCharts(WalletParam walletParam) {
        IncomeChartsVO charts = new IncomeChartsVO(walletParam);
        int dayOfWeek;

        try {
            List<BillDetailsDTO> billList = billDao.listBillDetails(walletParam);
            for (int i = 0; i < billList.size(); i++) {
                dayOfWeek = billList.get(i).getDayOfWeek();
//                if () {
                    charts.getIncomeList()[dayOfWeek] += billList.get(i).getBillAmount();
//                }
            }

        } catch (Exception e) {

        }

        return charts;
    }
}
