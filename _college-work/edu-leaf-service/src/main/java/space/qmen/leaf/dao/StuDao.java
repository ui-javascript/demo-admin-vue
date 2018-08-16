package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Stu;

import java.util.List;

/**
 * 城市 DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface StuDao {

    /**
     * 获取城市信息列表
     *
     * @return
     */
    List<Stu> findAllStu();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Stu findById(@Param("id") Long id);

    Long saveStu(Stu stu);

    Long updateStu(Stu stu);

    Long deleteStu(Long id);
}