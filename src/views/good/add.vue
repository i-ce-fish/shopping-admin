<template>
  <div class="card-container">
    <el-card class="box-card">

      <div slot="header">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col>
            <el-alert :closable="false" type="info">
              1. 有同款或类似货品，录入过商品资料的，请输入款号编码，调出商品资料，在这个基础上修改，可以省事。<br/>
              2. 同款下的每个颜色，视为不同货品，需要制作商品资料。
            </el-alert>
          </el-col>
          <el-col>
            <el-row type="flex" justify="end">
              <el-col :span="12" class="y-p-r-10">
                <y-input prefix-icon="el-icon-search" placeholder="请输入款号编码"></y-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary">确定</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <el-form ref="goodForm" :model="goodForm" :rules="goodRules" label-width="110px">

        <el-collapse v-model="activeName2" accordion>

          <el-collapse-item title="关于货源------" name="1" >
            <div class="coll-item-body">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="原货号：">
                    <el-input placeholder="请输入" style="width: 400px" size="mini"></el-input>
                  </el-form-item>
                  <p style="margin-left: 40px">供货商编码：MB</p>
                </el-col>
                <el-col :span="12">
                  <p style="margin-top:10px;margin-bottom: 30px">货源类型：现货大货</p>
                  <p>订货数量：99</p>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>

          <el-collapse-item title='上传图片------' name="2">

