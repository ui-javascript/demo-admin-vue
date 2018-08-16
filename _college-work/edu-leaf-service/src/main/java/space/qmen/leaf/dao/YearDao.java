package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Year;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface YearDao {

    List<Year> findAllYear();
    Year findById(@Param("id") Long id);
    Long saveYear(Year year);
    Long updateYear(Year year);
    Long deleteYear(Long id);
}