<script lang="ts" setup>
import { useAppStore } from "@/store/modules/app"
//import zhCn from "element-plus/lib/locale/lang/zh-cn"
//import en from "element-plus/lib/locale/lang/en"

useAppStore().initTheme() // 初始化 theme
//const locale = en // element-plus 设置为中文
//const locale = zhCn // element-plus 设置为中文
</script>

<template>
  <!-- <ElConfigProvider :locale="locale"> -->
  <router-view />
  <!-- </ElConfigProvider> -->
</template>