<!--            <div slot="title" class="y-flex y-align-between title-slot">-->
<!--              <div class=" y-flex ">-->
<!--                <div class="coll-item-title"><span class="y-p-r-10">上传商品图片</span></div>-->
<!--                <div>-->
<!--                  <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>-->
<!--                  <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明-->
<!--                  </el-button>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>已选择信息3 已选择信息2 已选择信息1</div>-->
<!--            </div>-->

            <el-row class="coll-item-body" :gutter="20" type="flex" justify="space-between">
              <el-col>
                <div><span style="color: red">*</span>&nbsp;上传商品主图</div>
                <el-form-item label="" prop="main_pic" label-width="">
                  <y-upload-image-single v-model="goodForm.main_pic" width="400px" height="400px"/>
                </el-form-item>
                <el-alert v-if="showTips1" type="info">
                  小贴士: <br/>
                  1. 上传的第1张图片，叫主图。相当于货品的“身份证照片”。<br/>
                  2. 主图只能是 1 张图，若上传 2 张图，后一张图将替换掉前一张。<br/>
                  3. 若更换主图，请点击图片，按提示操作。
                </el-alert>
              </el-col>
              <el-col>
                <el-form-item label="详情轮播图:" prop="carousels">
                  <div style="width:485px;max-height:420px;overflow-y: scroll;">
                    <y-upload-image v-model="goodForm.carousels" class="upload-carousels"/>
                  </div>
                </el-form-item>
                <el-alert v-if="showTips1" type="info" style="max-width: 485px;">
                  建议上传商品的：侧面图、背后图、模特搭配穿法图、细节图等等。
                </el-alert>
              </el-col>
            </el-row>

          </el-collapse-item>

          <el-collapse-item title="分类概述------" name="3">
            <el-collapse v-model="activeName2_2" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">品类</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20" type="flex" align="middle">
                    <el-col :span="3">
                      <div style="height: 40px">
                        <el-form-item label="选择三级分类:" prop="field123" label-width="100px">
                          <y-dialog title="选择分类" class="category-form" :visible.sync="showCategory">
                            <el-tabs tab-position="left" style="height: 100%;">
                              <el-tab-pane :label="o1.label" v-for="(o1,i1) in categoryOptions" :key="i1">
                                <div v-for="(o2,i2) in o1.children " :key="i2">
                                  <div>{{ o2.label }}</div>
                                  <div><y-radio v-model="goodForm.category" :options="o2.children"></y-radio></div>
                                  <el-divider></el-divider>
                                </div>
                              </el-tab-pane>
                            </el-tabs>
                          </y-dialog>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="3">
                      <el-button type="primary" @click="showCategory=true">选择分类</el-button>
                    </el-col>
                    <el-col :span="8">
                      <div style="padding-bottom: 5px"><el-button>新增品类</el-button></div>
                      <div style="padding-bottom: 5px"><el-button>新增小类</el-button></div>
                      <div style="padding-bottom: 5px"><el-button>新增大类</el-button></div>
                    </el-col>
                    <el-col :span="8" style="display: flex;align-items: center">
                      <checkbox-no-ticks category-name="大类" category-data="裤子" :is-click="false"></checkbox-no-ticks>
                      <div style="display:inline-block; border-top: 1px black solid;width: 35px;margin: 7px"></div>
                      <checkbox-no-ticks category-name="小类" category-data="牛仔裤" :is-click="false"></checkbox-no-ticks>
                      <div style="display:inline-block; border-top: 1px black solid;width: 35px;margin: 7px"></div>
                      <checkbox-no-ticks category-name="品类" category-data="破洞牛仔裤" :is-active="true" :is-click="false"></checkbox-no-ticks>
                      <checkbox-no-ticks category-name="代码" category-data="66" width="45px" :is-active="true" :is-click="false"></checkbox-no-ticks>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">系列</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-radio" :options="['运动系列','休闲系列','商务系列','家居系列']" label="选择系列："></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="3">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">上架品牌</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <el-form-item label="选择品牌：" prop="field124" label-width="100px">
                        <el-select v-model="value" multiple filterable remote reserve-keyword placeholder="请选择/输入品牌名称或编码">
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-button>新增品牌</el-button>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="品牌说头备忘：" prop="12321321" label-width="100px">
                        <el-input placeholder="请输入（举例：美国兴起的潮牌）"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="4">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">生产年</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <el-form-item label="选择年份：" prop="field124" label-width="100px">
                        <el-select v-model="value" multiple filterable reserve-keyword placeholder="请选择/输入年份">
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="5">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">适穿季</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-checkbox" :options="['春','夏','秋','冬','盛夏','深冬','四季']" label="选择季节："></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="6">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">性别</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-radio" :options="['男款','女款','通用款','其他']" label="选择性别："></component>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="穿着概述------" name="4">
            <el-collapse v-model="activeName2_5" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">适穿年龄</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-checkbox" :options="['幼童','小童','大童','小学生','初高中','18-24','25-30','35左右','40左右','50左右','60左右','65以上']"></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">时尚度</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-radio" :options="['一般时尚','强时尚']"></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="3">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">穿后档次</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-radio" :options="['地摊','快时尚','精品','轻奢','奢侈品']"></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="4">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">适穿场合</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-checkbox" :options="['正式商务','通勤上班','居家舒适','户外休闲','活力运动','性感夜店','礼服场合','旅游度假']"></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="5">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">气质打造</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-checkbox" :options="['阳光帅气','妩媚动人','沉稳老练','性感风骚','冷酷肃杀','浪漫多情','小清新','富贵大气','睿智聪慧','憨厚老实','年轻活力','健美有型','循规蹈矩','善良和蔼','清心寡欲','干练敏捷','超凡脱俗']"></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="6">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">角色打造</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <component is="editable-tag-checkbox" :options="['机关干部','学校老师','社会人','老板','房产中介','大学生','文化中年','文艺青年','宗教人士','二次元','IT宅男','打工妹','上海名媛','贵妇']"></component>
                </div>

              </el-collapse-item>

              <el-collapse-item name="7">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">观感手感</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20" type="flex" align="middle">
                    <el-col :span="14">
                      <component is="editable-tag-radio" label="软硬/柔挺：" :options="['很软','较软','常规','较硬','很硬']"></component>
                      <component is="editable-tag-radio" label="布料薄厚：" :options="['很薄','较薄','适中','较厚','很厚']"></component>
                      <component is="editable-tag-radio" label="拉伸弹性：" :options="['无弹','微弹','高弹','超弹','四面弹']"></component>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="外观说头备忘" prop="field124" label-width="100px">
                        <el-input placeholder="请输入"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="颜色图案------" name="5">
            <el-collapse v-model="activeName2_3" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">选择颜色</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="2">
                      <div style="padding-bottom: 10px"><el-button type="primary" @click="showColorCategory=true">选择颜色</el-button></div>
                      <div><el-button type="primary" plain>新增颜色名</el-button></div>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="主色色系：" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132"></y-select>
                      </el-form-item>
                      <el-form-item label="色系编码：" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132" disabled></y-select>
                      </el-form-item>
                      <el-form-item label="主色名称：" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132" filterable></y-select>
                      </el-form-item>
                      <el-form-item label="主色编码：" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132"></y-select>
                      </el-form-item>
                      <el-form-item label="辅色色系：" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132"></y-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="颜色说头：" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <y-dialog class="category-form" :visible.sync="showColorCategory" title="选择颜色">
                    <el-tabs tab-position="left" style="height: 100%">
                      <el-tab-pane>
                              <span slot="label">
                                  <div style="width: 20px;height: 40px;background: red;border: 2px solid black"></div>
                                  <p v-for="(o1,i1) in ColorCategoryOptions" :key="i1" style="background: red;color: white">{{o1.label}}</p>
                              </span>
                        <div v-for="(o1,i1) in ColorCategoryOptions" :key="i1">
                          <y-radio v-model="goodForm.category" :options="o1.children"></y-radio>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </y-dialog>
