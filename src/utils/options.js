/**
 * 静态变量集中处理
 * @type {{goodBrand: {type: [{label: string, value: string}]}}}
 */

// 品牌管理
const GOOD_BRAND = {
  // 品牌类型
  TYPE: [
    {
      value: '品牌商运营品牌',
      label: '品牌商运营品牌'
    }
  ],
  // 价格定位
  PRICE: [
    {
      value: '低端',
      label: '低端'
    }, {
      value: '中端',
      label: '中端'
    }, {
      value: '中高端',
      label: '中高端'
    }, {
      value: '高端',
      label: '高端'
    }
  ],
  // 客群定位
  AGE: [
    {
      value: '幼童',
      label: '幼童'
    }, {
      value: '青少年',
      label: '青少年'
    }, {
      value: '中年',
      label: '中年'
    }
  ],
  STYLE: [
    {
      value: '日韩风',
      label: '日韩风'
    }, {
      value: '商务风',
      label: '商务风'
    }, {
      value: '欧美风',
      label: '欧美风'
    }
  ]
}

// 推文管理
const ARTICLE = {
  TAG: [
    {
      value: '春季相关',
      label: '春季相关'
    }, {
      value: '反馈',
      label: '反馈'
    },
    {
      value: '新款',
      label: '新款'
    }, {
      value: '明星穿搭',
      label: '明星穿搭'
    }, {
      value: '显瘦',
      label: '显瘦'
    }
  ],
  TYPE: [
    {
      value: '0',
      label: '全部'
    },
    {
      value: '1',
      label: '已发布'
    },
    {
      value: '2',
      label: '待发布'
    },
    {
      value: '3',
      label: '未完成'
    },
    {
      value: '4',
      label: '已删除'
    }
  ],
  POST_DAY: [
    {
      value: '0',
      label: '当天'
    },
    {
      value: '1',
      label: '昨天'
    },
    {
      value: '2',
      label: '三天内'
    },
    {
      value: '3',
      label: '一周内'
    },
    {
      value: '4',
      label: '一月内'
    },
    {
      value: '5',
      label: '上个月'
    },
    {
      value: '6',
      label: '一年内'
    }
  ]
}
export {
  GOOD_BRAND,
  ARTICLE
}
