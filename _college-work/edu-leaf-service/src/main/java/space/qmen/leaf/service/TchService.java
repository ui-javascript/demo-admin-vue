package space.qmen.leaf.service;

import space.qmen.leaf.domain.Tch;

import java.util.List;

/**
 * 城市业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface TchService {

    List<Tch> findAllTch();

    Tch findTchById(Long id);
    Long saveTch(Tch tch);
    Long updateTch(Tch tch);
    Long deleteTch(Long id);
}