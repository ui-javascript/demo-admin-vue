package space.qmen.leaf.service;

import space.qmen.leaf.domain.TaskUser;

import java.util.List;

/**
 * 城市业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface TaskUserService {

    List<TaskUser> findAllTaskUser();

    TaskUser findTaskUserById(Long id);
    Long saveTaskUser(TaskUser taskUser);
    Long updateTaskUser(TaskUser taskUser);
    Long deleteTaskUser(Long id);
}