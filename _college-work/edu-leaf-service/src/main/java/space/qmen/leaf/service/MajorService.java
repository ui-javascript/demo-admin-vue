package space.qmen.leaf.service;

import space.qmen.leaf.domain.Major;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface MajorService {

    List<Major> findAllMajor();

    Major findMajorById(Long id);
    Long saveMajor(Major city);
    Long updateMajor(Major city);
    Long deleteMajor(Long id);
}