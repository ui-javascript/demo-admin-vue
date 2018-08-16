package space.qmen.leaf.service;

import space.qmen.leaf.domain.Semester;

import java.util.List;

/**
 * 城市业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface SemesterService {

    List<Semester> findAllSemester();

    Semester findSemesterById(Long id);
    Long saveSemester(Semester semester);
    Long updateSemester(Semester semester);
    Long deleteSemester(Long id);
}