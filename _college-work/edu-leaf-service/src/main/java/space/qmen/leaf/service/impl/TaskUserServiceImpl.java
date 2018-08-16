package space.qmen.leaf.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.leaf.dao.TaskUserDao;
import space.qmen.leaf.domain.TaskUser;
import space.qmen.leaf.service.TaskUserService;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class TaskUserServiceImpl implements TaskUserService {

    @Autowired
    private TaskUserDao taskUserDao;

    public List<TaskUser> findAllTaskUser(){
        return taskUserDao.findAllTaskUser();
    }

    public TaskUser findTaskUserById(Long id) {
        return taskUserDao.findById(id);
    }

    @Override
    public Long saveTaskUser(TaskUser taskUser) {
        return taskUserDao.saveTaskUser(taskUser);
    }

    @Override
    public Long updateTaskUser(TaskUser taskUser) {
        return taskUserDao.updateTaskUser(taskUser);
    }

    @Override
    public Long deleteTaskUser(Long id) {
        return taskUserDao.deleteTaskUser(id);
    }

}