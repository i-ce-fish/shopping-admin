<template>
  <div class="tinymce-box">
    <editor
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick">
    </editor>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce" // tinymce默认hidden，不引入不显示
import Editor from "@tinymce/tinymce-vue"
import "tinymce/themes/silver"
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import "tinymce/plugins/image"// 插入上传图片插件
import "tinymce/plugins/media"// 插入视频插件
import "tinymce/plugins/table"// 插入表格插件
import "tinymce/plugins/lists"// 列表插件
import "tinymce/plugins/wordcount"
import "tinymce/icons/default"// 解决图标显示为!notFound
import "tinymce/plugins/lineheight/plugin.min"// 行高插件
// 字数统计插件
export default {
  components: {
    Editor
  },
  name: "Tinymce",
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "lists image axupimgs media table wordcount lineheight "
    },
    toolbar: {
      type: [String, Array],
      default: "  undo redo |  formatselect |  fontselect |fontsizeselect| bold italic forecolor backcolor |lineheight alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat"
    }
  },
  data() {
    return {
      init: {
        selector: "#tinydemo",
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin: "oxide",
        skin_url: "/tinymce/skins/ui/oxide",
        // skin_url: 'tinymce/skins/ui/oxide-dark',//暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 字体
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        font_formats: "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",

        // 行高数组
        lineheight_val: "1 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2",
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, succFun, failFun) => {
          // const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          // success(img)

          const file = blobInfo.blob()// 转化为易于理解的file对象
          const xhr = new XMLHttpRequest()
          xhr.withCredentials = false
          xhr.open("POST", "http://shop.cdb99.com:8088/api/upload")
          xhr.onload = function() {
            if (xhr.status !== 200) {
              failFun(`HTTP Error: ${xhr.status}`)
              return
            }
            const json = JSON.parse(xhr.responseText)
            // 返回格式校验
            // if (!json || typeof json.location != 'string') {
            //   failFun('Invalid JSON: ' + xhr.responseText);
            //   return;
            // }
            // todo 设置图片访问路径
            succFun(`http://shop.cdb99.com${json.data}`)
          }
          const formData = new FormData()
          formData.append("file", file, file.name)// 此处与源文档不一样
          xhr.send(formData)
        },
        // 想要哪一个图标提供本地文件选择功能，参数可为media(媒体)、image(图片)、file(文件),多个参数用空格分隔
        file_picker_types: " media",
        // be used to add custom file picker to those dialogs that have it.
        file_picker_callback(cb, value, meta) {
          // 当点击meidia图标上传时,判断meta.filetype == 'media'有必要，因为file_picker_callback是media(媒体)、image(图片)、file(文件)的共同入口
          if (meta.filetype === "media") {
            // 创建一个隐藏的type=file的文件选择input
            const input = document.createElement("input")
            input.setAttribute("type", "file")
            input.onchange = function() {
              const file = this.files[0]// 只选取第一个文件。如果要选取全部，后面注意做修改
              const xhr = new XMLHttpRequest()
              xhr.open("POST", "http://shop.cdb99.com:8088/api/upload")
              // xhr.withCredentials = self.credentials;
              xhr.upload.onprogress = function(e) {
                // 进度(e.loaded / e.total * 100)
                console.log((e.loaded / e.total) * 100)
              }
              xhr.onerror = function() {
                // 根据自己的需要添加代码
                console.log(xhr.status)
              }
              xhr.onload = function() {
                if (xhr.status < 200 || xhr.status >= 300) {
                  console.log(`HTTP 错误: ${xhr.status}`)
                  return
                }
                console.log(xhr)
                const json = JSON.parse(xhr.responseText)

                // todo 校验
                // 假设接口返回JSON数据为{status: 0, msg: "上传成功", data: {location: "/localImgs/1546434503854.mp4"}}
                // if (json.status == 0) {
                //   console.log(json)
                //   //接口返回的文件保存地址
                //   let mediaLocation = json.data;
                //   //cb()回调函数，将mediaLocation显示在弹框输入框中
                // } else {
                //   console.log(json.msg);
                //   return;
                // }
                // todo 跨域
                cb(`todo url ${json.data}`, { title: file.name })
              }
              const formData = new FormData()
              // 假设接口接收参数为file,值为选中的文件
              formData.append("file", file)
              // 正式使用将下面被注释的内容恢复
              xhr.send(formData)
            }
            // 触发点击
            input.click()
          }
        }

      },
      myValue: this.value
    }
  },
  mounted() {
    tinymce.init({})
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick(e) {
      this.$emit("onClick", e, tinymce)
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = ""
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue
    },
    myValue(newValue) {
      this.$emit("input", newValue)
    }
  }
}

</script>
<style scoped>

</style>
