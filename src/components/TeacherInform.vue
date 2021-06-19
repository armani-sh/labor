<template>
  <el-table :data="tableData" border style="width: 100%; margin-top: 6%">
    <el-table-column fixed prop="date" label="日期" width="150">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
    <el-table-column prop="province" label="省份" width="120">
    </el-table-column>
    <el-table-column prop="address" label="账号 / 密码" width="600">
    </el-table-column>
    <el-table-column prop="zip" label="电话" width="120"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template #default="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >查看</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王老师",
          province: "哈尔滨",
          address: "teacher / teacher",
          zip: 123456789,
        },
        {
          date: "2016-05-04",
          name: "李老师",
          province: "哈尔滨",
          address: "teacher / teacher",
          zip: 123456789,
        },
        {
          date: "2016-05-01",
          name: "廖老师",
          province: "哈尔滨",
          address: "teacher / teacher",
          zip: 123456789,
        },
        {
          date: "2016-05-03",
          name: "金老师",
          province: "哈尔滨",
          address: "teacher / teacher",
          zip: 123456789,
        },
        {
          date: "2016-05-03",
          name: "金老师",
          province: "哈尔滨",
          address: "teacher / teacher",
          zip: 123456789,
        },
        {
          date: "2016-05-03",
          name: "金老师",
          province: "哈尔滨",
          address: "teacher / teacher",
          zip: 123456789,
        },
      ],
    };
  },
};
</script>
