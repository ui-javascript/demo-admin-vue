package space.qmen.leaf.service;

import space.qmen.leaf.domain.Stu;

import java.util.List;

/**
 * 城市业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface StuService {

    List<Stu> findAllStu();

    Stu findStuById(Long id);
    Long saveStu(Stu stu);
    Long updateStu(Stu stu);
    Long deleteStu(Long id);
}