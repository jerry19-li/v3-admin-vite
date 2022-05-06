## 安装

卸载 2.x 版本 npm uninstall vue-cli -g
卸载 3.x 版本 npm uninstall @vue/cli -g

-g 为全局安装
npm install @vue/cli –g
npm install vue-cli -g

清除缓存
npm cache clean --force

安装淘宝镜像，出错时使用 cnpm 指令
npm install -g cnpm --registry=https://registry.npm.taobao.org

编译
npm run build

运行
npm run serve

查看 vue 信息
npm info vue
npm list vue

安装组件库
npm install element-plus --save
vite 支持 less
npm install less -D

## 模板语法

- v-once: `仅初始化，不随值更新:<p v-once>{{ message }}</p> `
- v-html: 输出 html 代码`<span v-html="变量名"></span>`
- v-bind: HTML 属性中的值使用

```html
<div v-bind:id="变量名"></div>
<button v-bind:disabled="变量名">按钮</button>
<div v-bind:class="{'class1': 变量名}">v-bind:class 指令</div>
<p><a v-bind:href="变量名">菜鸟教程</a></p>
```

- 表达式支持

```html
可以在任何指令中或双括号 ({{ }}) 内使用有效的 JavaScript
<div id="app">
  <div v-show="new Date().getMonth() < 3">月份小于3时显示</div>
  {{5+5}}<br />
  {{ ok ? 'YES' : 'NO' }}<br />
  {{ message.split('').reverse().join('') }}
  <div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
```

- v-if(v-show)根据变量名是否为 true 显示:`<p v-if="变量名">现在你看到我了</p>`

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

- v-for：绑定数组的数据来渲染一个项目列表

```html
<div v-if="weaths" class="content">
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Temp. (C)</th>
        <th>Temp. (F)</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="forecast in weaths" :key="forecast.date">
        <td>{{ forecast.date }}</td>
        <td>{{ forecast.temperatureC }}</td>
        <td>{{ forecast.temperatureF }}</td>
        <td>{{ forecast.summary }}</td>
      </tr>
    </tbody>
  </table>
</div>
```

- 缩写

```html
<a v-bind:href="url"></a> ===> <a :href="url"></a> <a v-on:click="doSomething"></a> ===> <a @click="doSomething"></a>
```

html 中使用：
<类名 1 :属性=属性值 ></类名 1>
注：属性值仅在静态文本时，v-bind 才无需使用
如：<HelloWorld msg="Welcome Vue"></HelloWorld>

````
* v-model
```html
注：v-model为双向绑定，v-bind为单向绑定
Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ]
        }
    }
})
````

- 绑定到文本框:`string:<input type="text" v-model="name" />`
- 绑定到复选框

```html
简单绑定 <input type="checkbox" v-model="active" /> Is active 切换
<input type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no" /> Benefits selected: {{
benefitsSelected }}
```

- 下拉列表

```html
<select v-model="selectedIndex">
  <option v-for="(stringItem, index) in arrayOfStrings" :value="index">{{}}</option>
</select>

数组：
<select v-model="selectedValue">
  <option v-for="item in items" :value="item.value">{{ item.displayProperty }}</option>
</select>

跟踪选定的值:
<select v-model="statusIndex">
  <!-- Create a message to select one -->
  <option disabled value="">Please select one</option>
  <!-- Use v-for to create the list of options -->
  <option v-for="(status, index) in statusList" :value="index">{{ status }}</option>
</select>
```

## 引用

```html
<template>
  <div>
    <input ref="input" class="text_input" id="2" />
    <li v-for="item in list" ref="items" :key="item.id">{{ item }}</li>
    <ButtonControl ref="child" />
  </div>
</template>

<script>
  import ButtonControl from "./ButtonControl.vue"
  export default {
    components: {
      ButtonControl
    },
    data() {
      return {
        list: [
          { id: 1, name: "jerry1" },
          { id: 2, name: "jerry2" }
        ]
      }
    },
    mounted() {
      console.log("this.$refs.items：") // 引用v-for的成员
      console.log(this.$refs.items)

      console.log("this.$refs.input:") // 引用控件input
      console.log(this.$refs.input)
      this.$refs.input.focus()

      console.log("this.$refs.child:")
      console.log(this.$refs.child) // 引用其它组件对象，并修改值
      this.$refs.child.count += 111
    }
  }
