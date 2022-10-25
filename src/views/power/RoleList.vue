<template>
  <div>
    <Title class="mb-20">新增角色</Title>
    <div class="query-box mb-20">
      <span class="mr-20">角色</span>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="role-table">
      <el-button color="#285fed" class="mb-20">新增角色权限</el-button>
      <el-table border :data="tableData" stripe style="width: 100%">
        <el-table-column align="center" prop="name" label="角色名称" width="120" />
        <el-table-column align="center" prop="father" label="所属部门" width="180" />
        <el-table-column align="center" prop="time" label="新增时间" />
        <el-table-column align="center" label="角色权限开关" width="180">
          <template #default>
            <el-switch v-model="value1" />
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="180">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">查看</el-button>
            <el-button link type="primary" size="small" @click="handleClick2">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        small
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="50"
        class="mt-20"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from "@/components/Title.vue";
import { ref } from "vue";
const handleClick = function () {
  console.log("click");
};
const handleClick2 = function () {
  console.log("click2");
};
const value1 = ref(true);
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const tableData = [
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: "Los Angeles",
  },
  {
    time: "2016-05-03",
    name: "Tom",
    father: " Los Angeles",
  },
];
</script>
<style scoped>
.query-box {
  padding: 20px 15px;
  background-color: white;
}
.role-table {
  padding: 20px 15px;
  background-color: white;
}
</style>