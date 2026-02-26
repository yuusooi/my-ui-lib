// import type { Preview } from '@storybook/react-vite'
// import React, { useEffect } from 'react'
// import '../src/styles/variables.css'
// import '../src/components/Grid/grid.responsive.css'

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         date: /Date$/i,
//       },
//     },
//   },

//   // 全局主题切换
//   globalTypes: {
//     theme: {
//       description: '切换全局主题',
//       defaultValue: 'light',
//       toolbar: {
//         title: 'Theme',
//         icon: 'circlehollow',
//         items: [
//           { value: 'light', icon: 'sun', title: 'Light' },
//           { value: 'dark', icon: 'moon', title: 'Dark' },
//         ],
//         dynamicTitle: true,
//       },
//     },
//   },

//   decorators: [
//     (Story, context) => {
//       const { theme } = context.globals

//       useEffect(() => {
//         // 设置 html 的 data-theme 属性
//         const html = document.documentElement
//         if (theme === 'dark') {
//           html.setAttribute('data-theme', 'dark')
//         } else {
//           html.removeAttribute('data-theme')
//         }
//       }, [theme])

//       return (
//         <div
//           id="storybook-preview-root"
//           style={{
//             padding: '24px',
//             minHeight: '100vh',
//             fontFamily: 'var(--font-family-base)',
//           }}
//         >
//           <Story />
//         </div>
//       )
//     },
//   ],
// }

// export default preview

// import type { Preview } from '@storybook/react-vite'
// import React, { useEffect } from 'react'
// import '../src/styles/variables.css'
// import '../src/components/Grid/grid.responsive.css'

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: { date: /Date$/i },
//     },
//     // 💡 关键 1：禁用 Storybook 自带的背景切换，防止它和你的双主题系统打架！
//     backgrounds: { disable: true },
//   },

//   globalTypes: {
//     theme: {
//       description: '切换全局主题',
//       defaultValue: 'light',
//       toolbar: {
//         title: 'Theme',
//         icon: 'circlehollow',
//         items: [
//           { value: 'light', icon: 'sun', title: 'Light' },
//           { value: 'dark', icon: 'moon', title: 'Dark' },
//         ],
//         dynamicTitle: true,
//       },
//     },
//   },

//   decorators: [
//     (Story, context) => {
//       const { theme } = context.globals

//       useEffect(() => {
//         const html = document.documentElement
//         if (theme === 'dark') {
//           html.setAttribute('data-theme', 'dark')
//         } else {
//           html.removeAttribute('data-theme')
//         }

//         // 💡 关键 2：强制给 body 赋予背景色变量！
//         // 只有这样，切换暗黑模式时，弹窗背后的整个大屏幕才会变黑！
//         document.body.style.backgroundColor = 'var(--bg-color)'
//         document.body.style.color = 'var(--text-color)'
//         document.body.style.transition = 'background-color 0.3s'
//       }, [theme])

//       return (
//         <div
//           style={{
//             padding: '24px',
//             minHeight: '100vh',
//             fontFamily: 'var(--font-family-base)',
//           }}
//         >
//           <Story />
//         </div>
//       )
//     },
//   ],
// }

// export default preview

// import type { Preview } from '@storybook/react-vite'
// import { withThemeByDataAttribute } from '@storybook/addon-themes'
// import '../src/styles/variables.css'
// import '../src/components/Grid/grid.responsive.css'

// const preview: Preview = {
//   parameters: {
//     // 已经清理了报警告的 argTypesRegex
//     controls: {
//       matchers: {
//         date: /Date$/i,
//       },
//     },
//     // 禁用自带的画板背景背景色，避免冲突
//     backgrounds: { disable: true },
//   },

//   decorators: [
//     // 👑 官方神器的终极魔法！
//     withThemeByDataAttribute({
//       themes: {
//         // 这里的 key 是你在 Storybook 菜单看到的，value 是你要赋给 data-theme 的值
//         light: 'light',
//         dark: 'dark',
//       },
//       defaultTheme: 'light',
//       // 指定你要控制哪个属性（完美契合你的 html[data-theme='dark']）
//       attributeName: 'data-theme',
//     }),

//     // 给画布一个统一的底色和过渡动画，这样切换暗黑模式时大背景才不会刺眼
//     (Story) => (
//       <div
//         style={{
//           padding: '24px',
//           minHeight: '100vh',
//           fontFamily: 'var(--font-family-base)',
//           backgroundColor: 'var(--bg-color)', // 绑定你的主题背景变量
//           color: 'var(--text-color)', // 绑定你的主题文字变量
//           transition: 'background-color 0.3s ease, color 0.3s ease',
//         }}
//       >
//         <Story />
//       </div>
//     ),
//   ],
// }

// export default preview

import type { Preview } from '@storybook/react-vite'
import React, { useEffect } from 'react'
import '../src/styles/variables.css'
import '../src/components/Grid/grid.responsive.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { date: /Date$/i },
    },
    // 禁用自带的画板背景，防止它覆盖我们自己的颜色
    backgrounds: { disable: true },
  },

  globalTypes: {
    theme: {
      description: '切换全局主题',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror', // 换个显眼的图标
        items: [
          { value: 'light', icon: 'sun', title: '白天模式' },
          { value: 'dark', icon: 'moon', title: '暗黑模式' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const { theme } = context.globals

      useEffect(() => {
        // 核心魔法：暴力注入！不论是 html 还是 body，全部打上主题标签！
        const html = document.documentElement
        const body = document.body

        if (theme === 'dark') {
          html.setAttribute('data-theme', 'dark')
          body.setAttribute('data-theme', 'dark') // 👈 这一步确保你的 Modal 绝对能吃到暗黑变量
        } else {
          html.removeAttribute('data-theme')
          body.removeAttribute('data-theme')
        }
      }, [theme])

      return (
        <div
          style={{
            // 强制组件展示区读取你的背景色变量
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)',
            padding: '24px',
            minHeight: '300px', // 留出足够的展示高度
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