<!--              <el-alert>小贴士：<br/>主色：货品的主要颜色。辅色：货品的次要颜色</el-alert>-->
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">商品图案</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="14">
                      <el-form-item label="商品图案：" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132" class="y-p-r-10"></y-select>
                        <el-button type="primary" @click="showPattern2=true" plain>新增图案名称</el-button>
                      </el-form-item>
                      <y-dialog class="category-form" v-model="showPattern2" title="新增二级图案名称" @cfm="cfmAddForm('addFormPattern2','showPattern2')">
                        <add-form-pattern ref="addFormPattern2" :children="true"></add-form-pattern>
                        <el-button slot="footer" type="primary" @click="showPattern1=true">添加一级分类名称</el-button>
                      </y-dialog>
                      <y-dialog class="category-form" v-model="showPattern1" title="新增一级图案名称" width="60%" @cfm="cfmAddForm('addFormPattern1','showPattern1')">
                        <add-form-pattern ref="addFormPattern1" :children="false"></add-form-pattern>
                      </y-dialog>
                      <el-alert>小贴士：<br/>图案名称是区别货品的主要特征之一。进入商品名称字段。无图案+无辅色=净色</el-alert>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="图案说头：" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="款式概述------" name="6">
            <el-collapse v-model="activeName2_11" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">设计创意</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20" type="flex" align="middle">
                    <el-col :span="24">
                      <el-form-item label="设计团队：">
                        <el-input placeholder="请输入（例如：香奈儿首席设计团队）" style="width: 400px"></el-input>
                      </el-form-item>
                      <component is="editable-tag-checkbox" :options="['韩国爆款','广州流行','明星同款','欧美最IN','第五大道街头']" lanel="创意来源："></component>
                      <el-form-item label="创意说头：">
                        <el-input placeholder="请输入" style="width: 400px"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <span class="y-p-r-10">风格描述</span>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20" type="flex" align="middle">
                    <el-col :span="24">
                      <el-form-item label="元素：">
                        <el-input placeholder="单行输入" style="width: 400px"></el-input>
                      </el-form-item>
                      <el-form-item label="主题：">
                        <el-input placeholder="单行输入" style="width: 400px"></el-input>
                      </el-form-item>
                      <el-form-item label="风头说头：">
                        <el-input placeholder="请输入" style="width: 400px"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="款式细节------" name="7">
            <el-collapse v-model="activeName2_4" accordion>
            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="面料属性和功能------" name="10">
            <el-collapse v-model="activeName2_8" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title"><span class="y-p-r-10">面料名称</span></div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明</el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="14">
                      <el-form-item label="大身名称" prop="value15" label-width="100px">
                        <y-select v-model="goodForm.value132" class="y-p-r-10"></y-select>
                      </el-form-item>
                      <el-alert>小贴士：<br/>大身指货品外面的、主要部分的面料。这个名称可以用带营销味的很别致的名词，但不可以夸大其词，避免消费者误解而被投诉。</el-alert>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="面料名称说头" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row class="inner-coll">
                    <el-collapse>
                      <el-collapse-item>
                        <div slot="title" class="y-flex-1">
                          <el-divider class="y-center">
                            <div><i class="el-icon-d-arrow-right arrow-icon"></i>
                            </div>
                            <div class="y-color-info y-font-12">点击填写衬里填充物</div>
                          </el-divider>
                        </div>
                        <div>
                          <el-col :span="13">
                            <el-form-item label="衬里名称" prop="value11235" label-width="100px">
                              <y-input v-model="goodForm.value132"></y-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="13">
                            <el-form-item label="填充物名称" prop="value11235" label-width="100px">
                              <y-input v-model="goodForm.value132"></y-input>
                            </el-form-item>
                          </el-col>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title" style="width: 175px"><span class="y-p-r-10">材质纤维名称+成分含量</span></div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明</el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="14">
                      <el-row type="flex">
                        <el-col>
                          <el-form-item label="大身材质1:" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132" filterable placeholder="请选择/输入"></y-select>
                          </el-form-item>
                          <el-form-item label="材质2:" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132" filterable placeholder="请选择/输入"></y-select>
                          </el-form-item>
                        </el-col>
                        <el-col>
                          <el-form-item label="占比:" prop="value15" label-width="50px">
                            <y-number v-model="goodForm.value112332" :precision="1"></y-number>
                          </el-form-item>
                          <el-form-item label="占比:" prop="value15" label-width="50px">
                            <y-number v-model="goodForm.value112312332" :precision="1"></y-number>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-alert>小贴士：<br/>这里是雷区，所填字段将显示在线上商城和服装吊牌上。若填写失实，将会被国家监管部门处罚。请向供货方核实数据，若无把握，宁可填写得低调一些。材质这项是必填项。</el-alert>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="材质说头" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row class="inner-coll">
                    <el-collapse>
                      <el-collapse-item>
                        <div slot="title" class="y-flex-1">
                          <el-divider class="y-center">
                            <div><i class="el-icon-d-arrow-right arrow-icon"></i></div>
                            <div class="y-color-info y-font-12">点击填写衬里填充物</div>
                          </el-divider>
                        </div>
                        <el-row :gutter="20">
                          <el-col :span="14">
                            <el-row type="flex">
                              <el-col>
                                <el-form-item label="衬里材质:" prop="value15" label-width="100px">
                                  <y-select v-model="goodForm.value132" filterable placeholder="请选择/输入"></y-select>
                                </el-form-item>
                                <el-form-item label="填充物材质:" prop="value15" label-width="100px">
                                  <y-select v-model="goodForm.value132" filterable placeholder="请选择/输入"></y-select>
                                </el-form-item>
                              </el-col>
                              <el-col>
                                <el-form-item label="占比:" prop="value15" label-width="100px">
                                  <y-number v-model="goodForm.value112332" :precision="1"></y-number>
                                </el-form-item>
                                <el-form-item label="填充物数量:" prop="value15" label-width="100px">
                                  <y-number v-model="goodForm.value112312332" :precision="1"></y-number>
                                </el-form-item>
                                <el-form-item label="填充物重量:" prop="value15" label-width="100px">
                                  <y-number v-model="goodForm.value112312332" :precision="1"></y-number>
                                </el-form-item>
                              </el-col>
                            </el-row>
                          </el-col>
                          <el-col :span="10">
                            <el-form-item label="材质说头" prop="value15" label-width="100px">
                              <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </el-collapse-item>
                    </el-collapse>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="3">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">纺纱和织布</span>
                    </div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明
                      </el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

              </el-collapse-item>

              <el-collapse-item name="4">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">染料和染色</span>
                    </div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明
                      </el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

              </el-collapse-item>

              <el-collapse-item name="5">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">面料后整理</span>
                    </div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明
                      </el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="成衣加工------" name="11">
            <el-collapse v-model="activeName2_9" accordion>
            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="销售属性------" name="8">
            <div class="coll-item-body">
              <el-form-item label="吊牌价格">
                <el-input placeholder="请输入（¥199.00）" style="width: 400px"></el-input>
              </el-form-item>
            </div>
          </el-collapse-item>

          <el-collapse-item title="售后维护------" name="12">
            <div class="coll-item-body">
              <component is="editable-tag-radio" :options="['无缩水','轻微缩水','缩水明显']" label="水洗后缩水："></component>
              <component is="editable-tag-radio" :options="['无掉色','轻微掉色','掉色明显']" label="水洗后掉色："></component>
              <component is="editable-tag-checkbox" :options="['可水洗','干洗（不可水洗）','可机洗','手洗（不可机洗）']" label="洗涤方式："></component>
              <component is="editable-tag-radio" :options="['20℃以下','30℃以下','40℃以下','50℃以下','60℃以下','70℃以下','80℃以下','90℃以下']" label="洗涤温度："></component>
              <component is="editable-tag-checkbox" :options="['适用酸性洗涤剂','适用碱性洗涤剂','适用漂白剂','适用中性洗涤剂']" label="洗涤剂适用："></component>
              <component is="editable-tag-checkbox" :options="['拧干','不可拧干','悬挂晒干','平面晒干','不可暴晒','不可用烘干机']" label="晾晒方式："></component>
              <component is="editable-tag-checkbox" :options="['不可熨烫','低温熨烫','中温熨烫','高温熨烫','需垫烫布']" label="熨烫方式："></component>
              <component is="editable-tag-radio" :options="['可改裤脚长','不可改裤脚']" label="可否修改尺寸："></component>
              <el-form-item label="洗涤说明：">
                <el-input placeholder="请输入" style="width: 400px"></el-input>
              </el-form-item>
            </div>
          </el-collapse-item>

        </el-collapse>

