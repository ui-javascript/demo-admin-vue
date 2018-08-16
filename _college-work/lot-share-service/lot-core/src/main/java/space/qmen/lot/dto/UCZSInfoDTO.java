package space.qmen.lot.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
@Data
public class UCZSInfoDTO {
    private Long uczsId;
    private Long communityId;
    private Long spaceId;
    private String spaceName;
    private Long zoneId;
    private String zoneName;


}
