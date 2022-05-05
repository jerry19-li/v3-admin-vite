/*
 * @Description: 加载插件文件
 * @Author: ZY
 * @Date: 2020-12-19 11:53:00
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 16:49:30
 */
import { createApp } from "vue"

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  //const files = require.context(".", true, /\.ts$/)
  const modules = import.meta.globEager("./*.ts")
  console.log("loadAllPlugins")
  for (const path in modules) {
    console.log(path)
    console.log(modules[path])
    //app.use(modules[path].default)
    modules[path].default(app)
  }
  console.log("loadAllPlugins end")

  // files.keys().forEach((key) => {
  //   if (typeof files(key).default === "function") {
  //     if (key !== "./index.ts") files(key).default(app)
  //   }
  // })
}
