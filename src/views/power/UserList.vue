<template>
  <div class="user-list">
    <Title class="mb-20">用户列表</Title>
    <el-table :data="userListdata" border style="width: 100%">
      <el-table-column align="center" label="头像" width="140">
        <template #default="scoped">
          <div class="avatar-box">
            <img v-if="scoped.row.avatarImg" class="avatarImg" :src="scoped.row.avatarImg" alt />
            <img v-else src="@/assets/imgs/icon-avatarImg.png" alt="">
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column align="center" prop="username" label="用户名" width="160" /> -->
      <el-table-column align="center" prop="avatarName" label="昵称" width="160" />
      <el-table-column align="center" prop="userId" label="用户id" width="150" />
      <el-table-column align="center" prop="phoneNumber" label="手机号" width="auto" />
      <el-table-column align="center" fixed="right" label="操作" width="250">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">修改角色</el-button>
          <el-button link type="primary" size="small" @click="handleClick2">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="userTotal"
      v-model:currentPage="pageNum"
      v-model:page-size="pageSize"
      :page-sizes="[5,10,20,30,40,50]"
      @size-change="handlePageSize"
      @current-change="handlePageNum"
      class="mt-20"
    />

    <el-dialog v-model="userInfoDialog" title="修改用户角色">
      <el-form :model="form">
        <!-- <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>-->
        <el-form-item label="用户角色" :label-width="formLabelWidth">
          <el-select v-model="value1" multiple placeholder="Select" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="userInfoDialog = false">取消</el-button>
          <el-button type="primary" @click="userInfoDialog = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import Title from "@/components/Title.vue";
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";
const formLabelWidth = "140px";
const userInfoDialog = ref(false);
let userListdata = ref([]);
let userTotal = ref(0);
const pageNum = ref(1);
const pageSize = ref(5);
let user = useUserStore();

const getUserList = async function () {
  let res = await user.userList({ pageNum:pageNum.value, pageSize:pageSize.value});
  console.log(res);

  if (res) {
    userListdata.value = res.data.list;
    userTotal.value = res.data.total;
  }
};
const handlePageSize = (val: number) => {
  console.log(`${val} items per page`);
  getUserList();
};
const handlePageNum = (val: number) => {
  console.log(`current page: ${val}`);
  getUserList();
};

getUserList();
// userListApi({})
const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const options = [
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
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const handleClick = function () {
  console.log("click");
  userInfoDialog.value = true;
};
const handleClick2 = function () {
  console.log("click2");
};
</script>
<style scoped>
.user-list {
  /* padding: 20px; */
}
.avatar-box {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.avatarImg {
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 50px;
  overflow: hidden;
}
</style>