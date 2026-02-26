import React from 'react'
import Input from '../Input/index'

export const componentMap: Record<string, React.FC<any>> = {
  // 键（key）：Schema 中的 type 值
  // 值（value）：对应的 React 组件

  input: Input, // 当type='input'时，渲染 <Input />
  password: Input, // 当 type='password' 时，也用Input组件（但type属性设为password）
  textarea: Input,
}
