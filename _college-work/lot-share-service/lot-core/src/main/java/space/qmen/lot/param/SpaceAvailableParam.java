package space.qmen.lot.param;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.utils.timeUtils.DateUtil;

import java.sql.Date;


@Accessors(chain = true)
@Data
public class SpaceAvailableParam {

    private Date dateBegin;
    private Date dateEnd;

    // 租用类型
    // 0 上午
    // 1 下午
    // 2 全天
    // 3 长期
    private long periodType;

    public SpaceAvailableParam () {
        // 默认今天
        this.dateBegin = new java.sql.Date(DateUtil.getCurrentTime());
    }
}
