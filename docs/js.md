## vscode 调试 js

- 运行 live-server --port=8080
- 直接 F5 运行打开 chrome

## 单页路由

原理：将页面内容替换为指定的 template 节点
使用 window.history.pushState()模拟浏览器历史浏览记录

```html
<body>
  <div id="app">Loading...</div>

  <template id="login">
    <h1>Login Page</h1>
    <section>
      <a href="/dashboard" onclick="onLinkClick(event)">Login</a>
    </section>
  </template>

  <template id="dashboard">
    <header>
      <h1>Dashboard Page</h1>
      <a href="/login" onclick="onLinkClick(event)">Logout</a>
    </header>
  </template>
</body>
```

```js
const routes = {
  "/login": {
    templateId: "login"
  },
  "/dashboard": {
    templateId: "dashboard"
  }
}

function updateRoute() {
  const path = window.location.pathname
  const route = routes[path]
  if (!route) {
    return navigate("/login")
  }

  const template = document.getElementById(route.templateId)
  const view = template.content.cloneNode(true)
  const app = document.getElementById("app")
  app.innerHTML = "" // 清除原来的网页内容
  app.appendChild(view)
}

function navigate(path) {
  window.history.pushState({}, path, path) // 浏览历史
  updateRoute()
}

function onLinkClick(event) {
  event.preventDefault()
  navigate(event.target.href)
}

// 按下浏览器上回退/前进按钮时，刷新网页路由
window.onpopstate = () => updateRoute()
updateRoute()
```
