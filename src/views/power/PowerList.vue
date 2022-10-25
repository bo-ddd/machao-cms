<template>
  <div class="power-box">
    <Title class="title">角色管理</Title>
    <div class="common-layout">
      <el-container class="container">
        <el-aside class="aside" width="200px">
          <div class="aside-head">
            <el-button class="add-btn" type="primary" plain>+新增角色</el-button>
          </div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <span>管理员</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span>组长</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="角色成员" name="first">
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="功能权限" name="second">功能权限</el-tab-pane>
            <el-tab-pane label="数据范围" name="third">数据范围</el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Title from "@/components/Title.vue";import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const activeName = ref('first')

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style scoped>
.power-box {
  background-color: white;
  height: 100%;
}
.power-box .title {
  padding: 15px 0;
  margin: 0 10px;
  border-bottom: 2px solid rgb(235, 235, 235);
}
.common-layout {
  height: calc(100% - 54px);
}
.container {
  height: 100%;
}
.aside {
  padding: 10px;
  border-right: 2px solid rgb(235, 235, 235);
}
.aside-head {
  /* padding: 10px 0; */
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(235, 235, 235);
}
.add-btn {
  width: 100%;
}
.el-menu {
  border: none;
}
.el-menu-item {
  /* justify-content: center; */
  border-bottom: 1px solid rgb(235, 235, 235);
}
</style>