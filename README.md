# cms

##首次运行
npm install 
npm run serve


如果出现:npm install --save tinymce/plugins/lineheight

下载插件：[lineheight.zip](http://tinymce.ax-z.cn/more-plugins/lineheight.php)
放到/node_modules/tinymce/plugins下

## 构建流程
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


router写法
```$xslt
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
```$xslt
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
```$xslt
    user.js       state,mutations,actions
    getters.js
    index.js
```
```$xslt

 computed: {
    ...mapGetters([
      "token"
    ])
  }


  this.$store.dispatch("user/setToken", res.data.token)
  this.$store.dispatch("user/resetToken")
```



文件目录结构
```$xslt
dist    打包后的文件
src 
    api     封装请求url
    components              组件封装
        Breadcrumb      面包屑
        Navbar      顶部导航
        Sidebar     侧边栏            
    layout      页面布局
    router      路由
    store       vuex
    utils       工具类
        request     请求封装
    views       页面
    App.vue     
    main.js
.eslintrc.js    eslint设置
package.json    
vue.config.js  

``` 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
