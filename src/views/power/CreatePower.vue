<template>
  <div class="mb-20">
    <Title>权限列表</Title>
  </div>
  <div class="power-table">
      <el-button color="#285fed" class="mb-20">新增权限</el-button>
  <div class="custom-tree-container">
    <el-tree
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    />
  </div>
  </div>
  <el-pagination
    small
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="50"
    class="mt-20"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type Node from "element-plus/es/components/tree/src/model/node";
import Title from "@/components/Title.vue";
interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}
let id = 1000;

const append = (data: Tree) => {
  const newChild = { id: id++, label: "testtest", children: [] };
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
  h:any,
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
          style: "margin-left: 8px",
          onClick: () => remove(node, data),
        },
        "删除"
      )
    )
  );
};

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: "Level one 1",
  },
  {
    id: 1,
    label: "Level one 1",
  },
  {
    id: 1,
    label: "Level one 1",
  },
]);
</script>

<style scoped>
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
