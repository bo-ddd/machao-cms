<template>
  <div class="user-list">
    <Title class="mb-20">用户列表</Title>
    <el-table :data="userListdata" height="468" border style="width: 100%">
      <el-table-column align="center" label="头像" width="140">
        <template #default="scoped">
          <div class="avatar-box">
            <img v-if="scoped.row.avatarImg" class="avatarImg" :src="scoped.row.avatarImg" alt />
            <img v-else src="@/assets/imgs/icon-avatarImg.png" alt />
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="avatarName" label="昵称" width="160" />
      <el-table-column align="center" prop="userId" label="用户id" width="150" />
      <el-table-column align="center" prop="phoneNumber" label="手机号" width="auto" />
      <el-table-column align="center" fixed="right" label="操作" width="250">
        <template #default="scoped">
          <el-button link type="primary" size="small" @click="handleClick(scoped.row)">新增角色</el-button>
          <el-button link type="primary" size="small" @click="handleClick2(scoped.row)">删除角色</el-button>
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

    <el-dialog v-model="userInfoDialog" title="添加用户角色">
      <el-form>
        <el-form-item label="添加用户角色" :label-width="formLabelWidth">
          <el-select v-model="activedAddRole" placeholder="选择添加角色" style="width: 240px">
            <el-option
              v-for="item in getAddRoleList"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="addRole">确认</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="deleteRoleDialog" title="删除用户角色">
      <el-form>
        <el-form-item label="删除用户角色" :label-width="formLabelWidth">
          <el-select v-model="activedDeleteRole" placeholder="选择要删除的角色" style="width: 240px">
            <el-option
              v-for="item in userRoleList"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="deleteRole">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
import Title from "@/components/Title.vue";
import { computed, reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";
const formLabelWidth = "140px";
const userInfoDialog = ref(false);
const deleteRoleDialog = ref(false);
const userListdata = ref([]);
const activedDeleteRole = ref([]);
const userTotal = ref(0);
const pageNum = ref(1);
const pageSize = ref(5);
const userId = ref(0);
const user = useUserStore();
const activedAddRole = ref("");

const roleList = ref([]);
const userRoleList = ref([]);
const getAddRoleList = computed(() => {
  return JSON.parse(JSON.stringify(roleList.value)).filter((item:any) => {
      return !JSON.parse(JSON.stringify(userRoleList.value)).find((e:any) => {
        return e.roleName==item.roleName;
      });
    })
});
const getRoleList = async function () {
  let res = await user.roleList({});
  if (res.status == 1) {
    roleList.value = res.data;
    console.log(res);
  }
};

getRoleList();

const getUserRoleList = async function (userId: any) {
  let res = await user.userInfo({
    userId,
  });
  console.log(res);
  if (res.status == 1) {
    userRoleList.value = res.data.roles;
  }
};

const addRole = async function () {
  let res = await user.addRole({
    userId: userId.value,
    roleId: activedAddRole.value,
  });
  if (res) {
    ElMessage({
      message: "添加成功",
      type: "success",
    });
    getUserList();
    cancel();
  } else {
    ElMessage.error("添加失败");
  }
};
const getUserRole = function (params: any) {
  return user.userList(params);
};
const deleteRole = async function () {
  let res = await user.deleteRole({
    roleId: activedDeleteRole.value,
    id: userId.value,
  });
  console.log(res);

  if (res.status == 1) {
    ElMessage({
      message: "删除",
      type: "success",
    });
    userInfoDialog.value = false;
    cancel();
    getUserList();
  } else {
    ElMessage.error("删除失败");
  }
};

const getUserList = async function () {
  let res = await user.userList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  });
  console.log(res);

  if (res) {
    userListdata.value = res.data.list;
    userTotal.value = res.data.total;
  }
};

getUserList();
const handlePageSize = (val: number) => {
  getUserList();
};
const handlePageNum = (val: number) => {
  getUserList();
};

const handleClick = function (userInfo: any) {
  getUserRoleList(userInfo.userId);
  userInfoDialog.value = true;
  userId.value = userInfo.userId;
};
const handleClick2 = function (userInfo: any) {
  getUserRoleList(userInfo.userId);
  deleteRoleDialog.value = true;
  userId.value = userInfo.userId;
};
const cancel = function () {
  userInfoDialog.value = false;
  deleteRoleDialog.value = false;
  activedAddRole.value = "";
  activedDeleteRole.value = [];
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