<!--        <el-collapse v-model="activeName3" accordion>-->

<!--            <el-collapse-item name="8">-->

<!--              <div slot="title" class="y-flex y-align-between title-slot">-->
<!--                <div class=" y-flex ">-->
<!--                  <div class="coll-item-title" style="width: 250px">-->
<!--                    <span class="y-p-r-10">材质纤维特性</span>-->
<!--                  </div>-->
<!--                  &lt;!&ndash;                <div>&ndash;&gt;-->
<!--                  &lt;!&ndash;                  <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                  <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明&ndash;&gt;-->
<!--                  &lt;!&ndash;                  </el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                </div>-->
<!--                <div>已选择信息3 已选择信息2 已选择信息1</div>-->
<!--              </div>-->

<!--              <div class="coll-item-body">-->
<!--                <el-card class="box-card">-->
<!--                  <div>-->
<!--                    <h4>材质1-棉花</h4>-->
<!--                    <el-form-item label="基本功能特点:">-->
<!--                      <y-tag-input @del="test" @cfm="test" :options="[{id: 1,value: 1,label: 'tag1'}]"></y-tag-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="基本功能缺点:">-->
<!--                      <y-tag-input @del="test" @cfm="test"></y-tag-input>-->
<!--                    </el-form-item>-->
<!--                  </div>-->
<!--                  &lt;!&ndash;                TODO  添加条件判断, 有材质2才显示&ndash;&gt;-->
<!--                  <div>-->
<!--                    <el-divider></el-divider>-->
<!--                    <h4>材质2-化纤</h4>-->
<!--                    <el-form-item label="常规优点:">-->
<!--                      <y-tag-input @del="test" @cfm="test" :options="[{id: 1,value: 1,label: 'tag1111111111111'}]"></y-tag-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="常规缺点:">-->
<!--                      <y-tag-input @del="test" @cfm="test"></y-tag-input>-->
<!--                    </el-form-item>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--                <el-row class="y-m-t-10">-->
<!--                  <el-form-item label="本产品特殊功能:" label-width="150px">-->
<!--                    <y-tag-input @del="test" @cfm="test"></y-tag-input>-->
<!--                  </el-form-item>-->
<!--                </el-row>-->
<!--              </div>-->

