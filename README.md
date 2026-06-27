# 装备数值模拟器

《闲者上钩》装备系统 v27 调参用静态模拟器。

## 本地运行

这个工具是纯静态页面，可以直接打开 `index.html`，也可以用任意静态服务器预览：

```sh
python3 -m http.server 4177
```

然后访问 `http://127.0.0.1:4177/`。

## 校验

```sh
node smoke.mjs
```

## GitHub Pages

仓库推到 GitHub 后，`.github/workflows/pages.yml` 会把当前目录发布为 GitHub Pages 站点。
