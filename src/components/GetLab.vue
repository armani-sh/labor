<template>
  <el-row class="row" v-loading.lock="fullscreenLoading">
    <el-col
      :span="6"
      v-for="(o, index) in pages"
      :key="index"
      :offset="index > 0 ? 2 : 0"
      style="margin-top: 8%"
    >
      <el-card :body-style="{ padding: '0px' }">
        <el-progress
          type="dashboard"
          :percentage="((o.take / 225) * 100).toFixed(2)"
          class="pen"
          :stroke-width="10"
        >
          <template #default="{ percentage }">
            <span class="percentage-label">已占用</span>
            <span class="percentage-value">{{ percentage }}%</span>
          </template>
        </el-progress>
        <div style="padding: 14px; border: 1px solid #ebeef5">
          <el-tag>实验室：{{ o.name }}</el-tag>
          <div class="bottom">
            <el-tag type="warning" style="margin-top: 2px"
              >配置：{{ o.configuration }}</el-tag
            >
            <el-button
              type="text"
              class="button"
              style="float: right"
              @click="asd(o)"
              >详情</el-button
            >
          </div>
        </div>
      </el-card>
    </el-col>
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="50%"
      :before-close="handleClose"
      :show-close="fina"
    >
      <el-descriptions direction="vertical" :column="4" border>
        <el-descriptions-item label="名称">{{
          sing.name
        }}</el-descriptions-item>
        <el-descriptions-item label="机器数量">{{
          sing.macnum
        }}</el-descriptions-item>
        <el-descriptions-item label="开放性" :span="2">{{
          sing.opened
        }}</el-descriptions-item>
        <el-descriptions-item label="实验性质">
          <el-tag size="small">Java</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="机器配置">{{
          sing.configuration
        }}</el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
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
import { Form } from "@/views/Datasource/datasource";
import { ElMessageBox } from "element-plus";
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";
import { Store, useStore } from "vuex";

export default defineComponent({
  setup() {
    const page: Form[] = [];
    const curpage = ref(1);
    const pages = ref(page);
    const store: Store<State> = useStore();
    const added = computed(() => store.state.labs);
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
    const openFullScreen1 = () => {
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 1000);
    };
    const state = reactive({
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
    });
    const dialogVisible = ref(false);
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
    const single: Form = {};
    const sing = ref(single);
    const asd = (o: Form) => {
      dialogVisible.value = true;
      sing.value = o;
    };
    return {
      added,
      allnum,
      pages,
      current_change,
      fullscreenLoading,
      openFullScreen1,
      ...toRefs(state),
      dialogVisible,
      handleClose,
      fina,
      asd,
      sing,
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
.pen {
  margin-left: 26%;
  padding: 40px 10px;
}
</style>
