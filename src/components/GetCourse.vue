<template>
  <el-row class="row" v-loading.lock="fullscreenLoading" style="margin-top: 6%">
    <el-col
      :span="6"
      v-for="(o, index) in pages"
      :key="index"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage1.big-bit.com%2F2016%2F0603%2F20160603023915659.jpg&refer=http%3A%2F%2Fimage1.big-bit.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626244103&t=0575feb94825cea501e7b0398abffb9c"
          class="image"
        />
        <div style="padding: 8px 8px 0px 8px">
          <el-tag>课程名称：{{ o.name }}</el-tag>
          <el-button
            type="text"
            class="button"
            style="float: right"
            @click="
              openFullScreen2();
              asd2(o);
            "
            >配置</el-button
          >
        </div>
        <div style="padding: 8px">
          <div>
            <el-tag type="warning" style="margin-top: 2px"
              >类型：{{ o.describe }}</el-tag
            >
            <el-button
              type="text"
              class="button"
              style="float: right"
              @click="asd1(o)"
              >详情</el-button
            >
          </div>
        </div>
      </el-card>
    </el-col>
    <el-dialog
      title="详细信息"
      v-model="dialogVisible1"
      width="50%"
      :show-close="fina"
    >
      <el-descriptions direction="vertical" :column="4" border>
        <el-descriptions-item label="课程名称">{{
          sing1.name
        }}</el-descriptions-item>
        <el-descriptions-item label="学生数量">{{
          sing1.stunum
        }}</el-descriptions-item>
        <el-descriptions-item label="总学时" :span="2">{{
          sing1.totaltime
        }}</el-descriptions-item>
        <el-descriptions-item label="课程种类">
          <el-tag size="small">{{ sing1.type }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="课程描述">{{
          sing1.describe
        }}</el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible1 = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
    <el-dialog
      title="实验室选择"
      v-model="dialogVisible2"
      width="50%"
      :show-close="fina"
    >
      <accordlab
        :maded="child"
        v-loading="fullscreenLoading1"
        :key="child"
      ></accordlab>
      <!--组件复用，绑定key，否则子组件不会重新接收新值-->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible2 = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </el-row>
  <el-pagination
    small
    layout="prev, pager, next"
    :total="allnum"
    background
    class="page"
    @current-change="current_change"
    @click="openFullScreen1"
  >
  </el-pagination>
</template>

<script lang="ts">
import { State } from "@/store";
import { TRANSPLANT_COU } from "@/store/VuexTypes";
import { Course } from "@/views/Datasource/datasource";
import { ElMessageBox } from "element-plus";
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";
import { Store, useStore } from "vuex";
import accordlab from "./AccordLab.vue";

export default defineComponent({
  components: { accordlab },
  setup() {
    const page: Course[] = [];
    const curpage = ref(1);
    const pages = ref(page);
    const store: Store<State> = useStore();
    const added = computed(() => store.state.cous);
    const allnum = (added.value.length * 10) / 3;
    pages.value = added.value.slice(0, 3);
    const current_change = (current: number) => {
      curpage.value = current;
    };
    watch(curpage, () => {
      pages.value = added.value.slice(
        (curpage.value - 1) * 3,
        (curpage.value - 1) * 3 + 3
      );
    });
    const fullscreenLoading = ref(false);
    const fullscreenLoading1 = ref(false);
    const openFullScreen1 = () => {
      fullscreenLoading.value = true;
      fullscreenLoading1.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 1000);
    };
    const openFullScreen2 = () => {
      fullscreenLoading1.value = true;
      setTimeout(() => {
        fullscreenLoading1.value = false;
      }, 1000);
    };
    const state = reactive({
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
    });
    const dialogVisible1 = ref(false);
    const dialogVisible2 = ref(false);
    const fina = false;
    const handleClose = (done: () => void) => {
      ElMessageBox.confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch
        });
    };
    const sing1 = ref<Course>({});
    const sing2 = ref<Course>({});
    const asd1 = (o: Course) => {
      dialogVisible1.value = true;
      sing1.value = o;
    };
    const child = ref(30);
    const asd2 = (o: Course) => {
      store.commit(TRANSPLANT_COU, o);
      dialogVisible2.value = true;
      sing2.value = o;
      child.value = o.stunum as number;
      console.log(child.value);
    };
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    return {
      added,
      allnum,
      pages,
      current_change,
      fullscreenLoading,
      openFullScreen1,
      openFullScreen2,
      ...toRefs(state),
      dialogVisible1,
      dialogVisible2,
      handleClose,
      fina,
      asd1,
      asd2,
      sing1,
      sing2,
      child,
      loading,
      fullscreenLoading1,
    };
  },
});
</script>

<style scoped>
.page {
  text-align: center;
  margin-top: 60px;
}
.row {
  width: 100%;
  flex-wrap: nowrap;
}
</style>
