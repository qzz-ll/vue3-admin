<template>
  <template v-for="(i,v) in item.children">
    <router-link :to="item.path + '/' + i.path" v-if="!i.hidden" :key="v">
      <el-menu-item :index="item.path + '/' + i.path">{{(item.children.length > 1 ? i : item).meta.title}}</el-menu-item>
    </router-link>
  </template>
</template>
<script setup lang='ts'>
  defineOptions({
    name: "TopItem"
  });
  const props = defineProps({
    item: {
      type: Object,
      default: () => {}
    }
  });
</script>