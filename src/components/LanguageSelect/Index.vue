<template>
  <div>
    <el-dropdown>
      <span>{{ displayLanguage }}</span>
      <el-icon style="margin-left: 5px">
        <ArrowDown />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in state.languages" :key="item.value" :disabled="language === item.value">
            <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useAppStore } from "@/store/modules/app"
import { ArrowDown } from "@element-plus/icons-vue"

import { computed, reactive } from "vue"
import { ElMessage } from "element-plus"

type Language = {
  name: string
  value: string
}

const store = useAppStore()
const { locale } = useI18n()

const state = reactive({
  languages: [
    { name: "English", value: "en" },
    { name: "中文", value: "zh-cn" }
  ] as Array<Language>
})

function handleSetLanguage(lang: string) {
  locale.value = lang
  store.setLanguage(lang)
  ElMessage({
    message: "Switch Language Success",
    type: "success"
  })
}

const language = computed(() => {
  return store.language
})

const displayLanguage = computed(() => {
  return state.languages.find((obj) => obj.value === store.language).name
})
</script>
