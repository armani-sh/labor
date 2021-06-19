<template>
  <div class="div-inline1">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>课程管理</span>
        </template>
        <el-menu-item-group>
          <template #title>已有课程</template>
          <li style="list-style: none">
            <router-link to="/GetCourse"
              ><el-menu-item index="1-1">详情</el-menu-item>
            </router-link>
          </li>
        </el-menu-item-group>
        <el-menu-item-group title="编辑">
          <li style="list-style: none">
            <router-link to="/AddCourse1"
              ><el-menu-item index="1-3">添加课程</el-menu-item>
            </router-link>
          </li>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>未配置</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>未配置</template>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="div-inline2"><router-view /></div>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.div-inline1 {
  display: inline-block;
  vertical-align: top;
  margin: 30px;
  width: 15%;
}
.div-inline2 {
  display: inline-block;
  vertical-align: top;
  margin: 30px;
  width: 75%;
}
.router-link-active {
  text-decoration: none;
}
a {
  color: inherit;
  text-decoration: none;
  border: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
