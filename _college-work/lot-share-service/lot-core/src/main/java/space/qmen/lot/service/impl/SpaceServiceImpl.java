package space.qmen.lot.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.Constant;
import space.qmen.lot.dao.*;
import space.qmen.lot.dto.*;
import space.qmen.lot.entity.Community;
import space.qmen.lot.entity.CommunityPolicy;
import space.qmen.lot.entity.Notice;
import space.qmen.lot.entity.Space;
import space.qmen.lot.param.*;
import space.qmen.lot.service.ISpaceService;
import space.qmen.lot.utils.timeUtils.DateUtil;
import space.qmen.lot.vo.*;


import javax.validation.Valid;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SpaceServiceImpl implements ISpaceService {

    private final static Integer LEVEL_LOW_NUM = 20;
    private final static Integer LEVEL_MIDDLE_NUM = 50;
    private final static Integer LEVEL_LOW = 0;
    private final static Integer LEVEL_MIDDLE = 1;
    private final static Integer LEVEL_HIGH = 2;


    @Autowired
    private SpaceDao spaceDao;

    @Autowired
    private NoticeDao noticeDao;

    @Autowired
    private CommunityDao communityDao;

    @Autowired
    private OrderDao orderDao;

    @Override
    public List<Space> listSpace(){
        return spaceDao.listSpace();
    }

    @Override
    public List<SpaceExVO> listSpaceEx(){
        return spaceDao.listSpaceEx();
    }

    @Override
    public List<SpaceCheckDTO> listSpaceCheck(){
        return spaceDao.listSpaceCheck();
    }

    @Override
    public Space getSpaceById(Long id) { return spaceDao.getSpaceById(id); }

    @Override
    public SpaceInfoDTO getSpaceInfoById(Long id) {
        return spaceDao.getSpaceInfoById(id);
    }

    @Override
    public SpaceDayRentingStatusDTO getSpaceDayRentingStatus(SpaceDayRentingStatusParam spaceDayRentingStatusParam) {
        return spaceDao.getSpaceDayRentingStatus(spaceDayRentingStatusParam);
    }

    @Override
    public SpaceWeekRentingStatusVO getSpaceWeekRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam) {
        Long spaceId = spaceWeekRentingStatusParam.getSpaceId();
        Long userId = spaceWeekRentingStatusParam.getRenterId();
        java.sql.Date currDate = spaceWeekRentingStatusParam.getDate();
        SpaceWeekRentingStatusVO weekStatusVO = new SpaceWeekRentingStatusVO();
        List<SpaceDayRentingStatusVO> weekList = new ArrayList<>();

        // 遍历循环当前周
        LocalDate[] dateRangeArr = DateUtil.getDateInRangeWeekDate(currDate.toString());
        Integer w = 0;
        for (LocalDate d : dateRangeArr) {
            w++;

            // 获取该车位某天的车位租用情况
            SpaceDayRentingStatusVO dayStatusVO = new SpaceDayRentingStatusVO();
            SpaceDayRentingStatusParam dayStatusParam = new SpaceDayRentingStatusParam();
            dayStatusParam.setDate(DateUtil.strToSQLDate(d.toString()))
                    .setSpaceId(spaceId);
            SpaceDayRentingStatusDTO dayStatus = spaceDao.getSpaceDayRentingStatus(dayStatusParam);

            dayStatusVO.setDayOfWeek(w);
            dayStatusVO.setDate(DateUtil.strToSQLDate(d.toString()));

            if (dayStatus != null) {
                Integer periodType = dayStatus.getPeriodType();
                Long renterId = dayStatus.getRenterId();

                if (periodType == 0) {
                    // 租上午
                    dayStatusVO.setMorningStatus(0);
                    if (renterId == userId) {
                        dayStatusVO.setIsMorningMyself(1);
                    }
                } else if (periodType == 1) {
                    // 租下午
                    dayStatusVO.setAfternoonStatus(0);
                    if (renterId == userId) {
                        dayStatusVO.setIsAfternoonMyself(1);
                    }
                } else if (periodType == 2) {
                    // 租全天
                    dayStatusVO.setMorningStatus(0).setAfternoonStatus(0);
                    if (renterId == userId) {
                        dayStatusVO.setIsMorningMyself(1).setAfternoonStatus(1);
                    }
                } else {
                    // 长期租用
                }
            }

            weekList.add(dayStatusVO);
        }


        weekStatusVO.setCurrDate(currDate)
                .setCurrDayOfWeek(DateUtil.getDateToWeek(currDate))
                .setFromDate( DateUtil.strToSQLDate(dateRangeArr[0].toString()) )
                .setToDate( DateUtil.strToSQLDate(dateRangeArr[6].toString()) )
                .setWeekList(weekList);

        // 返回结果
        return weekStatusVO;
    }

    @Override
    public LongSpaceRentingStatusVO getSpaceLongRentingStatus(SpaceWeekRentingStatusParam spaceWeekRentingStatusParam) {
        LongSpaceRentingStatusVO vo = new LongSpaceRentingStatusVO();

        List<WeekSpaceRentingStatusVO> statusList = new ArrayList<>();
        HashMap<String, int[]> ruleList = new HashMap<>();

        int[] nextArr = {1,2,3,4};
        for (int i : nextArr) {
            String start = DateUtil.getWeekDays(i)[0];
            int year = DateUtil.getWeekOfYear(start)[0];
            int weekOfYear = DateUtil.getWeekOfYear(start)[1];
            String fromDate = DateUtil.getDateInRangeWeekDate(start)[0].toString();
            String toDate = DateUtil.getDateInRangeWeekDate(start)[6].toString();
            WeekSpaceRentingStatusVO weekVo = new WeekSpaceRentingStatusVO();
            weekVo.setFromDate(fromDate)
                    .setToDate(toDate)
                    .setWeekOfYear(weekOfYear)
                    .setYear(year);
            statusList.add(weekVo);
        }


        SpaceWeekRuleDTO rule = spaceDao.getSpaceRuleBySpaceId(spaceWeekRentingStatusParam.getSpaceId());
        int spaceStatus = rule.getStatus();
        int[] weekRuleList = new int[7];
        if (spaceStatus == 1) {
            // 允许开放
            weekRuleList[0] = rule.getIsMonOk();
            weekRuleList[1] = rule.getIsTueOk();
            weekRuleList[2] = rule.getIsWedOk();
            weekRuleList[3] = rule.getIsThurOk();
            weekRuleList[4] = rule.getIsFriOk();
            weekRuleList[5] = rule.getIsSatOk();
            weekRuleList[6] = rule.getIsSunOk();

            vo.setIsMorningOk(rule.getIsMorningOk());
            vo.setIsAfternoonOk(rule.getIsAfternoonOk());
            vo.setIsFestivalOk(rule.getIsFestivalOk());

        } else {
            // 禁用或不开放

        }

        vo.setWeekStatusList(statusList);
        vo.setWeekRuleList(weekRuleList);
        return vo;
    }

    @Override
    public Integer getSpaceCollectionStatus(SpaceCollectionParam spaceCollectionParam) {
        Long[] ids = spaceDao.getSpaceCollectionStatus(spaceCollectionParam);
        if (ids.length == 0) {
            return 0;
        }
        return 1;
    }





    @Override
    public SpaceWeekRuleDTO getSpaceRuleBySpaceId(Long spaceId) {
        return spaceDao.getSpaceRuleBySpaceId(spaceId);
    }

    @Override
    public Long deleteSpace(Long id) {
        return spaceDao.deleteSpace(id);
    }

    @Override
    public Long saveSpace(SpaceParam space) { return spaceDao.saveSpace(space); }

    @Override
    public Long saveSpaceCollection(SpaceCollectionParam spaceCollectionParam) {
        return spaceDao.saveSpaceCollection(spaceCollectionParam);
    }

    @Override
    public Long updateSpace(Space space) { return spaceDao.updateSpace(space); }

    @Override
    public Long updateSpaceEx(SpaceExVO spaceExVO) {
        Space space = new Space();
        space.setName(spaceExVO.getName())
                .setDescription(spaceExVO.getDescription())
                .setId(spaceExVO.getId());


        SpaceCheckParam spaceCheckParam = new SpaceCheckParam();
        spaceCheckParam.setSpaceId(spaceExVO.getId())
            .setStatus(spaceExVO.getStatus());
        spaceDao.updateUCZSStatusBySpaceId(spaceCheckParam);

        return spaceDao.updateSpace(space);
    }

    @Override
    public Long updateSpaceCheckPass(SpaceCheckDTO spaceCheckDTO) {
        SpaceCheckParam spaceCheckParam = new SpaceCheckParam();
        spaceCheckParam.setSpaceId(spaceCheckDTO.getId())
                .setStatus(spaceCheckDTO.getSpaceStatus());
        return spaceDao.updateUCZSStatusBySpaceId(spaceCheckParam);

    }



    @Override
    public List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id){
        return spaceDao.listSpaceDetailsByOwnerId(id);
    }

    @Override
    public List<UCZSInfoDTO> listSpaceByCommunityId(Long id) {
        return spaceDao.listSpaceByCommunityId(id);
    }

    @Override
    public Long updateSpaceRule(@Valid WeekRuleParam weekRuleParam) {
        spaceDao.deleteSpaceRuleSoftly(weekRuleParam.getSpaceId());
        return spaceDao.updateSpaceRule(weekRuleParam);
    }

    @Override
    public Long updateUCZSUser(UCZSMatchUserParam uczsMatchUserParam) {
        Long uczsId = uczsMatchUserParam.getUczsId();

        UCZSSpaceInfoDTO spaceInfo = spaceDao.getSpaceInfoByUCZSId(uczsId);
        Notice notice = new Notice();
        notice.setAction(0)
                .setContent(Constant.getSpaceCheckPassedContent(spaceInfo.getCommunityName() + "编号为" + spaceInfo.getSpaceCode()))
                .setTitle("车位审核完成")
                .setState(1);
        noticeDao.saveNotice(notice);
        noticeDao.saveUserNotice(uczsMatchUserParam.getOwnerId());

        return spaceDao.updateUCZSUser(uczsMatchUserParam);
    }

    @Override
    public SpaceAvailableVO listSpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam){
        SpaceAvailableVO spaceAvailable =  new SpaceAvailableVO();
        Long[] list = spaceDao.listSpaceAvailable(communitySpaceAvailableParam);
        spaceAvailable.setSpaceIdList(list);
        spaceAvailable.setSpaceCount(list.length);
        return spaceAvailable;
    }

    @Override
    public CommunitySpaceVO listCommunitySpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam){
        List<SpaceInfoDTO> spaceInfoList = new ArrayList<>();
        Long[] idList;

        try {
            idList = spaceDao.listSpaceAvailable(communitySpaceAvailableParam);

            for(Long id : idList) {
                SpaceInfoDTO info = spaceDao.getSpaceInfoById(id);

                if (info != null) {
                    // 获取历史订单数
                    Integer historyOrderNum = spaceDao.getSpaceHistoryOrderNumById(id);
                    info.setHistoryOrderNum(historyOrderNum);
                    spaceInfoList.add(info);
                }
            }

            CommunitySpaceVO result = new CommunitySpaceVO();


            communitySpaceAvailableParam.getCommunityId();

            CommunityPolicy policy = communityDao.getCommunityPolicyById(communitySpaceAvailableParam.getCommunityId());
            result.setSpaceInfoList(spaceInfoList)
                    .setSpaceCount(spaceInfoList.size())
                    .setMorningBeginTime(policy.getMorningBeginTime())
                    .setMorningEndTime(policy.getMorningEndTime())
                    .setAfternoonBeginTime(policy.getAfternoonBeginTime())
                    .setAfternoonEndTime(policy.getAfternoonEndTime())
                    .setTimeoutUnitPrice(policy.getTimeoutUnitPrice())
                    .setUnitPrice(policy.getUnitPrice());

            return result;

        } catch (Exception e) {

        }


        return null;
    }


    @Override
    public Map listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam){
        List<SpaceAvailableVO> resultList = new ArrayList<>();
        Map result = new HashMap();
        Integer levelLow = 0, levelMiddle = 0, levelHigh = 0;

        try {
            // 当前区域的所有小区
            CommunityIdsParam communityIdsParam = new CommunityIdsParam();
            communityIdsParam.setAreaId(areaSpaceAvailableParam.getAreaId());
            communityIdsParam.setKeyword(areaSpaceAvailableParam.getKeyword());
            Long[] communityIdsArr = communityDao.listCommunityIds(communityIdsParam);

            // 遍历查询各个小区的详情
            for(Long ids : communityIdsArr) {
                CommunitySpaceAvailableParam param = new CommunitySpaceAvailableParam();
                if (areaSpaceAvailableParam.getDateBegin() != null) {
                    param.setDateBegin(areaSpaceAvailableParam.getDateBegin());
                }

                param.setPeriodType(areaSpaceAvailableParam.getPeriodType());
                param.setCommunityId(ids);

                Long[] list = spaceDao.listSpaceAvailable(param);

                // 查询该小区空车位
                Community community = communityDao.getCommunityById(ids);
                CommunityPolicy policy = communityDao.getCommunityPolicyById(ids);
                Integer historyNum = orderDao.getOrderHistoryNum(ids);
                SpaceAvailableVO vo = new SpaceAvailableVO();
                BeanUtils.copyProperties(community, vo);
                vo.setSpaceIdList(list)
                  .setSpaceCount(list.length)
                    .setHistoryOrderNum(historyNum)
                  .setUnitPrice(policy.getUnitPrice());
//
                if (list.length < LEVEL_LOW_NUM) {
                    levelLow++;
                    vo.setLevel(LEVEL_LOW);
                } else if (list.length >= LEVEL_LOW_NUM && list.length <= LEVEL_MIDDLE_NUM ) {
                    levelMiddle++;
                    vo.setLevel(LEVEL_MIDDLE);
                } else {
                    levelHigh++;
                    vo.setLevel(LEVEL_HIGH);
                }

                resultList.add(vo);
            }

        } catch(Exception e) {

        }

        HashMap<String, Integer> levelMap = new HashMap<>();
        levelMap.put("low", levelLow);
        levelMap.put("middle", levelMiddle);
        levelMap.put("high", levelHigh);

        result.put("communityList", resultList);
        result.put("level", levelMap);

        return result;
    }

}
