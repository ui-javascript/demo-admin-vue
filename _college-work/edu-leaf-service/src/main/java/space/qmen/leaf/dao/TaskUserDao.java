package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.TaskUser;

import java.util.List;

/**
 * 城市 DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface TaskUserDao {

    /**
     * 获取城市信息列表
     *
     * @return
     */
    List<TaskUser> findAllTaskUser();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    TaskUser findById(@Param("id") Long id);

    Long saveTaskUser(TaskUser taskUser);

    Long updateTaskUser(TaskUser taskUser);

    Long deleteTaskUser(Long id);
}