<!--            </el-collapse-item>-->

<!--            <el-collapse-item name="9">-->

<!--              <div slot="title" class="y-flex y-align-between title-slot">-->
<!--                <div class=" y-flex ">-->
<!--                  <div class="coll-item-title"><span class="y-p-r-10">纺织特征</span>-->
<!--                  </div>-->
<!--                  &lt;!&ndash;                <div>&ndash;&gt;-->
<!--                  &lt;!&ndash;                  <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                  <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明&ndash;&gt;-->
<!--                  &lt;!&ndash;                  </el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                </div>-->
<!--                <div>已选择信息3 已选择信息2 已选择信息1</div>-->
<!--              </div>-->

<!--              <div class="coll-item-body">-->
<!--                <el-row :gutter="20">-->
<!--                  <el-col :span="14">-->
<!--                    <el-form-item label="商品图案" prop="value15" label-width="100px">-->
<!--                      <y-select v-model="goodForm.value132" class="y-p-r-10"></y-select>-->
<!--                      <el-button type="primary" plain>新增图案名</el-button>-->
<!--                    </el-form-item>-->
<!--                    &lt;!&ndash;                  <el-alert>小贴士：<br/>图案名称是区别货品的主要特征之一。进入商品名称字段。无图案+无辅色=净色</el-alert>&ndash;&gt;-->
<!--                  </el-col>-->
<!--                  <el-col :span="10">-->
<!--                    <el-form-item label="面料工艺说头" prop="value15" label-width="100px">-->
<!--                      <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>-->
<!--                    </el-form-item>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--              </div>-->

