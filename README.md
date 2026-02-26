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

## 快速接入

```bash
npm install my-ui-lib
```
