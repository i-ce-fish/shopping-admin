<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <div style="color: white">
      <!--      {{hasOneShowingChild(item.children, item) }}-->
      <!--      {{ !onlyOneChild.children}}-->
      <!--      {{ onlyOneChild.noShowingChildren}}-->
      <!--      {{!item.alwaysShow}}-->
      <!--      {{hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow
      }}-->
    </div>
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
    >
      <div v-if="onlyOneChild.meta" class="href" v-bind="linkProps(resolvePath(onlyOneChild.path))">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title"/>

        </el-menu-item>
      </div>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title"/>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './Item.vue'

export default {
  name: 'SidebarItem',
  components: {
    Item
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        }
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item
        return true
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: '',
          noShowingChildren: true
        }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (this.isExternal(routePath)) {
        return routePath
      }
      if (this.isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },

    /**
     * 动态组件,绑定属性  v-bind={is: }= <div is= ></div>
     * @param url
     * @returns {{is: string, to: *}|{rel: string, is: string, href: *, target: string}}
     */
    linkProps(url) {
      if (this.isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    }

  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
//<!--  清除点击效果-->
.menu-wrapper {
  .href:hover {

  }
}
</style>
