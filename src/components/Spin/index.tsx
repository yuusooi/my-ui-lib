import React from 'react'
import type { SpinProps, SpinSize } from './types'
import './style.css'

const Spin: React.FC<SpinProps> = ({
  spinning = true,
  size = 'default',
  tip,
  children,
  className,
  style,
}) => {
  // 判断是否为包裹模式：如果有 children，启用包裹模式
  const isWrapperMode = children !== undefined

  // 渲染旋转的加载图标
  const renderSpinner = () => {
    return (
      <div className="my-spinner">
        <svg
          className="my-spinner-icon"
          viewBox="0 0 1024 1024"
          focusable="false"
          aria-hidden="true"
        >
          {/* 使用描边圆圈实现旋转效果 */}
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z" />
        </svg>
        {/* 提示文字 */}
        {tip && <div className="my-spinner-tip">{tip}</div>}
      </div>
    )
  }

  // 独立使用
  // 直接渲染加载指示器
  if (!isWrapperMode) {
    // 如果不处于加载状态，返回 null
    if (!spinning) {
      return null
    }

    // 构建 class 列表
    const classNames = ['my-spin', `my-spin-${size}`]

    if (className) {
      classNames.push(className)
    }

    return (
      <div className={classNames.join(' ')} style={style}>
        {renderSpinner()}
      </div>
    )
  }

  // 包裹模式
  // 渲染遮罩层 + 内容
  const wrapperClassNames = ['my-spin-nested-wrapper']

  if (className) {
    wrapperClassNames.push(className)
  }

  return (
    <div className={wrapperClassNames.join(' ')} style={style}>
      {/* 1. 先渲染 children 内容 */}
      <div className="my-spin-nested-content">{children}</div>

      {/* 2. 如果 spinning 为 true，渲染遮罩层 */}
      {spinning && (
        <div className="my-spin-nested-loading" aria-busy="true">
          {renderSpinner()}
        </div>
      )}
    </div>
  )
}

export default Spin
export type { SpinProps, SpinSize }
