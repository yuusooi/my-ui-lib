// /// <reference types="vitest/config" />
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// import { playwright } from '@vitest/browser-playwright';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// // More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     projects: [{
//       extends: true,
//       plugins: [
//       // The plugin will run tests for the stories defined in your Storybook config
//       // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
//       storybookTest({
//         configDir: path.join(dirname, '.storybook')
//       })],
//       test: {
//         name: 'storybook',
//         browser: {
//           enabled: true,
//           headless: true,
//           provider: playwright({}),
//           instances: [{
//             browser: 'chromium'
//           }]
//         },
//         setupFiles: ['.storybook/vitest.setup.ts']
//       }
//     }]
//   }
// });

/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    // 配置 dts 插件，自动生成类型声明文件
    dts({
      insertTypesEntry: true,
      include: ['src/components', 'src/index.ts'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom', // 模拟浏览器 DOM 环境
  },
  build: {
    // 启用库模式
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyUI', // 你的全局变量名（在 UMD 模式下使用）
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'], // 输出 ESM 和 UMD 两种规范
    },
    rollupOptions: {
      // 将 react 和 react-dom 设为外部依赖
      // 告诉打包工具：“不要把 React 源码打包进我的组件库里，用宿主环境的 React”
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // 确保 CSS 被正确提取
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name || 'asset'
        },
      },
    },
  },
})
