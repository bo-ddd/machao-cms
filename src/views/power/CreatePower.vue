<template>
  <div class="mb-20">
    <Title>权限列表</Title>
  </div>
  <div class="power-table">
    <el-button color="#285fed" class="mb-20">新增权限</el-button>
    <div class="custom-tree-container">
      <p>Using render-content</p>
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
  <!-- <el-pagination
    small
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="50"
    class="mt-20"
  />-->
</template>

<script lang="ts" setup>
import Title from "@/components/Title.vue";
import { ref } from "vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import { useUserStore } from "@/stores/user";
let user = useUserStore();
let powerList = ref([]) as any;
interface PowerItem{
  pid:number,
  id:number,
  permissionName:string
}
const getPowerList = async function () {
  let res = await user.permissionList({});
  console.log(res.data);
  powerList = res.data.filter((item: PowerItem) => {
    return item.pid == 0;
  });
  powerList=powerList.map((item:PowerItem)=>{
   return {
    ...item,
    childern:res.data.filter((e:PowerItem)=>{
    return  e.pid==item.id
    })
   }
  })
  console.log(powerList);
};
getPowerList();

interface Tree {
  id: number;
  permissionName: string;
  pid:number;
  children?: Tree[];
}
let id = 1000;

const append = (data: Tree) => {
  const newChild = { id: id++, permissionName: "testtest", children: [],pid:0 };
  if (!data.children) {
    data.children = [];
  }
  data.children.push(newChild);
  dataSource.value = [...dataSource.value];
};

const remove = (node: Node, data: Tree) => {
  const parent = node.parent;
  const children: Tree[] = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === data.id);
  children.splice(index, 1);
  dataSource.value = [...dataSource.value];
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
        "Append "
      ),
      h(
        "a",
        {
          style: "margin-left: 8px",
          onClick: () => remove(node, data),
        },
        "Delete"
      )
    )
  );
};

const dataSource = ([
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1",
          },
          {
            id: 10,
            label: "Level three 1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1",
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
]);
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
