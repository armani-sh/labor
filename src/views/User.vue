<template>
  <div class="headerWapper">
    <header class="header">
      <div class="container">
        <el-tag class="phot">实验室预约系统</el-tag>
        <ul class="nav">
          <li>
            <el-popover
              placement="bottom"
              :width="160"
              v-model:visible="visible"
            >
              <p>确定返回登录页面吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="
                    tologin();
                    visible = false;
                  "
                  >确定</el-button
                >
              </div>
              <template #reference>
                <botton @click="visible = true"
                  ><el-avatar
                    icon="el-icon-user-solid"
                    style="background-color: red"
                  ></el-avatar
                ></botton>
              </template>
            </el-popover>
          </li>
          <li>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </li>
          <li>
            <el-popover
              placement="bottom"
              :width="160"
              v-model:visible="visiblea"
            >
              <p>跳转至armani-sh的GitHub</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visiblea = false"
                  >取消</el-button
                >
                <el-button type="primary" size="mini"
                  ><a
                    href="https://github.com/armani-sh/labor.git"
                    target="view_window"
                    >确定</a
                  ></el-button
                >
              </div>
              <template #reference>
                <botton @click="visiblea = true"
                  ><el-avatar>Git</el-avatar></botton
                >
              </template>
            </el-popover>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "@/router/index";

export default defineComponent({
  setup() {
    const visible = ref(false);
    const visiblea = ref(false);
    const tologin = () => {
      router.push("/login");
      sessionStorage.removeItem("user");
    };
    return {
      visible,
      tologin,
      visiblea,
    };
  },
});
</script>

<style scoped>
.headerWapper {
  top: 0px;
  width: 100%;
  z-index: 2000;
  left: 0;
  height: 80px;
}
.header {
  display: block;
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
}
.container {
  padding: 0 40px;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
}
.phot {
  width: 150px;
  height: 60px;
  text-align: center;
  font-size: medium;
  line-height: 58px;
}
.nav {
  float: right;
  height: 100%;
  line-height: 80px;
  background: transparent;
  padding: 0;
  margin: 0;
}
li {
  float: left;
  margin: 10px;
}
a {
  color: inherit;
  text-decoration: none;
  display: block;
  border: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
