/**
 * 常量集中处理
 *
 * 格式固定为
 * @type {{MODULE: {FIELD: {label: string, value: string}}}}
 *
 * label为显示内容, value为实际传参
 *
 *  使用对象格式以便获取value/label , 而且v-for支持遍历对象(Object.keys)
 *
 */
// 性别选项
const SEX = {
  MALE: {
    value: '0',
    label: '男'
  },
  FEMALE: {
    value: '1',
    label: '女'
  },
  NEUTRAL: {
    value: '2',
    label: '中性'
  },
  OHTER: {
    value: '3',
    label: '其他'
  }

}
// todo remove
// 品牌管理
const GOOD_BRAND = {
  // 品牌类型
  TYPE: {
    BUS: {
      value: '0',
      label: '品牌商运营品牌'

    }
  },
  // 价格定位
  PRICE:
    {
      LOW: {
        value: '0',
        label: '低端'
      },
      MID: {
        value: '1',
        label: '中端'
      },
      MID_HIGH: {
        value: '2',
        label: '中高端'
      },
      HIGH: {
        value: '3',
        label: '高端'
      }
    },
  // 客群定位
  AGE: {
    BABY: {
      value: '0',
      label: '幼童'
    },
    TEENAGER: {
      value: '1',
      label: '青少年'
    },
    MID_AGE: {
      value: '2',
      label: '中年'
    }

  },

  STYLE: {
    JAPAN: {
      value: '0',
      label: '日韩风'
    },
    BUSINESS: {
      value: '1',
      label: '商务风'
    },
    WESTERN: {
      value: '2',
      label: '欧美风'
    }
  }
}

// 推文管理
const ARTICLE = {
  // 文章标签
  TAG: {
    SPRING: {
      value: '0',
      label: '春季相关'
    },
    FEED_BACK: {
      value: '1',
      label: '反馈'
    },
    NEW: {
      value: '2',
      label: '新款'
    },
    FASHION: {
      value: '3',
      label: '明星穿搭'
    },
    THIN: {
      value: '4',
      label: '显瘦'
    }
  },
  // 推文状态
  TYPE: {
    UN_FINISH: {
      value: '0',
      label: '未完成'
    },
    TO_BE_POST: {
      value: '1',
      label: '待发布'
    },
    POSTED: {
      value: '2',
      label: '已发布'
    },
    OFF_SHELF: {
      value: '3',
      label: '已下架'
    }
  },
  POST_DAY: {
    CUR_DAY: {
      value: '0',
      label: '当天'
    },
    YESTERDAY: {
      value: '1',
      label: '昨天'
    },
    IN_3_DAY: {
      value: '2',
      label: '三天内'
    },
    IN_1_WEEK: {
      value: '3',
      label: '一周内'
    },
    IN_1_MONTH: {
      value: '4',
      label: '一月内'
    },
    LAST_MONTH: {
      value: '5',
      label: '上个月'
    },
    IN_1_YEAR: {
      value: '6',
      label: '一年内'
    }
  }
}
export {
  GOOD_BRAND,
  ARTICLE,
  SEX
}
