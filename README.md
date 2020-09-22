# cms

## 安装依赖
npm install 
ps: 还需要单独下载从<a href='http://tinymce.ax-z.cn/more-plugins/lineheight.php'>lineheight</a>并解压后放入到node_modules/tinymce/plugins中
## 启动项目
npm run serve

## 新项目构建流程
npm install -g @vue/cli

vue create hello-world

npm i element-ui -S
```$xslt
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);
```
npm install --save normalize.css
```$xslt
import "normalize.css"
```



###文件目录结构
```$xslt
dist    打包后的文件
src 
    api             统一封装请求url,每个模块对应一个文件
    components      组件封装                
        Breadcrumb         面包屑
        Navbar             顶部导航
        Sidebar            侧边栏
        tinymce            富文本编辑器
        以及一系列对element表单组件的封装, 属性和element文档的基本一致(可能有遗漏)                     
    layout          页面布局
    directive       自定义指令
    router          路由
        modules             各个模块的路由
    store           vuex全局状态管理
        modules             各个模块的vuex
            msgSockest          用于消息通知的websocket
            user                用户登录等相关
        getters             get  state的封装
        index         vuex主文件
    style           全局样式文件
        index         全局样式文件, 常用的样式都会进行封装
        variables     全局css变量文件
    utils           工具类
        request            请求封装
        index               可复用函数
        options             常量
        validate            常用表单验证
    views            页面, 各个模块对应一个文件夹
    App.vue     
    main.js         入口文件
    permission      路由导航守卫
.eslintrc.js    eslint配置
package.json    项目依赖
vue.config.js   webpack配置

``` 

###涉及的技术栈

<a href="https://cn.vuejs.org/v2/guide/">Vue</a>

<a href="https://element.eleme.cn/#/zh-CN/component/installation">ElementUI</a>

<a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/#%E5%8A%9F%E8%83%BD">vue-element-admin</a>

<a href="https://es6.ruanyifeng.com/">ES6</a>

<a href="https://router.vuejs.org/zh/">Vue Router</a>

<a href="https://cli.vuejs.org/zh/guide/">Vue CLI</a>

<a href="https://vuex.vuejs.org/zh/">Vuex</a>

<a href="https://eslint.bootcss.com/docs/rules/">Eslint</a>

<a href="http://tinymce.ax-z.cn/">Tinymce</a>

<a href="https://www.lodashjs.com/">Lodash</a>

<a href="http://css.cuishifeng.cn/">CSS</a>

<a href="https://youzan.github.io/vant-weapp/#/field">Vant</a>
部分模拟小程序展示效果的页面使用vantUI(移动端), 而小程序商城项目也是使用vantUI(小程序端) 



### 几个文件DEMO

router写法
```javascript
 {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    children: [{
      path: "home",
      name: "home",
      component: () => import("@/views/Home.vue")
    }]
  }
```
表单校验写法
```javascript
      rules: {
        email: [
          { required: true, message: "请输入正确的邮箱", trigger: "blur" },
          // {
          // min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur',
          // },
          {
            required: true,
            pattern: /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/,
            message: "请输入正确的邮箱",
            trigger: "blur"
          }
        ]
      }
```

Vuex写法
```javascript

 computed: {
    ...mapGetters([
      "token"
    ])
  }


  this.$store.dispatch("user/setToken", res.data.token)
  this.$store.dispatch("user/resetToken")
```

