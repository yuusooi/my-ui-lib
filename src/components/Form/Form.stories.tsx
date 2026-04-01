import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './index'
import { FormItem } from './FormItem'
import Input from '../Input'
import Button from '../Button'

const meta: Meta<typeof Form> = {
  title: '数据录入/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Form 组件

Form 组件是一个完整的表单管理系统，提供以下功能：

- **自动数据管理**：无需手动管理表单状态，Form 自动收集所有字段数据
- **受控劫持**：自动接管子组件的 value 和 onChange，用户只需写简单的 <Input />
- **必填校验**：支持 required 校验，实时显示错误提示
- **初始值设置**：支持 initialValues 设置表单初始数据
- **提交拦截**：自动处理表单提交，阻止默认刷新行为

## 基础用法

\`\`\`tsx
import { Form } from './components/Form'
import { FormItem } from './components/Form/FormItem'
import { Input } from './components/Input'

<Form onSubmit={(values) => console.log(values)}>
  <FormItem name="username" label="用户名" required>
    <Input placeholder="请输入用户名" />
  </FormItem>
  <button type="submit">提交</button>
</Form>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '500px',
          padding: '24px',
          border: '1px solid var(--component-border)',
          borderRadius: '8px',
          background: 'var(--component-bg)',
          color: 'var(--text-color)',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Form>

// 基础登录表单
export const BasicLogin: Story = {
  name: '基础登录表单',
  render: () => {
    const handleFinish = (values: any) => {
      alert('提交成功！请看控制台打印的数据')
      console.log('表单最终收集到的数据:', values)
    }

    return (
      <Form onSubmit={handleFinish} initialValues={{ username: 'admin' }}>
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>用户登录</h3>

        {/* 测试 1：必填校验与受控劫持 */}
        <FormItem name="username" label="用户名" required>
          <Input placeholder="请输入用户名" />
        </FormItem>

        {/* 测试 2：密码框 */}
        <FormItem name="password" label="密码" required>
          <Input type="password" placeholder="请输入密码" />
        </FormItem>

        {/* 提交按钮 */}
        <div style={{ marginTop: '24px' }}>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '8px 16px',
              background: '#1890ff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            登录
          </button>
        </div>
      </Form>
    )
  },
}

// 用户注册表单（多字段
export const Registration: Story = {
  name: '用户注册表单',
  render: () => {
    const handleFinish = (values: any) => {
      alert('注册成功！数据已提交')
      console.log('注册数据:', values)
    }

    return (
      <Form onSubmit={handleFinish} initialValues={{}}>
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>用户注册</h3>

        <FormItem name="username" label="用户名" required>
          <Input placeholder="请输入用户名" />
        </FormItem>

        <FormItem name="email" label="邮箱" required>
          <Input type="email" placeholder="请输入邮箱" />
        </FormItem>

        <FormItem name="password" label="密码" required>
          <Input type="password" placeholder="请输入密码（至少6位）" />
        </FormItem>

        <FormItem name="confirmPassword" label="确认密码" required>
          <Input type="password" placeholder="请再次输入密码" />
        </FormItem>

        <FormItem name="phone" label="手机号">
          <Input placeholder="请输入手机号（选填）" />
        </FormItem>

        <div style={{ marginTop: '24px' }}>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '8px 16px',
              background: '#52c41a',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            注册
          </button>
        </div>
      </Form>
    )
  },
}

// 带初始值的编辑表单
export const EditProfile: Story = {
  name: '编辑个人信息（带初始值）',
  render: () => {
    const handleFinish = (values: any) => {
      alert('保存成功！')
      console.log('更新后的数据:', values)
    }

    return (
      <Form
        onSubmit={handleFinish}
        initialValues={{
          username: '张三',
          email: 'zhangsan@example.com',
          phone: '13800138000',
          bio: '这是我的个人简介',
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>编辑个人信息</h3>

        <FormItem name="username" label="用户名" required>
          <Input placeholder="请输入用户名" />
        </FormItem>

        <FormItem name="email" label="邮箱" required>
          <Input type="email" placeholder="请输入邮箱" />
        </FormItem>

        <FormItem name="phone" label="手机号">
          <Input placeholder="请输入手机号" />
        </FormItem>

        <div style={{ marginTop: '24px' }}>
          <button
            type="submit"
            style={{
              padding: '8px 24px',
              background: '#1890ff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              marginRight: '12px',
            }}
          >
            保存
          </button>
          <button
            type="button"
            style={{
              padding: '8px 24px',
              background: '#fff',
              color: '#666',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            取消
          </button>
        </div>
      </Form>
    )
  },
}

// 必填校验演示
export const ValidationDemo: Story = {
  name: '必填校验演示',
  render: () => {
    const handleFinish = (values: any) => {
      alert('提交成功！所有字段都通过了校验')
      console.log('提交数据:', values)
    }

    return (
      <Form onSubmit={handleFinish} initialValues={{}}>
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>校验测试</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          📝 请尝试：点击输入框后不输入内容，直接点击别处，会看到红色错误提示
        </p>

        <FormItem name="required1" label="必填字段 1" required>
          <Input placeholder="点击后不输入，再点击别处试试" />
        </FormItem>

        <FormItem name="required2" label="必填字段 2" required>
          <Input placeholder="这个也是必填的" />
        </FormItem>

        <FormItem name="optional" label="选填字段（非必填）">
          <Input placeholder="这个不是必填的，可以留空" />
        </FormItem>

        <div style={{ marginTop: '24px' }}>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '8px 16px',
              background: '#722ed1',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            提交测试
          </button>
        </div>
      </Form>
    )
  },
}

// 搜索表单（无校验）
export const SearchForm: Story = {
  name: '搜索表单（无校验）',
  render: () => {
    const handleSearch = (values: any) => {
      alert('搜索条件：' + JSON.stringify(values, null, 2))
      console.log('搜索条件:', values)
    }

    return (
      <Form onSubmit={handleSearch} initialValues={{}}>
        <h3 style={{ marginTop: 0, marginBottom: '16px' }}>用户搜索</h3>

        <FormItem name="keyword" label="关键词">
          <Input placeholder="请输入用户名或邮箱" />
        </FormItem>

        <FormItem name="department" label="部门">
          <Input placeholder="请输入部门名称" />
        </FormItem>

        <div style={{ marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              padding: '6px 16px',
              background: '#1890ff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              marginRight: '8px',
            }}
          >
            搜索
          </button>
          <button
            type="button"
            style={{
              padding: '6px 16px',
              background: '#fff',
              color: '#666',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            重置
          </button>
        </div>
      </Form>
    )
  },
}
