package space.qmen.lot;

import space.qmen.lot.utils.timeUtils.DateUtil;


public class DateUtilTest {
    public static void main(String[] args) {
//        int days = DateUtil.getDayOfMonth(2012,2);
//        System.out.println(days);

//        System.out.println(DateUtil.getDateInRangeWeekDate("2018-04-01")[1]);
        String start = DateUtil.getWeekDays(0)[0];
        System.out.println(DateUtil.getWeekOfYear(start)[0]);
        System.out.println(DateUtil.getWeekOfYear(start)[1]);
    }
}
