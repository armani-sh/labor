<template>
  <el-col :sm="12" :lg="6" class="su">
    <el-result icon="success" title="选课成功" subTitle="点击确认返回主页">
      <template #extra>
        <el-button type="primary" size="medium" @click="tohost">确认</el-button>
      </template>
    </el-result>
  </el-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";

export default defineComponent({
  setup() {
    const tohost = () => {
      router.push("/GetCourse");
    };
    return {
      tohost,
    };
  },
});
</script>

<style scoped>
.su {
  margin-left: 35%;
}
</style>
