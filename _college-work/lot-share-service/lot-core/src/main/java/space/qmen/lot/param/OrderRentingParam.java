package space.qmen.lot.param;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.experimental.Accessors;

import java.sql.Date;

@Accessors(chain = true)
@Data
public class OrderRentingParam {
    private Date dateBegin;
    private Date dateEnd;
    private Integer periodType;
    private Long renterId;

    @JsonIgnore
    private Long ruleId;

    private Long spaceId;
    private Long vehicleId;
}
