<template>
  <el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
    <el-step title="提示"></el-step>
    <el-step title="编辑信息"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
  <el-form label-width="90px" style="margin-left: 25%; margin-top: 3%">
    <el-form-item label="实验编号">
      <el-input v-model="form.name" style="width: 60%"></el-input>
    </el-form-item>
    <el-form-item label="机器数量">
      <el-input-number
        v-model="form.macnum"
        :step="1"
        placeholder="20"
        step-strictly
      ></el-input-number>
    </el-form-item>
    <el-form-item label="开放时间">
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="开放教室">
      <el-switch v-model="form.opened"></el-switch>
    </el-form-item>
    <el-form-item label="实验性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="C / C++" name="type"></el-checkbox>
        <el-checkbox label="Java" name="type"></el-checkbox>
        <el-checkbox label="Python" name="type"></el-checkbox>
        <el-checkbox label="WEB" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="单双周">
      <el-radio-group v-model="form.opened">
        <el-radio label="单周"></el-radio>
        <el-radio label="双周"></el-radio>
        <el-radio label="单/双周"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="机器配置" style="width: 65%">
      <el-input type="textarea" v-model="form.configuration"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
        :disabled="form.name == null"
        :loading="en"
        >立即创建</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { State } from "@/store";
import { UPDATE_LABKEY, UPDATE_LABLIST } from "@/store/VuexTypes";
import { Form } from "@/views/Datasource/datasource";
import { defineComponent, ref } from "vue";
import { Store, useStore } from "vuex";
import router from "@/router/index";

export default defineComponent({
  setup() {
    const en = ref(false);
    const form = ref<Form>({ type: [] });
    const store: Store<State> = useStore();
    const go = () => {
      en.value = false;
      router.push("/AddLab3");
    };
    const onSubmit = () => {
      let key = store.state.labkey + 1;
      form.value.key = key;
      store.commit(UPDATE_LABKEY, key);
      form.value.take = 0;
      form.value.dis = [];
      form.value.opened = true;
      store.commit(UPDATE_LABLIST, form.value);
      en.value = true;
      setTimeout(go, 2000);
    };
    const value1 = ref(0);
    return {
      form,
      onSubmit,
      value1,
      en,
    };
  },
});
</script>
