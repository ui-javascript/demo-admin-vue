package space.qmen.lot.param;

import com.github.pagehelper.PageHelper;

public class PageParam {
    private static final Integer DEFAULT_PAGE_NUM  = 1;
    private static final Integer DEFAULT_PAGE_SIZE = 10;
    private Integer page;
    private Integer limit;

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public void pageSet() {
        if (null == this.getPage() || null == this.getLimit()) {
            PageHelper.startPage(DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE);
        } else {
            PageHelper.startPage(this.getPage(), this.getLimit());
        }
    }
}
