<template>
  <el-tag type="warning" class="hed"
    >正在为 " {{ added.name }} " 配置实验室 &nbsp; | &nbsp; 实验室：{{
      di.name
    }}
    &nbsp; | &nbsp; 当前周：第 {{ selweeked }} 周 </el-tag
  ><el-button
    @click="drawer = true"
    type="primary"
    icon="el-icon-edit"
    circle
    style="margin-left: 30px"
  >
  </el-button>
  <el-transfer
    :titles="['可选课时', '已选课时']"
    v-model="data2"
    :data="data1"
  />
  <el-drawer
    title="周次选择"
    v-model="drawer"
    :direction="direction"
    destroy-on-close
    size="23%"
  >
    <template v-for="(o, index) in weeks" :key="index">
      <el-button
        type="primary"
        plain
        @click="selweek(o)"
        class="wek"
        autofocus:true
        >第 {{ o }} 周</el-button
      >
    </template>
  </el-drawer>
  <el-button
    type="primary"
    plain
    class="hed"
    style="margin-top: 2%"
    @click="toSucess()"
    :disabled="selweeked == 0"
    >提交</el-button
  >
</template>

<script lang="ts">
import { State } from "@/store";
import { Course } from "@/views/Datasource/datasource";
import { computed, defineComponent, ref, watch } from "vue";
import { Store, useStore } from "vuex";
import router from "@/router/index";
import { UPDATE_DIS, UPDATE_SELLECT } from "@/store/VuexTypes";

export interface Data {
  key?: number;
  label?: string;
  disabled?: boolean;
}

export default defineComponent({
  setup() {
    const drawer = ref(false);
    const direction = ref("rtl");
    const weeks = ref(9);
    const selweeked = ref(0);
    const store: Store<State> = useStore();
    const added = computed(() => store.state.configc);
    console.log(added);
    const di = computed(() => store.state.configl);
    const ass: Data[] = [];
    const data1 = ref(ass);
    watch(selweeked, () => {
      data1.value.length = 0;
      for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
          let u = false;
          let ky = (selweeked.value - 1) * 25 + (i - 1) * 5 + j;
          for (let t = 0; t < data3.value.length; t++) {
            for (let k = 0; k < data2.value.length; k++) {
              if (data3.value[t] == data2.value[k]) {
                data3.value.splice(t, 1);
              }
            }
          } //移除本课程的被禁止项目
          for (let t = 0; t < data3.value.length; t++) {
            if (data3.value[t] == ky) u = true;
          }
          data1.value.push({
            key: ky,
            label: `${ky}-星期${i} - 第 ${j} 节`,
            disabled: u,
          });
        }
      }
    });
    const selnum = added.value.sellect as number[];
    const front = di.value.key as number;
    for (let i = 0; i < selnum.length; i++) {
      if (selnum[i] - front * 10000 > 0) {
        selnum[i] = selnum[i] - front * 10000;
      } else break;
    }
    const data2 = ref(selnum);
    const dis = di.value.dis as number[];
    const data3 = ref(dis);
    const selweek = (o: number) => {
      selweeked.value = o;
    };
    const toSucess = () => {
      const tt = data3.value.concat(data2.value);
      console.log(tt);
      store.commit(UPDATE_DIS, tt);
      for (let i = 0; i < data2.value.length; i++) {
        data2.value[i] = data2.value[i] + front * 10000;
      }
      store.commit(UPDATE_SELLECT, data2);
      router.push("/toSucess");
    };
    return {
      added,
      di,
      drawer,
      direction,
      weeks,
      data1,
      data2,
      data3,
      selweek,
      selweeked,
      toSucess,
    };
  },
});
</script>

<style scoped>
.el-transfer {
  padding-left: 8%;
}
.wek {
  margin: 10px;
}
.hed {
  vertical-align: middle;
  width: 56%;
  text-align: center;
  margin-left: 8%;
  padding: 30px;
  margin-bottom: 2%;
  line-height: 0;
}
</style>
