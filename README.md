# my-ui-lib

基于 React 18 + TypeScript 开发的个人 UI 组件库，包含基础的展示组件与完整的表单解决方案。

[![Deploy Storybook](https://github.com/yuusooi/my-ui-lib/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/yuusooi/my-ui-lib/actions)

## 在线文档

[Storybook 组件预览](https://yuusooi.github.io/my-ui-lib/)

## 技术特性

- **主题系统**: 基于 CSS Variables 实现 Light / Dark 双主题切换。
- **表单引擎**: 内部基于 `Context` 实现状态收集与分发，封装受控组件逻辑。提供 `SchemaForm` 支持 JSON 协议驱动的表单渲染。
- **按需加载**: 基于 Vite 打包 ESM / CJS 产物，配置 `sideEffects` 支持 Tree-Shaking。
- **类型安全**: 全站 TypeScript 编写。
- **质量保障**: 引入 Vitest + React Testing Library，包含核心组件（如 Button、Form 数据流）的单元测试。
- **工程化**: 配置 GitHub Actions 实现推送主分支后的 Storybook 自动化部署。

## 包含组件

目前已完成以下 15 个核心组件的开发与封装：

- **通用与布局**: `Button` (按钮), `Layout` (布局), `Grid` (栅格), `Space` (间距), `Divider` (分割线)
- **数据录入**: `Form` (表单), `Input` (输入框), `SchemaForm` (基于 Schema 的动态表单)
- **数据展示**: `Table` (表格), `Card` (卡片), `Avatar` (头像), `Badge` (徽标), `Tag` (标签)
- **反馈交互**: `Modal` (弹窗), `Alert` (警告提示), `Spin` (加载中)

## 快速接入

```bash
npm install my-ui-lib
```
