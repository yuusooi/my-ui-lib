/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import { Form } from './index'
import { FormItem } from './FormItem'
import { componentMap } from './componentMap'
import { FormContext } from './types'
import type { SchemaFormProps, FormValues } from './types'

// 动态表单内容组件（在 Form 内部，能获取到 Context）
const SchemaFormContent: React.FC<{
  schemas: SchemaFormProps['schemas']
  onSubmit: SchemaFormProps['onSubmit']
  submitText?: string
}> = ({ schemas, submitText }) => {
  // 在 Form 内部，可以正确获取 Context
  const { values } = useContext(FormContext)

  // 计算哪些schema应该显示，哪些应该隐藏
  const visibleSchemas = React.useMemo(() => {
    return schemas.filter((schema) => {
      // 如果schema定义了hidden函数，就调用它判断是否隐藏
      if (schema.hidden) {
        const isHidden = schema.hidden(values) // 传入当前表单数据
        return !isHidden // 如果isHidden=true，就过滤掉,不返回
      }
      // 如果没有定义hidden，默认显示
      return true
    })
  }, [schemas, values]) // 当schemas或values变化时重新计算

  return (
    <>
      {/* 动态渲染引擎：遍历 schemas，生成表单项 */}
      {visibleSchemas.map((schema, index) => {
        // 1. 根据 schema.type 从映射表中拿到对应的组件
        const Component = componentMap[schema.type]

        // 如果找不到对应的组件，就跳过（容错处理）
        if (!Component) {
          console.warn(
            `未找到类型为 ${schema.type} 的组件，请检查 componentMap`
          )
          return null
        }

        // 2. 准备传给组件的 props
        const componentProps: Record<string, any> = {
          ...schema.props, // 先展开 schema 自定义的 props （如 disabled、maxLength）
          placeholder:
            schema.placeholder || `请输入${schema.label || schema.name}`, // 占位符
        }

        // 3. 如果 type 是 password，添加 type="password" 属性
        if (schema.type === 'password') {
          componentProps.type = 'password'
        }

        // 4. 返回动态生成的 FormItem
        return (
          <FormItem
            key={schema.name || index} // React 要求列表必 须有 key
            name={schema.name}
            label={schema.label}
          >
            <Component {...componentProps} />
          </FormItem>
        )
      })}

      {/* 提交按钮 */}
      <button type="submit">{submitText}</button>
    </>
  )
}

// SchemaForm组件 JSON驱动的表单组件
// schemas 表单项配置数组（JSON）
// onSubmit 提交回调函数
// submitText 提交按钮文字
export const SchemaForm: React.FC<SchemaFormProps> = ({
  schemas,
  onSubmit,
  submitText = '提交',
}) => {
  // 从schemas中提取初始值，构建initialValues对象
  const initialValues: FormValues = React.useMemo(() => {
    const values: FormValues = {}

    // 遍历schemas，把每个schema的name和initialValue收集起来
    schemas.forEach((schema) => {
      // 如果这个schema有initialValue，就添加到values对象中
      if (schema.initialValue !== undefined) {
        values[schema.name] = schema.initialValue
      } else {
        // 如果没有initialValue，就给一个空字符串作为默认值
        values[schema.name] = ''
      }
    })

    return values
  }, [schemas]) // 当schemas变化时重新计算

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      {/* 把使用 Context 的内容放到 Form 内部 */}
      <SchemaFormContent
        schemas={schemas}
        onSubmit={onSubmit}
        submitText={submitText}
      />
    </Form>
  )
}
