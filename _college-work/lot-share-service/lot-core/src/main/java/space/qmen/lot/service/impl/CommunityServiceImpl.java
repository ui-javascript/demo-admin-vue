package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.CommunityDao;
import space.qmen.lot.dto.CommunitySelectDTO;
import space.qmen.lot.entity.Community;
import space.qmen.lot.entity.CommunityPolicy;
import space.qmen.lot.service.ICommunityService;

import java.util.List;

@Service
public class CommunityServiceImpl implements ICommunityService {
    @Autowired
    private CommunityDao communityDao;

    @Override
    public List<Community> listCommunity(){
        List<Community> list = communityDao.listCommunity();
        return list;
    }

    @Override
    public Community getCommunityById(Long id) { return communityDao.getCommunityById(id); }

    @Override
    public CommunityPolicy getCommunityPolicyById(Long id) { return communityDao.getCommunityPolicyById(id); }

    @Override
    public Long deleteCommunity(Long id) {
        return communityDao.deleteCommunity(id);
    }

    @Override
    public Long saveCommunity(Community community) { return communityDao.saveCommunity(community); }

    @Override
    public Long updateCommunity(Community community) { return communityDao.updateCommunity(community); }


    // 自定义
    @Override
    public List<CommunitySelectDTO> listCommunityByOwnerId() {
        return communityDao.listCommunityByOwnerId();
    }

    @Override
    public List<Community> listCommunityByAreaId(Long id) {
        return communityDao.listCommunityByAreaId(id);
    }

    @Override
    public Long[] listCommunityIdsByAreaId(Long id) {
        return communityDao.listCommunityIdsByAreaId(id);
    }
}
