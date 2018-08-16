package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.dto.*;
import space.qmen.lot.entity.Space;
import space.qmen.lot.param.*;
import space.qmen.lot.vo.SpaceExVO;


import java.util.List;

public interface SpaceDao {

    Space getSpaceById(@Param("id") Long id);
    Integer getSpaceHistoryOrderNumById(@Param("spaceId") Long spaceId);
    Long[] getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam);
    SpaceInfoDTO getSpaceInfoById(@Param("id") Long id);
    SpaceDayRentingStatusDTO getSpaceDayRentingStatus(SpaceDayRentingStatusParam spaceDayRentingStatusParam);
    SpaceWeekRuleDTO getSpaceRuleBySpaceId(Long spaceId);
    UCZSSpaceInfoDTO getSpaceInfoByUCZSId(Long uczsId);

    Long saveSpace(SpaceParam space);
    Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam);

    Long deleteSpace(Long id);
    Long deleteSpaceRuleSoftly(Long spaceId);

    Long updateSpace(Space space);
    Long updateUCZSStatusBySpaceId(SpaceCheckParam spaceCheckParam);
    Long updateSpaceRule(WeekRuleParam weekRuleParam);
    Long updateUCZSUser(UCZSMatchUserParam uczsMatchUserParam);

    // 自定义
    List<Space> listSpace();
    List<SpaceExVO> listSpaceEx();
    List<SpaceCheckDTO> listSpaceCheck();
    List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(@Param("id") Long id);
    Long[] listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam);
    List<UCZSInfoDTO> listSpaceByCommunityId(@Param("id") Long id);
}
