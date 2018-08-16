package space.qmen.lot.utils.poi.convert;

import space.qmen.lot.utils.timeUtils.DateUtil;

public class TimeConvert implements ExportConvert {

//    @Override
    public String handler(Object val) {
        try {
            if (val == null)
                return "";
            else {
                return DateUtil.formatCSTTime(val.toString(), "yyyy-MM-dd HH:mm:ss");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

}