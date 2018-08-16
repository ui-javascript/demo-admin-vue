package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Tch;

import java.util.List;

/**
 * 城市 DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface TchDao {

    /**
     * 获取城市信息列表
     *
     * @return
     */
    List<Tch> findAllTch();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Tch findById(@Param("id") Long id);

    Long saveTch(Tch tch);

    Long updateTch(Tch tch);

    Long deleteTch(Long id);
}