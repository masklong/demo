---
trigger: always_on
---

# UI生成过程中样式规则

## 样式定义规则
1. 当 css 属性不超过三个时使用 wailwindcss 定义
2. 当超过三个 css 属性时，将组件定义为文件夹，里面包含index.tsx文件index.less样式定义文件。样式放在 index.less 中定义
3. 重复的颜色要使用 css 变量