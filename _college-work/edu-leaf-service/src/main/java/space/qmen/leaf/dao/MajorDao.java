package space.qmen.leaf.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.leaf.domain.Major;

import java.util.List;

/**
 * DAO 接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface MajorDao {

    List<Major> findAllMajor();
    Major findById(@Param("id") Long id);
    Long saveMajor(Major major);
    Long updateMajor(Major major);
    Long deleteMajor(Long id);
}