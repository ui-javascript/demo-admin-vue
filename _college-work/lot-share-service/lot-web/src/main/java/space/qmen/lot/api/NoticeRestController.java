package space.qmen.lot.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import space.qmen.lot.service.INoticeService;
import space.qmen.lot.utils.ResultUtil;

@Api(value="通知", tags={"通知"})
@RequestMapping("/api/v1")
@RestController
public class NoticeRestController {
    @Autowired
    private INoticeService noticeService;

    @ApiOperation("获取所有车位")
    @RequestMapping(value = "/notice/user/{id}", method = RequestMethod.GET)
    public Object listSpace(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(noticeService.listNoticeByUserId(id));
    }
}
