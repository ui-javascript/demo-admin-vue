package space.qmen.lot.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
@Data
public class SpaceCheckDTO {
    private String ownerName;
    private String tel;
    private Integer spaceStatus;
    private String spaceName;

    // 车位id
    private Long id;
}

