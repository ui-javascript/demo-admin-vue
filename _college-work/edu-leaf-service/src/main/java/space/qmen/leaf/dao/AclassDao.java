package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Aclass;

import java.util.List;

/**
 * 城市 DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface AclassDao {

    /**
     * 获取城市信息列表
     *
     * @return
     */
    List<Aclass> findAllAclass();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Aclass findById(@Param("id") Long id);
    Long saveAclass(Aclass aclass);
    Long updateAclass(Aclass aclass);
    Long deleteAclass(Long id);
}