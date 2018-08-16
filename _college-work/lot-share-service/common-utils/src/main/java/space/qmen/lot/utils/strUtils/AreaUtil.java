package space.qmen.lot.utils.strUtils;


import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class AreaUtil {

    public static String getAreaNameFromAddress(String address){

        String start = "市";
        String end = "区";

        String regex = String.format("%s.*%s", start,end);
        Pattern pattern = Pattern.compile(regex);

        Matcher matcher = pattern.matcher(address);

        String areaName = "";
        if (matcher.find()){
            areaName = matcher.group().replace("start", "").replace(end, "");
            areaName = areaName.substring(1, areaName.length());
        }else{
            return null;
        }

        return areaName;
    }
}