<!--            </el-collapse-item>-->

<!--          </el-collapse>-->

      </el-form>

    </el-card>
  </div>
</template>

<script>
import YUploadImageSingle from '@/components/y-upload-image-single'
import YDialog from '@/components/y-dialog'
import addFormBrand from '@/views/goodbrand/addForm'
import addFormPattern from '@/views/goodpattern/addForm'
import { SEX } from '@/utils/const'
import CheckboxNoTicks from '@/components/y-checkbox-no-ticks'
import editableTagRadio from '@/components/editable-tag-radio'
import editableTagCheckbox from '@/components/editable-tag-checkbox'

export default {
  components: {
    YUploadImageSingle,
    YDialog,
    addFormBrand,
    addFormPattern,
    CheckboxNoTicks,
    editableTagRadio,
    editableTagCheckbox
  },
  data() {
    return {
      // 图片上传项默认展开
      activeName1: '1',
      // 几个大模块的展开控制
      activeName2: '',
      // 大模块下的子模块的折叠，根据序号排列
      activeName2_1: '',
      activeName2_2: '',
      activeName2_3: '',
      activeName2_4: '',
      activeName2_5: '',
      activeName2_6: '',
      activeName2_7: '',
      activeName2_8: '',
      activeName2_9: '',
      activeName2_10: '',
      activeName2_11: '',

      activeName3: '',
      // 显示添加品牌对话框
      showBrandForm: false,
      // 展示选择分类框
      showCategory: false,
      // 假的分类数据
      categoryOptions: [
        {
          value: '1',
          label: '大类1',
          children: [{
            value: '11',
            label: '小类1',
            children: [{
              value: '111',
              label: '品类1'
            }, {
              value: '112',
              label: '品类2'
            }, {
              value: '113',
              label: '品类3'
            }, {
              value: '114',
              label: '品类4'
            }]
          }, {
            value: '12',
            label: '小类2',
            children: [{
              value: '121',
              label: '品类21'
            }, {
              value: '122',
              label: '品类122'
            }, {
              value: '123',
              label: '品类1223'
            }, {
              value: '124',
              label: '品类1225'
            }]
          }, {
            value: '112312312313',
            label: '小类13',
            children: [{
              value: '1231231231',
              label: '品类1'
            }, {
              value: '132',
              label: '品类1'
            }, {
              value: '133',
              label: '品类1'
            }, {
              value: '134',
              label: '品类1'
            }]
          }]
        }, {
          value: '123122',
          label: '大类02',
          children: [{
            value: '231231',
            label: '小类121',
            children: [{
              value: '212311',
              label: '品类4541'
            }, {
              value: '221312312',
              label: '品类4561'
            }, {
              value: '212312313',
              label: '品类6456.'
            }, {
              value: '111',
              label: '品类4561'
            }]
          }, {
            value: '11123213',
            label: '小类1',
            children: [{
              value: '11312311',
              label: '品类1'
            }, {
              value: '111231231231231',
              label: '品类1'
            }, {
              value: '121312311',
              label: '品类1'
            }, {
              value: '123123123123111',
              label: '品类1'
            }]
          }, {
            value: '12321311',
            label: '小类1',
            children: [{
              value: '111231231',
              label: '品类1'
            }, {
              value: '112312312312311',
              label: '品类1'
            }, {
              value: '112312312311',
              label: '品类1'
            }, {
              value: '11231232132112312311',
              label: '品类1'
            }]
          }]
        }, {
          value: '1',
          label: '大类13',
          children: [{
            value: '11',
            label: '小类1',
            children: [{
              value: '11231232111',
              label: '品类1'
            }, {
              value: '1131232131',
              label: '品类1'
            }, {
              value: '123123111',
              label: '品类1'
            }, {
              value: '11213213213123123211',
              label: '品类1'
            }]
          }, {
            value: '11',
            label: '小类1',
            children: [{
              value: '1312312321311',
              label: '品类1'
            }, {
              value: '121312345354611',
              label: '品类1'
            }, {
              value: '114564561',
              label: '品类4561'
            }, {
              value: '11456455461',
              label: '品类4564561'
            }]
          }, {
            value: '145654645641',
            label: '小类1',
            children: [{
              value: '5645645456111',
              label: '品类4564561'
            }, {
              value: '14564564511',
              label: '品类16456456'
            }, {
              value: '116456451',
              label: '品类456456451'
            }, {
              value: '11645546451',
              label: '品类1456'
            }]
          }]
        }
      ],
      showColorCategory: false,
      ColorCategoryOptions: [{
        value: '1',
        label: '红色',
        children: [{
          value: '11',
          label: '红色-1'
        }]
      }],
      // sex options
      SEX,
      goodForm: {},
      goodRules: {

        product_name: [

          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的商品名称',
            trigger: 'blur'
          }

        ],

        product_sn: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的商品编号',
            trigger: 'blur'
          }

        ],

        type_sn: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的款式编号',
            trigger: 'blur'
          }

        ],

        main_pic: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的页面主图',
            trigger: 'blur',
            required: true
          }

        ],
        brand: [
          {
            required: true,
            message: '请选择进货品牌'
          }
        ]

      },
      showTips1: false,
      // 因为手风琴每次只打开一个, 所以一个值就可以控制所有的 tips
      showTips2: false,
      brandOptions: [{
        value: '01',
        label: '美邦01'
      }, {
        value: '02',
        label: '森马02'
      }, {
        value: '03',
        label: '以纯03'
      }],
      // 展示添加二级图案对话框
      showPattern2: false,
      // 展示添加一级图案对话框
      showPattern1: false,
      value: null
    }
  },
  methods: {

    cfmAddBrand() {
      this.$refs.addFormBrand.submit(() => {
        this.showBrandForm = false
      })
    },
    cfmAddForm(ref, showForm) {
      this.$refs[ref].submit(() => {
        this[showForm] = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.coll-item-title {
  font-weight: 700;
  font-size: 15px;
  width: 150px
}

.coll-item-body {
  margin: 20px 0
}

.title-slot {
  width: 100%
}

// 折叠项高度
.el-collapse-item__header {
  height: 60px;
  line-height: 60px;
}

.category-form .el-divider--horizontal {
  margin: 10px 0;
}

//折叠面板内部的折叠
.inner-coll {
  margin: 0 40px;

  //上边框
  /deep/ .el-collapse {
    border: 0;
  }

  //下边框
  /deep/ .el-collapse-item__header {
    border: 0;
  }

  // 标题slot
  /deep/ .el-collapse-item__header {
    height: 60px;
    line-height: 20px;
  }

  /deep/ .arrow-icon {
    font-size: 20px;
    transform: rotate(90deg);
  }
}
</style>
