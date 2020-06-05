<template>
  <div class="hello">
    <h1 @click="goTo()">dddd</h1>
    <div>{{abc}}</div>
    <div @click="add">点击</div>
    <div>{{a}}</div>
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary">按钮</a-button>
      </a-config-provider>
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>
    </div>
    <a-tree
    v-model="checkedKeys"
    checkable
    :expanded-keys="expandedKeys"
    :auto-expand-parent="autoExpandParent"
    :selected-keys="selectedKeys"
    :tree-data="treeData"
    @expand="onExpand"
    @select="onSelect"
  />
  </div>
</template>

<script>
import HelloWorldSsi from "@/ssi/HelloWorld_ssi";
export default {
  ...HelloWorldSsi
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
