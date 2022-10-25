<template>
  <div class="user-list">
    <Title class="mb-20">用户列表</Title>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="username" label="头像" width="140" />
      <el-table-column align="center" prop="username" label="用户名" width="160" />
      <el-table-column align="center" prop="avatarname" label="昵称" width="160" />
      <el-table-column align="center" prop="id" label="用户id" width="150" />
      <el-table-column align="center" prop="phoneNum" label="手机号" width="auto" />
      <el-table-column align="center" fixed="right" label="操作" width="250">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">修改角色</el-button>
          <el-button link type="primary" size="small" @click="handleClick2">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small background layout="total, sizes, prev, pager, next, jumper" :total="50" class="mt-20" />
  </div>
</template>
<script lang="ts" setup>

import Title from '@/components/Title.vue'
const tableData = [
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
  {
    username: "小明",
    avatarname: "",
    id: "",
    phoneNum: "110",
  },
];
const handleClick = function () {
  console.log("click");
};
const handleClick2 = function () {
  console.log("click2");
};
</script>
<style scoped>
.user-list {
  /* padding: 20px; */
}
</style>