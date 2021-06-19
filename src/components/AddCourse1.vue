<template>
  <el-steps :active="1" finish-status="success" simple>
    <el-step title="提示"></el-step>
    <el-step title="编辑课程"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
  <el-col :sm="12" :lg="6" class="co">
    <el-result
      icon="warning"
      title="注意"
      subTitle="课程默认1-9周，一周5天，一天5节"
    >
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
      router.push("/AddCourse");
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
  margin-top: 6%;
}
</style>
