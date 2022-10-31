<template>
  <main>
    <div class="common-layout">
      <el-container>
        <el-header class="home-header">
          <div class="header-left">
            <div class="header-logo">
              <img src="@/assets/imgs/icon-home_logo.png">
              <!-- <el-divider direction="vertical" /> -->
              <span>|</span>
              <span>微信用户odRS...</span>
            </div>
            <div>
              <!-- <el-input v-model="input2" class="w-50 m-2" placeholder="搜索设计项目、超级文档、文件夹等" :prefix-icon="Search" /> -->
            </div>
          </div>

          <div class="header-right">
            <img src="@/assets/imgs/icon-home_logo2.png">
            <el-icon :size="20" color="#000000">
              <User />
            </el-icon>
            <el-icon :size="20" color="#000000">
              <Bell />
            </el-icon>
            <el-icon :size="20" color="#000000">
              <Download />
            </el-icon>
            <el-icon :size="20" color="#000000">
              <QuestionFilled />
            </el-icon>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          </div>
        </el-header>
        <el-container class="container">
          <el-aside width="247px">
            <Menu.Wrapper>
              <template #items>
                <el-row class="tac">
                  <el-col>
                    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router
                    >
                      <el-menu-item index="menu">
                        <el-icon>
                          <setting />
                        </el-icon>
                        <span>主页</span>
                      </el-menu-item>
                      <el-sub-menu index="2">
                        <template #title>
                          <el-icon>
                            <location />
                          </el-icon>
                          <span>权限管理</span>
                        </template>
                        <el-menu-item index="roleList" >新增角色</el-menu-item>
                        <el-menu-item index="powerList" >角色权限</el-menu-item>
                        <el-menu-item index="createPower" >创建权限</el-menu-item>
                        <el-menu-item index="userList" >用户列表</el-menu-item>
                      </el-sub-menu>
                    </el-menu>
                  </el-col>
                </el-row>
              </template>
              <template #files>
                <Menu.File>
                  <el-row class="tac">
                    <el-col>
                      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-menu-item index="2">
                          <el-icon>
                            <setting />
                          </el-icon>
                          <span>产品需求文档</span>
                        </el-menu-item>
                      </el-menu>
                    </el-col>
                  </el-row>
                </Menu.File>
              </template>
            </Menu.Wrapper>

          </el-aside>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </main>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu'
import useUtil from '@/assets/util'
import { ref,computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
const route=useRoute();
const defaultActive=computed(()=>{
  return route.name
})

let { parseAsssetFile } = useUtil()
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.home-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #f1f1f1;
}

.header-left {
  display: grid;
  gap: 0 80px;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
}

.header-logo {
  display: flex;
  gap: 15px;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 26px;
}

.header-right img {
  width: 20px;
  height: 20px;
}

.el-menu-vertical-demo {
  background-color: #f9fbfa;
  border: 0;
}

.el-menu-item {
  border-radius: 10px;
}

:deep(.el-menu-item):hover {
  background-color: #e6e7ec;
  border-radius: 10px;
}
.container{
}
.main{
  max-height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #f7f7f7;
}
</style>
