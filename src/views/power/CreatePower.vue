<template>
  <div class="mb-20">
    <Title>权限列表</Title>
  </div>
  <div class="power-table">
    <el-button color="#285fed" class="mb-20" @click="addPowerDialog=true">新增权限</el-button>
    <div class="custom-tree-container">
      <el-tree
        :data="powerList"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
      />
    </div>
  </div>
  <el-dialog v-model="addPowerDialog" title="添加权限" @close="cancel">
    <el-form>
      <el-form-item label="输入权限名" :label-width="formLabelWidth">
        <el-input
          v-model="permissionName"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="addPower">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import Title from "@/components/Title.vue";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import { useUserStore } from "@/stores/user";
let user = useUserStore();
const formLabelWidth = "140px";
const pid = ref(0);
const permissionName = ref("");
let powerList = ref([]) as any;
const addPowerDialog = ref(false);
const cancel = function () {
  permissionName.value = "";
  addPowerDialog.value = false;
  pid.value = 0;
};
const addPower = async function () {
  let res = await user.addPower({
    pid: pid.value,
    permissionName: permissionName.value,
  });
  if (res) {
  addPowerDialog.value = false;
    ElMessage({
      message: "添加成功",
      type: "success",
    });
    getPowerList();
    cancel();
  }
  console.log(res);
};
const deleteRole = async function () {};
interface PowerItem {
  pid: number;
  id: number;
  permissionName: string;
}
const getAllChild = function (arr: any) {
  arr.forEach((obj: any) => {
    obj.children = arr.filter((item: any) => {
      return item.pid == obj.id;
    });
    if (obj.children.length) {
      getAllChild(obj.children);
    }
  });
};

const getPowerList = async function () {
  let res = await user.permissionList({});
  console.log(res);

  let allPower = res.data;
  allPower = allPower.map((item: any) => {
    return {
      id: item.id,
      label: item.permissionName,
      pid: item.pid,
    };
  });
  getAllChild(allPower);
  allPower = allPower.filter((item: any) => {
    return item.pid == 0;
  });
  console.log(allPower);

  powerList.value = allPower;
};
getPowerList();
interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}
let id = 1000;

const append = (data: Tree) => {
  console.log(data);
  addPowerDialog.value = true;
  pid.value = data.id;
};

const remove = (node: Node, data: Tree) => {
  ElMessageBox.confirm("是否确认删除", "删除权限", {
    confirmButtonText: "确认删除",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      let res = await user.deleteRole({
        id: data.id,
      });
      if (res.status == 1) {
        ElMessage({
          type: "success",
          message: "删除成功",
        });
        getPowerList();
      }
    })
    .catch(() => {});
};

const renderContent = (
  h: any,
  {
    node,
    data,
    store,
  }: {
    node: Node;
    data: Tree;
    store: Node["store"];
  }
) => {
  return h(
    "span",
    {
      class: "custom-tree-node",
    },
    h("span", null, node.label),
    h(
      "span",
      null,
      h(
        "a",
        {
          onClick: () => append(data),
        },
        "添加权限"
      ),
      h(
        "a",
        {
          style: "margin-left: 8px",
          onClick: () => remove(node, data),
        },
        "删除权限"
      )
    )
  );
};
</script>

<style>
.power-table {
  padding: 20px 15px;
  background-color: white;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
