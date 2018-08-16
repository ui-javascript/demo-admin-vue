package space.qmen.lot.service;



import space.qmen.lot.dto.*;
import space.qmen.lot.entity.Space;
import space.qmen.lot.param.*;
import space.qmen.lot.vo.*;

import java.util.List;
import java.util.Map;

public interface ISpaceService {
    List<Space> listSpace();
    // 加强版
    List<SpaceExVO> listSpaceEx();
    //  车位审核状态
    List<SpaceCheckDTO> listSpaceCheck();

    // 某小区的可用车位
    SpaceAvailableVO listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
    CommunitySpaceVO listCommunitySpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
    // 某Area的可用车位
    Map listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam);

    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id);
    List<UCZSInfoDTO> listSpaceByCommunityId(Long id);

    Space getSpaceById(Long id);
    Integer getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam);
    SpaceInfoDTO getSpaceInfoById(Long id);

    // 获取某车位当天的租用状态
    SpaceDayRentingStatusDTO getSpaceDayRentingStatus(SpaceDayRentingStatusParam spaceDayRentingStatusParam);
    SpaceWeekRentingStatusVO getSpaceWeekRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam);

    // 获取长租情况
    LongSpaceRentingStatusVO getSpaceLongRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam);
    SpaceWeekRuleDTO getSpaceRuleBySpaceId(Long id);


    Long saveSpace(SpaceParam space);
    Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam);


    Long updateSpace(Space space);
    Long updateSpaceEx(SpaceExVO spaceExVO);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);
    Long updateUCZSUser(UCZSMatchUserParam uczsMatchUserParam);
    Long updateSpaceCheckPass(SpaceCheckDTO spaceCheckDTO);


    Long deleteSpace(Long id);
}
