package space.qmen.leaf.service;

import space.qmen.leaf.domain.Year;

import java.util.List;

/**
 * 业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface YearService {

    List<Year> findAllYear();

    Year findYearById(Long id);
    Long saveYear(Year city);
    Long updateYear(Year city);
    Long deleteYear(Long id);
}