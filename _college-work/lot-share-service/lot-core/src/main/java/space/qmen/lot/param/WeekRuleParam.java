package space.qmen.lot.param;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class WeekRuleParam {
    @NotNull
    private Long spaceId;

    @NotNull
    private Integer isMonOk;

    @NotNull
    private Integer isTueOk;

    @NotNull
    private Integer isWedOk;

    @NotNull
    private Integer isThurOk;

    @NotNull
    private Integer isFriOk;

    @NotNull
    private Integer isSatOk;

    @NotNull
    private Integer isSunOk;

    @NotNull
    private Integer isMorningOk;

    @NotNull
    private Integer isAfternoonOk;

    private Integer isFestivalOk;

    @NotNull
    private Integer status;
}
