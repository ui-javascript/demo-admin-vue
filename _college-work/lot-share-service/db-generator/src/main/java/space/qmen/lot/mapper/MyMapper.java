package space.qmen.lot.mapper;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * 继承该Mapper接口
 *
 * @author  
 * @version 1.0 16/7/8
 * @since 1.0
 */
public interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {
    //FIXME 特别注意，该接口不能被扫描到，否则会出错
}
