import React, { useMemo } from 'react'
import type { ButtonProps } from './types'
import './index.css'

const Button: React.FC<ButtonProps> = (props) => {
  const {
    as = 'button', //默认属性
    type = 'default', // 按钮类型
    status = 'default', // 按钮状态
    size = 'default', // 按钮尺寸
    shape = 'square', // 按钮形状
    disabled = false, // 是否禁用
    loading = false, // 是否加载中
    loadingFixedWidth = false,
    long = false, // 是否拉伸
    htmlType = 'button', // 原生button type，默认'button'
    children, // 子元素，不需要默认值
    className, // 自定义类名
    style, // 自定义样式
    icon, // 图标
    href, // 链接地址,有href的是链接按钮，要用<a>标签
    target, // 链接打开方式
    onClick, // 点击事件
    ...restProps // 其他未解构的属性
  } = props

  const classNames = useMemo(() => {
    const classes = ['my-btn'] //基础类名永远存在

    if (type !== 'default') {
      classes.push(`my-btn-${type}`)
    }
    if (status !== 'default') {
      classes.push(`my-btn-status-${status}`)
    }
    if (size !== 'default') {
      classes.push(`my-btn-size-${size}`)
    }
    if (shape !== 'square') {
      classes.push(`my-btn-shape-${shape}`)
    }
    if (loading) {
      classes.push('my-btn-loading')
    }
    if (long) {
      classes.push('my-btn-long')
    }
    // 用户自定义的 className（如果有的话）
    if (className) {
      classes.push(className)
    }

    return classes.join(' ') // 最后把数组拼成字符串
  }, [type, status, size, shape, loading, long, className])

  const loadingIcon = loading ? <span className="my-btn-loading-icon" /> : null

  const iconNode = loading ? loadingIcon : icon

  const content =
    loading && loadingFixedWidth ? (
      // loading + loadingFixedWidth=加载图标+文字隐藏
      <>
        {iconNode}
        <span style={{ visibility: 'hidden' }}>{children}</span>
      </>
    ) : loading ? (
      // 只有loading时显示图标
      <>{iconNode}</>
    ) : (
      // 普通情况是加载图标+文字
      <>
        {iconNode}
        {children}
      </>
    )

  if (as == 'a') {
    return (
      <a
        className={classNames}
        style={style}
        href={href}
        target={target}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      {...restProps}
      className={classNames}
      style={style}
      type={htmlType}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default Button
