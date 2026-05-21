# 蒋佳丽 · 个人网站

单页作品集网站，内容来自简历与《蒋佳丽作品集 2025.pdf》。

## 本地预览

```bash
cd "/Users/rongqingtu/Desktop/蒋佳丽个人网站"
python3 -m http.server 8080
```

浏览器打开：http://localhost:8080

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `jiangjiali-portfolio`）
2. 将本文件夹内所有文件推送到仓库
3. Settings → Pages → Source 选 `main` 分支、根目录 `/`
4. 几分钟后可通过 `https://你的用户名.github.io/仓库名/` 访问

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 主页面 |
| `resume.html` | 在线简历（嵌入 PDF） |
| `蒋佳丽简历-17895793912.pdf` | 简历 PDF |
| `styles.css` | 样式 |
| `main.js` | 导航与滚动动画 |
| `avatar.png` | 头像 |
| `蒋佳丽作品集 2025.pdf` | 作品集 PDF |
