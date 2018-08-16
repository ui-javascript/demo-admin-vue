package space.qmen.leaf.service;

import space.qmen.leaf.domain.Aclass;

import java.util.List;

/**
 * 城市业务逻辑接口类
 *
 * Created by bysocket on 07/02/2017.
 */
public interface AclassService {

    List<Aclass> findAllAclass();

    Aclass findAclassById(Long id);
    Long saveAclass(Aclass city);
    Long updateAclass(Aclass city);
    Long deleteAclass(Long id);
}