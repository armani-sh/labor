<template>
  <div>
    <el-tag type="warning" class="sp">已筛选符合条件的实验室：</el-tag><br />
    <template v-for="(o, index) in pages" :key="index">
      <el-button
        type="primary"
        round
        @click="toLab(o)"
        style="margin: 12px 45px"
        >实验室：{{ o.name }} -- 机器数：{{ o.macnum }}台</el-button
      >
    </template>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { Form } from "@/views/Datasource/datasource";
import { computed, defineComponent, ref } from "vue";
import { Store, useStore } from "vuex";
import router from "@/router/index";
import { TRANSPLANT_LAB } from "@/store/VuexTypes";

export default defineComponent({
  props: {
    maded: Number,
  },
  setup(props) {
    const page: Form[] = [];
    const pages = ref(page);
    const ts = computed(() => {
      return props.maded;
    });
    const u = ts.value as number;
    const store: Store<State> = useStore();
    const added = computed(() => store.state.labs);
    for (let i = 0; i < added.value.length; i++) {
      if ((added.value[i].macnum as number) >= u) {
        pages.value.push(added.value[i]);
      }
    }
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1000);
    const toLab = (o: Form) => {
      store.commit(TRANSPLANT_LAB, o);
      console.log(o);
      router.push("/SelectCourse");
    };
    return {
      pages,
      loading,
      u,
      toLab,
    };
  },
});
</script>

<style scoped>
.sp {
  display: block;
  margin-bottom: 15px;
  text-align: center;
}
</style>
