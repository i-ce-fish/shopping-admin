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

      <y-form ref="goodForm" :model="goodForm" :rules="goodRules" label-width="100px">

        <el-collapse v-model="activeName1" class="coll">

            <el-collapse-item name="1">

              <div slot="title" class="y-flex y-align-between title-slot">
                <div class=" y-flex ">
                  <div class="coll-item-title"><span class="y-p-r-10">上传商品图片</span>
                  </div>
                  <div>
                    <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                    <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明
                    </el-button>
                  </div>
                </div>
                <div>已选择信息3 已选择信息2 已选择信息1</div>
              </div>

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

          </el-collapse>

        <el-collapse v-model="activeName2" accordion>

          <el-collapse-item title="货源属性" name="1">
            <el-collapse v-model="activeName2_1" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">选择品牌</span>
                    </div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明
                      </el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="14">
                      <el-form-item label="进货品牌" prop="brand" label-width="100px">
                        <y-select v-model="goodForm.brand" :options="brandOptions" filterable class="y-p-r-10"></y-select>
                        <el-button type="primary" plain @click="showBrandForm=!showBrandForm">新增品牌名称</el-button>
                        <y-dialog v-model="showBrandForm" title="新增品牌名称" @cfm="cfmAddForm('addFormBrand','showBrandForm')">
                          <add-form-brand ref="addFormBrand" style="line-height: 1"></add-form-brand>
                        </y-dialog>
                      </el-form-item>
                      <el-alert v-if="showTips2" type="info">
                        小贴士:<br/>
                        1. 把进货品牌换掉后的品牌叫展示品牌。<br/>
                        2. 若进货商品没有品牌，请选择“无品牌”。<br/>
                        3. 若下拉框中没有要的品牌，请点“新增品牌名称”。
                      </el-alert>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="品牌说头" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" placeholder="请输入（举例：美国新起的潮牌）" type="textarea" rows="1"></y-input>
                      </el-form-item>
                      <el-alert v-if="showTips2" type="info">
                        小贴士:<br/>
                        1. 随手输入简短的几个字，为编写产品故事提供灵感。<br/>
                        2. 这些字会被保存在“卖点备忘录”中供你随时调用。
                      </el-alert>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="归属属性" name="2">
            <el-collapse v-model="activeName2_2" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title"><span class="y-p-r-10">选择品类</span></div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明</el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col>
                      <el-form-item label="选择三级分类:" prop="field123" label-width="100px">
                        <el-row :gutter="10" type="flex" justify="space-between">
                          <el-col :span="4">
                            <el-button type="primary" @click="showCategory=true">选择分类</el-button>
                          </el-col>
                          <y-dialog class="category-form" v-model="showCategory" title="选择分类">
                            <el-tabs tab-position="left" style="height: 100%;">
                              <el-tab-pane :label="o1.label" v-for="(o1,i1) in categoryOptions" :key="i1">
                                <div v-for="(o2,i2) in o1.children " :key="i2">
                                  <div>{{ o2.label }}</div>
                                  <div>
                                    <y-radio v-model="goodForm.category" :options="o2.children"></y-radio>
                                  </div>
                                  <el-divider></el-divider>
                                </div>
                              </el-tab-pane>
                            </el-tabs>
                          </y-dialog>
                          <el-col style="width: 500px">
                            <categoryDemo lCategory="裤子" sCategory="牛仔裤" xs-category="牛仔长裤" xs-code="66"></categoryDemo>
                          </el-col>
                          <el-col :span="4">
                            <el-button type="primary" plain>新增大类</el-button>
                            <el-button type="primary" plain>新增小类</el-button>
                            <el-button type="primary" plain>新增品类</el-button>
                          </el-col>
                        </el-row>
                      </el-form-item>
                      <el-alert v-if="showTips2" type="info">
                        小贴士:<br/>
                        如打包纸袋、纸箱等，性别为“其他”
                      </el-alert>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">选择系列</span>
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

              <el-collapse-item name="3">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">上市品牌</span>
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
                      <span class="y-p-r-10">生产年季</span>
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

          <el-collapse-item title="颜色图案" name="3">
            <el-collapse v-model="activeName2_3" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title"><span class="y-p-r-10">选择颜色</span>
                    </div>
                    <div>
                      <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                      <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明
                      </el-button>
                    </div>
                  </div>
                  <div>已选择信息3 已选择信息2 已选择信息1</div>
                </div>

                <div class="coll-item-body">
                  <el-row :gutter="20">
                    <el-col :span="14">
                      <el-row :gutter="10">
                        <el-col :span="4">
                          <el-button type="primary" @click="showColorCategory=true">选择颜色</el-button>
                        </el-col>
                        <y-dialog class="category-form" v-model="showColorCategory" title="选择颜色">
                          <el-tabs tab-position="left" style="height: 100%">
                            <el-tab-pane>
                              <span slot="label">
                                <el-row :gutter="10">
                                  <el-col :span="12">
                                  <div style="width: 20px;height: 40px;background: red;border: 2px solid black"></div>
                                  </el-col>
                                  <el-col :span="12">
                                  <p v-for="(o1,i1) in ColorCategoryOptions" :key="i1" style="background: red;color: white">{{o1.label}}</p>
                                  </el-col>
                                </el-row>
                              </span>
                              <div v-for="(o1,i1) in ColorCategoryOptions" :key="i1">
                                <y-radio v-model="goodForm.category" :options="o1.children"></y-radio>
                              </div>
                            </el-tab-pane>
                          </el-tabs>
                        </y-dialog>
                        <el-col :span="12">
                          <el-form-item label="主色色系" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132"></y-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="8">
                          <el-form-item label="色系编码" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132" disabled></y-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="主色名称" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132" filterable></y-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="8">
                          <el-form-item label="主色编码" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132"></y-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="2">
                          <el-button type="primary" plain>新增颜色名</el-button>
                        </el-col>
                        <el-col :span="8">
                          <el-form-item label="辅色色系" prop="value15" label-width="100px">
                            <y-select v-model="goodForm.value132"></y-select>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-alert>小贴士：<br/>主色：货品的主要颜色。辅色：货品的次要颜色</el-alert>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="颜色说头" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title"><span class="y-p-r-10">商品图案</span></div>
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
                      <el-form-item label="商品图案" prop="value15" label-width="100px">
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
                      <el-form-item label="图案说头" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="款式细节" name="4">
            <el-collapse v-model="activeName2_4" accordion>
            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="适穿客群" name="5">
            <el-collapse v-model="activeName2_5" accordion>

              <el-collapse-item name="1">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title"><span class="y-p-r-10">选择性别</span></div>
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
                      <el-form-item label="选择性别: " prop="field123" label-width="100px">
                        <y-radio v-model="goodForm.brand" :options="SEX" class="y-p-r-10"></y-radio>
                      </el-form-item>
                      <el-alert v-if="showTips2" type="info">
                        小贴士:<br/>
                        如打包纸袋、纸箱等，性别为“其他”
                      </el-alert>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="性别说头" prop="value15" label-width="100px">
                        <y-input v-model="goodForm.value132" placeholder="请输入（举例：中性款但偏男性 ）" type="textarea" rows="1"></y-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-collapse-item>

              <el-collapse-item name="2">

                <div slot="title" class="y-flex y-align-between title-slot">
                  <div class=" y-flex ">
                    <div class="coll-item-title">
                      <span class="y-p-r-10">适穿年龄</span>
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

          <el-collapse-item title="销售属性" name="6">
            <el-collapse v-model="activeName2_6" accordion>
            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="穿法关联" name="7">
            <el-collapse v-model="activeName2_7" accordion>
            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="面料属性" name="8">
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

          <el-collapse-item title="功能属性" name="9">
            <el-collapse v-model="activeName2_9" accordion>
            </el-collapse>
          </el-collapse-item>

          <el-collapse-item title="售后服务" name="10">
            <el-collapse v-model="activeName2_10" accordion>
            </el-collapse>
          </el-collapse-item>

        </el-collapse>

        <el-collapse v-model="activeName3" accordion>

            <el-collapse-item name="8">

              <div slot="title" class="y-flex y-align-between title-slot">
                <div class=" y-flex ">
                  <div class="coll-item-title" style="width: 250px">
                    <span class="y-p-r-10">材质纤维特性</span>
                  </div>
                  <!--                <div>-->
                  <!--                  <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>-->
                  <!--                  <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明-->
                  <!--                  </el-button>-->
                  <!--                </div>-->
                </div>
                <div>已选择信息3 已选择信息2 已选择信息1</div>
              </div>

              <div class="coll-item-body">
                <el-card class="box-card">
                  <div>
                    <h4>材质1-棉花</h4>
                    <el-form-item label="基本功能特点:">
                      <y-tag-input @del="test" @cfm="test" :options="[{id: 1,value: 1,label: 'tag1'}]"></y-tag-input>
                    </el-form-item>
                    <el-form-item label="基本功能缺点:">
                      <y-tag-input @del="test" @cfm="test"></y-tag-input>
                    </el-form-item>
                  </div>
                  <!--                TODO  添加条件判断, 有材质2才显示-->
                  <div>
                    <el-divider></el-divider>
                    <h4>材质2-化纤</h4>
                    <el-form-item label="常规优点:">
                      <y-tag-input @del="test" @cfm="test" :options="[{id: 1,value: 1,label: 'tag1111111111111'}]"></y-tag-input>
                    </el-form-item>
                    <el-form-item label="常规缺点:">
                      <y-tag-input @del="test" @cfm="test"></y-tag-input>
                    </el-form-item>
                  </div>
                </el-card>
                <el-row class="y-m-t-10">
                  <el-form-item label="本产品特殊功能:" label-width="150px">
                    <y-tag-input @del="test" @cfm="test"></y-tag-input>
                  </el-form-item>
                </el-row>
              </div>

            </el-collapse-item>

            <el-collapse-item name="9">

              <div slot="title" class="y-flex y-align-between title-slot">
                <div class=" y-flex ">
                  <div class="coll-item-title"><span class="y-p-r-10">纺织特征</span>
                  </div>
                  <!--                <div>-->
                  <!--                  <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>-->
                  <!--                  <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" size="mini" plain>操作说明-->
                  <!--                  </el-button>-->
                  <!--                </div>-->
                </div>
                <div>已选择信息3 已选择信息2 已选择信息1</div>
              </div>

              <div class="coll-item-body">
                <el-row :gutter="20">
                  <el-col :span="14">
                    <el-form-item label="商品图案" prop="value15" label-width="100px">
                      <y-select v-model="goodForm.value132" class="y-p-r-10"></y-select>
                      <el-button type="primary" plain>新增图案名</el-button>
                    </el-form-item>
                    <!--                  <el-alert>小贴士：<br/>图案名称是区别货品的主要特征之一。进入商品名称字段。无图案+无辅色=净色</el-alert>-->
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="面料工艺说头" prop="value15" label-width="100px">
                      <y-input v-model="goodForm.value132" type="textarea" rows="2"></y-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>

            </el-collapse-item>

          </el-collapse>

      </y-form>

    </el-card>
  </div>
</template>

<script>
import YUploadImageSingle from '@/components/y-upload-image-single'
import YDialog from '@/components/y-dialog'
import addFormBrand from '@/views/goodbrand/addForm'
import addFormPattern from '@/views/goodpattern/addForm'
import { SEX } from '@/utils/const'
import YTagInput from '@/components/y-tag-input'
import categoryDemo from '@/views/category/component/demo'

export default {
  components: {
    YUploadImageSingle,
    YDialog,
    YTagInput,
    addFormBrand,
    addFormPattern,
    categoryDemo
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
      showPattern1: false
    }
  },
  created() {
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
