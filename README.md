# 装备数值模拟器

《闲者上钩》装备系统 v27 调参用静态模拟器。

线上地址：<https://stellatc.github.io/fishingidlesim/>

## 当前发布内容

这个仓库发布的是可直接托管到 GitHub Pages 的静态构建产物：

- `index.html`：页面结构
- `styles.css`：样式
- `bootstrap.js`：加载压缩后的模拟器脚本
- `app.js.gz.b64`：模拟器脚本压缩包
- `.github/workflows/pages.yml`：GitHub Pages 自动部署

## 本地预览

```sh
python3 -m http.server 4177
```

然后访问 `http://127.0.0.1:4177/`。