</script>
```

## 路由 vue-route

router/index.js

```js
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    // make component lazy loding
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    // 带参数跳转，如：/jobs/12
    path: "/jobs/:id",
    name: "JobsDetails",
    component: () => import("../views/jobs/JobsDetails.vue"),
    props: true
  },
  {
    // redirect,重定向
    path: "/all-jobs",
    redirect: "/jobs"
  },
  {
    // catch all 404
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

App.vue

```html
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | <router-link :to="{ name: 'About'}">About</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link> |
    <router-link :to="{ name: 'HelloWorld'}">HelloWorld</router-link>
    <div>
      <br />
      <!-- Programmatic Navigation -->
      <button @click="redirect">Redirect</button>
      <button @click="goBack">Go back</button>
      <button @click="goForward">Go forward</button>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: "Home" })
      },
      goBack() {
        this.$router.go(-1)
      },
      goForward() {
        this.$router.go(1)
      }
    }
  }
</script>
```

main.js

```js
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
createApp(App).use(router).mount("#app")
```

## 组件定义

```js
// 定义一个名为 button-counter 的新全局组件
app.component('button-counter', {
  data() {
    return {
      count: this.init_count   // 将父节点传来的参数赋值以便使用
    },
    props: {
        init_count: Number
    },
    computed: {
        isGreate10() {  // props仅能在computed中使用，在methods无法使用
            return init_count > 10
        }
    }
  },

  template: `
    <button @click="count++">
      点了 {{ count }} 次！
    </button>`
}
```

```js
components: {
  组件名1: 类名1, 类名2
}
```

## 子组件通讯

```
子组件事件:
  emits: ["事件名"]
  this.$emit("事件名", 事件参数);
父组件接收事件：
  <booking-form @booking-created="addBooking"></booking-form>
  @定义接收的函数：
  methods: {
    addBooking(事件参数) {
  }
```

## vue3+ts 报找不到模块或其类型声明

报错原因是：typescript 只能理解 .ts 文件，无法理解 .vue 文件  
解决方法：在项目根目录或 src 文件夹下创建一个后缀为 .d.ts 的文件，并写入以下内容：

```ts
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

## vite 使用 path

- 安装  
  npm install @types/node --save-dev
- tsconfig.node.json:

```json
"compilerOptions": { ...
 "allowSyntheticDefaultImports": true,
```

- tsconfig.json:

```json
  "compilerOptions": {  ...
    "baseUrl": ".",
    "paths": {"@/*": ["src/*"]}
```

- vite.config.ts

```ts
import path from 'path'
export default defineConfig({ ...
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  }
}
```

## 图际化

- 引入库`pnpm install i18n --save-dev`
- 初始化

```js
import { createI18n } from "vue-i18n" // import from runtime only
import { getLanguage } from "@/utils/cookies"

import elementEnLocale from "element-plus/lib/locale/lang/en"
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn"

// User defined lang
import enLocale from "./en"
import zhLocale from "./zh-cn"

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  "zh-cn": {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is english
  return "zh-cn"
}

const i18n = createI18n({
  legacy: false, // 使用Composition API模式，设置为false
  //globalInjection: true,
  locale: getLocale(),
  messages: messages
})

export default i18n

App.vue:
import i18n from "@/locales"
app.use(i18n)
```

- 切换语言

```js
import { useI18n } from "vue-i18n"
const { locale } = useI18n()
function handleSetLanguage(lang: string) {
  locale.value = lang
  store.setLanguage(lang)
}
```

- 定义翻译表,en.ts，zh-cn.ts

```js
export default {
  login: {
    loginButton: "Login"
  }
}
```

- 使用

```js
import { useI18n } from "vue-i18n"
const { t } = useI18n()
<el-button type="primary">
  {{ t("login.loginButton") }}
</el-button>
```
