<!--局部引入vant (移动端) 作为模拟小程序 vant(小程序端)的组件-->
<template>

  <div class="page shadow ">
    <span v-permission="['admin']">管理员 </span>
    <span v-permission="['admin','guider']">导购 </span>
    <span v-permission="['cannot']">空的 </span>
    <div class="header ">
      <div class="y-flex y-align-center y-vertical-center" style="height: 25px">
        00:00
      </div>
      <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
        永康美特斯邦威店
      </div>
    </div>
    <div class="" style="width:375px;overflow: hidden">

      <div class="body">
        <div
          style="height: 40px;font-size: 16px;font-weight: bold"
          class="y-flex y-center y-align-center y-vertical-center y-bgc-white">会员内购
        </div>
        <div>
          <el-carousel :interval="5000" height="187px" arrow="never" indicator-position="none">
            <el-carousel-item v-for="(o,i) in imgs" :key="i" class="y-bgc-white" style="height: 187px">
              <img height="187.5px" width="375px" fit="fill" :src="o.url">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <div
            style="text-decoration: underline;line-height: 200%;"
            class="y-flex y-center y-align-center y-vertical-center
             y-bgc-white
             text-decoration: underline;
             y-p-15"
          >店址:丽水中山街店522号(百货大楼旁)
          </div>
        </div>

        <div class="card-box">
          <div style="background-color:#fde3a7;" class="y-p-15">
            <div class="y-flex y-align-between y-line-height-200  ">
              <div class="avatar y-col-2 y-flex y-vertical-center y-p-r-15">
                <img
                  style="width: 60px; height: 60px;border-radius: 50%"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="fill"/>
              </div>
              <div class="y-col-10 y-flex ">
                <div class="  y-col-10 ">
                  <div class="">张三</div>
                  <div class=" y-flex ">
                    <div class="y-padding-r">
                      <div class="">1级会员</div>
                      <div class="">账户余额 ￥9999</div>
                    </div>
                    <div>
                      <div class="">积分 100</div>
                      <div class="">优惠券 3张</div>
                    </div>
                  </div>
                </div>
                <div class="right-box y-col-2 y-flex-col y-align-between">
                  <div class="">
                    <van-icon name="qr" style="font-size: 32px"/>
                  </div>
                  <div class="detail y-flex y-align-right y-center y-vertical-center">
                    <div>详情</div>
                    <van-icon name="arrow" style="font-size: 15px"></van-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="y-padding-none y-line-height-200">
              <div v-for="(o,i) in ['店铺新品对您88折','您生日当月享受一件7.5折','享受新品8.8折']" :key="i"> {{o}}</div>
            </div>
          </div>
        </div>
        <div class="y-flex y-align-around y-vertical-center  card-box" style="position: sticky;top: 0;height: 60px">
          <div>
            <div class="y-center">
              <i class="el-icon-goods" style="font-size: 20px"></i>
            </div>
            今日特惠
          </div>
          <div>
            <div class="y-center">
              <i class="el-icon-goods" style="font-size: 20px"></i>
            </div>
            最新穿法
          </div>
          <div>
            <div class="y-center">
              <i class="el-icon-goods" style="font-size: 20px"></i>
            </div>
            新品上架
          </div>
          <div>
            <div class="y-center">
              <i class="el-icon-goods" style="font-size: 20px"></i>
            </div>
            老板娘说
          </div>
        </div>

        <!--        今日特惠-->
        <div class="card-box">
          <div
            class="y-flex y-align-between y-vertical-center y-p-tb-10 y-border-b"
            style="height:27px;">
            <div class="y-p-l-15">
              <i class="el-icon-house" style="font-size: 20px"></i>
              <span style="font-size: 16px">
                              今日门店会员优惠
              </span>
            </div>
            <div>
              <i class="el-icon-arrow-right" style="font-size: 16px"></i>
            </div>
          </div>
          <!--          todo add for-->
          <div
            style="height: 67px"
            class="y-flex-col y-align-between y-p-tb-10 y-p-r-15 y-p-l-15 y-border-b"
            v-for="(o,i) in 4"
            :key="i">
            <div>全场货品</div>
            <div class="y-center" style="font-size: 17px;font-weight: bold;color: #ff0000;line-height: 200%;">
              满500元立减100元
            </div>
            <div class="y-right y-underline ">详情 <i class="el-icon-arrow-right" style="font-size: 16px"></i>
            </div>
          </div>
          <!--          todo add css-->
          <div class="y-flex y-flex-wrap  ">
            <div
              class="y-col-4  y-flex-col y-align-between y-border-all y-m-15 y-p-15"
              style="background-color:#f5e3e3;"
              v-for="(o,i) in 4"
              :key="i"
            >
              <div style="">全场货品</div>
              <div
                class="y-center y-color-red "
                style="padding: 15px 0;line-height:200%;font-size: 17px;font-weight: bold; ">
                满500立减100元
              </div>
              <div class="y-right y-underline">详情</div>
            </div>

          </div>
        </div>
        <!--最新穿法-->
        <div class="card-box">
          <div
            class="y-flex y-align-between y-vertical-center y-p-tb-10 y-border-b"
            style="height:27px;">
            <div class="y-p-l-15">
              <i class="el-icon-house" style="font-size: 20px"></i>
              <span style="font-size: 16px">
                              最新穿法
              </span>
            </div>
            <div>
              <i class="el-icon-arrow-right" style="font-size: 16px"></i>
            </div>
          </div>
        </div>

        <!--        新品上架-->
        <div class="y-flex  y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>

        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
        <div class="y-flex y-align-center y-vertical-center" style="height: 40px">
          永康美特斯邦威店
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import 'vant/lib/button/style'
import {
  Swipe, SwipeItem, Icon, Button
} from 'vant'

export default {

  components: {
    // 这里需注意
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

  data() {
    return { // 首页轮播图
      imgs: [
        { url: 'https://www.uniqlo.cn/hmall/test/u0000000009932/detail/393/10.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg' }
      ]
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/views/mock-wx/index.scss";

.header {
  height: 65px;
  background-color: #ff4444;
  color: rgb(248, 248, 248);
}

.body {
  height: 602px;
  width: 392px;
  overflow-x: hidden;
  overflow-y: scroll
}

</style>
