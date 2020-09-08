<template>
  <div class="page shadow ">
    <div class="header " >
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
          <el-carousel interval="5000" height="187px" arrow="never" indicator-position="none">
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
                    <i class="el-icon-full-screen" style="font-size: 32px"></i>
                  </div>
                  <div class="detail y-flex y-align-right y-center y-vertical-center">
                    <div>详情</div>
                    <i class="el-icon-arrow-right" style="font-size: 15px"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="y-padding-none y-line-height-200">
              <div v-for="(o,i) in ['店铺新品对您88折','您生日当月享受一件7.5折','享受新品8.8折']" :key="i"> {{o}}</div>
            </div>
          </div>
        </div>

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
export default {
  data() {
    return { // 首页轮播图
      imgs: [
        { url: 'https://www.uniqlo.cn/hmall/test/u0000000009932/detail/393/10.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/views/mockWX/index.scss";

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
