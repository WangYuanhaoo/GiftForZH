# GiftForZH
text-adventure-game/
├── public/
│   ├── index.html              # 主界面，包含菜单栏和欢迎信息
│   ├── text-space.html         # 文字空间界面，可输入、保存文本并与 LeanCloud 交互
│   ├── adventure-game.html     # 文字冒险游戏起始页，提供游戏路径选择
│   ├── adventure-path1.html    # 文字冒险游戏分支 1 的页面
│   ├── adventure-path2.html    # 文字冒险游戏分支 2 的页面
│   ├── adventure-path3.html    # 文字冒险游戏分支 3 的页面
│   ├── letter.html             # 写给女朋友的信页面
│   ├── photo-grid.html         # 九宫格合照页面
│   ├── styles.css              # 全局样式文件，定义页面的布局、颜色、字体等样式
│   ├── script.js               # 全局脚本文件（若有公共的 JavaScript 逻辑可放在这里）
│   └── assets/
│       ├── photo1.jpg          # 九宫格合照中的图片 1
│       ├── photo2.jpg          # 九宫格合照中的图片 2
│       ├── photo3.jpg          # 九宫格合照中的图片 3
│       ├── photo4.jpg          # 九宫格合照中的图片 4
│       ├── photo5.jpg          # 九宫格合照中的图片 5
│       ├── photo6.jpg          # 九宫格合照中的图片 6
│       ├── photo7.jpg          # 九宫格合照中的图片 7
│       ├── photo8.jpg          # 九宫格合照中的图片 8
│       └── photo9.jpg          # 九宫格合照中的图片 9
└── README.md                   # 项目说明文档（可选，用于介绍项目功能、使用方法等）
各目录和文件内容详细说明
public 目录
此目录涵盖了项目的全部前端静态文件，可直接部署到 GitHub Pages 等静态网站托管平台。
HTML 文件：
index.html：作为项目的主页面，展示欢迎信息，并且通过菜单栏提供到其他页面的链接。
text-space.html：文字空间页面，存在一个文本输入框和保存按钮。用户输入的文本能够保存到 LeanCloud 数据库，页面加载时会从数据库读取之前保存的文本。
adventure-game.html：文字冒险游戏的起始页面，提供多条游戏路径供用户选择。
adventure-path1.html、adventure-path2.html、adventure-path3.html：分别对应文字冒险游戏的三个分支页面，依据用户在起始页的选择展示不同的故事内容。
letter.html：用于展示写给女朋友的信的页面。
photo-grid.html：九宫格合照页面，也许包含模糊的图片，点击之后可显示清晰图片。
styles.css：全局样式文件，对页面的整体布局、颜色、字体、按钮样式、背景图等进行了定义，保证所有页面风格统一。
script.js：若项目中有一些公共的 JavaScript 逻辑（像菜单交互、图片点击效果等），可放置在此文件中。目前文字空间页面的交互逻辑直接写在了 text-space.html 的 <script> 标签内。
assets 目录：存放项目里用到的所有图片资源，主要是九宫格合照所需的图片。