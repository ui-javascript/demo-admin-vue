package space.qmen.lot.dto;

import lombok.Data;
import lombok.experimental.Accessors;
import space.qmen.lot.entity.Space;

@Accessors(chain = true)
@Data
public class SpaceInfoDTO extends Space {
    private String zoneName;
    private String ownerName;
    private String ownerTel;
    private Integer historyOrderNum;

    public SpaceInfoDTO() {
        this.historyOrderNum = 0;
    }
}
