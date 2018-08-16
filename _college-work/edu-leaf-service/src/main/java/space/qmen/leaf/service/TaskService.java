package space.qmen.leaf.service;

import space.qmen.leaf.domain.Task;

import java.util.List;

/**
 * 城市业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface TaskService {

    List<Task> findAllTask();

    Task findTaskById(Long id);
    Long saveTask(Task task);
    Long updateTask(Task task);
    Long deleteTask(Long id);
}