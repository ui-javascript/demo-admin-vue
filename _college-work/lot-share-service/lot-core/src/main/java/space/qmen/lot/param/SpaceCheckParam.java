package space.qmen.lot.param;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
@Data
public class SpaceCheckParam {
    private Long spaceId;
    private Integer status;
}
