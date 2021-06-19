<template>
  <el-steps :active="3" finish-status="success" simple style="margin-top: 20px">
    <el-step title="提示"></el-step>
    <el-step title="编辑信息"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
  <el-col :sm="12" :lg="6" class="co">
    <el-result icon="success" title="创建成功" subTitle="点击返回主页">
      <template #extra>
        <el-button type="primary" size="medium" @click="togetlab"
          >确认</el-button
        >
      </template>
    </el-result>
  </el-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";

export default defineComponent({
  setup() {
    const togetlab = () => {
      router.push("/GetLab");
    };
    return {
      togetlab,
    };
  },
});
</script>

<style scoped>
.co {
  margin-left: 40%;
  margin-top: 3%;
}
</style>
