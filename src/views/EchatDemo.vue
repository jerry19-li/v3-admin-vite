<template>
  <div>
    <div id="main" ref="main" />
    <div id="maychar" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { init } from "echarts"

const main = ref<any>()

// 基本柱形图
function change() {
  const chartBox = init(main.value)
  const option = {
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25]
      }
    ]
  }
  chartBox.setOption(option)
}
// 折线图
function changetype() {
  // 获取组件实例
  const machart = init(document.getElementById("maychar"))
  // 设置配置项
  const option = {
    xAxis: {
      data: ["A", "B", "C", "D", "E"]
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: "line",
        stack: "x"
      },
      {
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x"
      }
    ]
  }
  // 复制
  machart.setOption(option)
}

onMounted(() => {
  change()
  changetype()
})
</script>

<style lang="scss" scoped>
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}
#maychar {
  max-height: 500px;
  // max-height: 400px;
  height: 500px;
}
</style>
