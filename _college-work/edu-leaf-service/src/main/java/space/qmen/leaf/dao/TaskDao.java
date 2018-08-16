package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Task;

import java.util.List;

/**
 * 城市 DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface TaskDao {

    /**
     * 获取城市信息列表
     *
     * @return
     */
    List<Task> findAllTask();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Task findById(@Param("id") Long id);

    Long saveTask(Task task);

    Long updateTask(Task task);

    Long deleteTask(Long id);
}