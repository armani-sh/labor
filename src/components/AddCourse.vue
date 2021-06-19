<template>
  <el-steps :active="2" finish-status="success" simple>
    <el-step title="提示"></el-step>
    <el-step title="编辑信息"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
  <el-form label-width="90px" style="margin-left: 25%; margin-top: 3%">
    <el-form-item label="课程名称">
      <el-input v-model="cous.name" style="width: 50%"></el-input>
    </el-form-item>
    <el-form-item label="学生数量">
      <el-input-number
        v-model="cous.stunum"
        :step="1"
        placeholder="20"
        step-strictly
      ></el-input-number>
    </el-form-item>
    <el-form-item label="课程学时">
      <el-input-number
        v-model="cous.totaltime"
        :step="1"
        placeholder="20"
        step-strictly
      ></el-input-number>
    </el-form-item>
    <el-form-item label="开课时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="开始日期"
          v-model="cous.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-date-picker
          placeholder="结束日期"
          v-model="cous.date2"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="单双周">
      <el-radio-group v-model="cous.type">
        <el-radio label="考试课"></el-radio>
        <el-radio label="考查课"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="课程说明" style="width: 55%">
      <el-input type="textarea" v-model="cous.describe"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
        :disabled="cous.name == null"
        :loading="en"
        >立即创建</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { UPDATE_COULIST, UPDATE_COUSKEY } from "@/store/VuexTypes";
import { Course } from "@/views/Datasource/datasource";
import { defineComponent, ref } from "vue";
import { Store, useStore } from "vuex";
import router from "@/router/index";

export default defineComponent({
  setup() {
    const en = ref(false);
    const cous = ref<Course>({});
    const store: Store<State> = useStore();
    const go = () => {
      en.value = false;
      router.push("/AddCourse3");
    };
    const onSubmit = () => {
      let key = store.state.labkey + 1;
      cous.value.key = key;
      store.commit(UPDATE_COUSKEY, key);
      cous.value.sellect = [];
      store.commit(UPDATE_COULIST, cous.value);
      en.value = true;
      setTimeout(go, 2000);
    };
    return {
      cous,
      onSubmit,
      go,
      en,
    };
  },
});
</script>
