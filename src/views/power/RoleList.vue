<template>
  <div>
    <Title class="mb-20">新增角色</Title>
    <div class="query-box mb-20">
      <div>
        <span class="mr-20">角色</span>

        <el-input v-model="input" placeholder="Please input" />
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">重置</el-button>
      </div>
    </div>
    <div class="role-table">
      <el-button color="#285fed" class="mb-20" @click="addRolePower">新增角色权限</el-button>
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
            <el-button link type="primary" size="small" @click="handleClick2">删除</el-button>
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
    <el-dialog v-model="dialogFormVisible" title="新增角色">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="可用权限" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确认新增</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogCheckRole" title="角色权限">
      <el-form :model="form">
        <el-form-item label="可用权限" :label-width="formLabelWidth">
          <el-select v-model="powerSelected" multiple placeholder="Select" style="width: 240px">
            <el-option
              v-for="item in powerList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogCheckRole = false">取消</el-button>
          <el-button type="primary" @click="dialogCheckRole = false">确认新增</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import Title from "@/components/Title.vue";
import { ref, reactive } from "vue";
const powerSelected = ref([])
const value2 = ref([])
const value3 = ref([])
const powerList = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const handleClick = function () {
  console.log("click");
  dialogCheckRole.value = true;
};
const handleClick2 = function () {
  console.log("click2");
};
const input = ref("");
const dialogFormVisible = ref(false);
const dialogCheckRole = ref(false);
const addRolePower = function () {
  dialogFormVisible.value = true;
};
const formLabelWidth = "140px";
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

const gridData = [
  {
    date: "2016-05-02",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-04",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-01",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-03",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
];
</script>
<style scoped>
.query-box {
  padding: 20px 15px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.role-table {
  padding: 20px 15px;
  background-color: white;
}
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 200px;
}
.el-input {
  width: 200px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>