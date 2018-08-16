package space.qmen.lot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Constant {

    public static String BASE_PATH;

    public static String LOGIN_SESSION_KEY = "Favorites_user";

    public static String PASSWORD_KEY = "@#$%^&*()OPG#$%^&*(HG";

    public static String DES3_KEY = "9964DYByKL967c3308imytCB";

    public static String default_logo="img/logo.jpg";

    public static String userAgent="Mozilla";

    public static String default_Profile=BASE_PATH+"/img/logo.jpg";

    public static String LAST_REFERER = "LAST_REFERER";

    public static int COOKIE_TIMEOUT= 30*24*60*60;

    public static final String XLSX_SUFFIX = ".xlsx";

    public static final String XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    // 订单
    public static final String NOTICE_ORDER_TITLE = "订单完成提示";
    public static final String[] NOTICE_ORDER_CONTENT_ON = {"您收到一笔编号为", "的订单;","预订车位为",",时间为","。若有异议，请及时联系客服处理。"};
    public static final String[] NOTICE_ORDER_CONTENT_FINISHED = {"您的编号为", "的订单已完成。请及时查看收益。"};

    // 车位审核
    public static final String NOTICE_SPACE_CHECK_PASSED_TITLE = "车位审核通过提示";
    public static final String[] NOTICE_SPACE_CHECK_PASSED_CONTENT = {"您位于", "的车位已通过审核，快去分享车位吧！"};


    @Autowired(required = true)
    public void setBasePath(@Value("${favorites.base.path}")String basePath) {
        Constant.BASE_PATH = basePath;
    }

    public static String getFinishedOrderContent(Long orderNo) {
        return NOTICE_ORDER_CONTENT_FINISHED[0] + orderNo
                + NOTICE_ORDER_CONTENT_FINISHED[1];
    }

    public static  String getSpaceCheckPassedContent(String spaceInfo) {
        return NOTICE_SPACE_CHECK_PASSED_CONTENT[0] + spaceInfo + NOTICE_SPACE_CHECK_PASSED_CONTENT[1];
    }


}