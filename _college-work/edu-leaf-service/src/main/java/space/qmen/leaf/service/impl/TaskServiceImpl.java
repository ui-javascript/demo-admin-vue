package space.qmen.leaf.service.impl;

import space.qmen.leaf.dao.TaskDao;
import space.qmen.leaf.domain.Task;
import space.qmen.leaf.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskDao taskDao;

    public List<Task> findAllTask(){
        return taskDao.findAllTask();
    }

    public Task findTaskById(Long id) {
        return taskDao.findById(id);
    }

    @Override
    public Long saveTask(Task task) {
        return taskDao.saveTask(task);
    }

    @Override
    public Long updateTask(Task task) {
        return taskDao.updateTask(task);
    }

    @Override
    public Long deleteTask(Long id) {
        return taskDao.deleteTask(id);
    }

}