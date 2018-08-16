package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.NoticeDao;
import space.qmen.lot.entity.Bill;
import space.qmen.lot.entity.Notice;
import space.qmen.lot.service.INoticeService;

import java.util.List;

@Service
public class NoticeServiceImpl implements INoticeService {

    @Autowired
    private NoticeDao noticeDao;

    @Override
    public List<Notice> listNoticeByUserId(Long id){
        return noticeDao.listNoticeByUserId(id);
    }

    @Override
    public Long saveNotice(Notice notice) { return noticeDao.saveNotice(notice); }
}
