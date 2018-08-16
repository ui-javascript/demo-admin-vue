package space.qmen.lot.vo;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.dto.SpaceInfoDTO;

import java.sql.Time;
import java.util.List;

@Accessors(chain = true)
@Data
public class CommunitySpaceVO {
    private List<SpaceInfoDTO> spaceInfoList;

    private Integer spaceCount;
    private Double unitPrice;
    private Double timeoutUnitPrice;
    private Time morningBeginTime;
    private Time morningEndTime;
    private Time afternoonBeginTime;
    private Time afternoonEndTime;
}
