package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Semester;

import java.util.List;

/**
 * 城市 DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface SemesterDao {

    /**
     * 获取城市信息列表
     *
     * @return
     */
    List<Semester> findAllSemester();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Semester findById(@Param("id") Long id);

    Long saveSemester(Semester semester);

    Long updateSemester(Semester semester);

    Long deleteSemester(Long id);
}