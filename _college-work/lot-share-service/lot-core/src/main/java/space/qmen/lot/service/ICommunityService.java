package space.qmen.lot.service;

import space.qmen.lot.dto.CommunitySelectDTO;
import space.qmen.lot.entity.Community;
import space.qmen.lot.entity.CommunityPolicy;

import java.util.List;

public interface ICommunityService {
    List<Community> listCommunity();
    Community getCommunityById(Long id);
    CommunityPolicy getCommunityPolicyById(Long id);

    Long deleteCommunity(Long id);

    Long saveCommunity(Community zone);
    Long updateCommunity(Community zone);

    // 自定义接口
    List<CommunitySelectDTO> listCommunityByOwnerId();
    Long[] listCommunityIdsByAreaId(Long id);
    List<Community> listCommunityByAreaId(Long id);
}
