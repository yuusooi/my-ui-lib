import './index.css'
import type { InputHTMLAttributes, ReactNode, ChangeEvent } from 'react'
import React, {
  forwardRef,
  useLayoutEffect,
  useState,
  useRef,
  useImperativeHandle,
} from 'react'

// Input组件的属性接口
// 原生input有的属性(placeholder,disabled,auto Focus等)
// 只需向InputHTMLAttributes<HTMLInputElement>继承即可
// 无需一个个重新定义，只需要添加我们特有的属性(prefix,suffix)即可

// 继承原生 input 的所有属性
export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix' | 'suffix'
> {
  // 特有属性
  // 前缀图标
  prefix?: ReactNode //ReactNode表示可以是 JSX、字符串、数字等
  // 后缀图标
  suffix?: ReactNode
  // 是否禁用
  disabled?: boolean
  // 错误状态
  error?: boolean
  // 尺寸
  size?: 'mini' | 'small' | 'default' | 'large'
  // 是否显示清除按钮 点击一键清空输入
  allowClear?: boolean
  // 是否显示子数统计 如11/100
  showCount?: boolean
  // 最大长度 与showCount一起使用
  maxLength?: number
  // 切换按钮 显示/隐藏按钮
  visibilityToggle?: boolean
}

const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // 解构props,提取所需属性
  const {
    prefix,
    suffix,
    className,
    style,
    size = 'default',
    error = false,
    disabled = false,
    allowClear = false,
    showCount = false,
    maxLength,
    visibilityToggle = false,
    value, //受控组件的值
    defaultValue, //受控组件的默认值
    onChange, //值变化时的回调
    ...restProps
  } = props

  // 状态管理
  // 存储非受控组件的输入值
  const [internalValue, setInternalValue] = useState<string>(
    // 如果组件是受控的，有value用value
    // 有默认值用默认值，否则用''
    (value ?? defaultValue ?? '') as string
  )

  // 密码可见性状态
  const [pwdVisible, setPwdVisible] = useState(false)

  // 受控优先，计算当前应该使用的值
  const currentValue = value !== undefined ? String(value) : internalValue

  // 事件处理函数
  // 处理输入变化:同时更新内部状态和触发onChange
  // 非受控组件需要更新internalValue
  // 受控组件需要触发onChange通知父组件
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    // 更新非受控组件内部状态
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onChange?.(event)
  }

  // 清除输入内容：手动触发onChange
  // 父组件需要监控值，受控组件需要通知父组件更新value
  const handleClear = () => {
    // 创建一个模拟的事件对象
    const event = {
      target: { value: '' },
    } as ChangeEvent<HTMLInputElement>

    // 更新内部状态
    if (value === undefined) {
      setInternalValue('')
    }
    onChange?.(event) //触发onChange
  }

  // 切换密码可见性
  const handleTogglePassword = () => {
    setPwdVisible(!pwdVisible)
  }

  const classNames = ['my-input']

  if (size !== 'default') {
    classNames.push(`my-input-${size}`)
  }

  if (error) {
    classNames.push('my-input-error')
  }

  if (disabled) {
    classNames.push('my-input-disabled')
  }

  if (className) {
    classNames.push(className)
  }

  const wrapperClassNames = ['my-input-wrapper']

  if (error) {
    wrapperClassNames.push('my-input-wrapper-error')
  }

  // 计算input的type属性
  // 如果是pwd类型并且开启了visibilityToggle则需要根据pwdVisible状态切换text/pwd
  const inputType =
    props.type === 'password' && visibilityToggle
      ? pwdVisible
        ? 'text'
        : 'password'
      : props.type || 'text'

  // 计算是否显示清除按钮
  const showClearButton = allowClear && currentValue && !disabled

  // 计算后缀内容（清除按钮、密码切换、字数统计）
  const suffixContent = (
    <>
      {suffix}

      {showClearButton && (
        <div
          className="my-input-clear-icon"
          onClick={handleClear}
          style={{ cursor: 'pointer' }}
        >
          ❌
        </div>
      )}

      {props.type === 'password' && visibilityToggle && (
        <div
          className="my-input-password-toggle"
          onClick={handleTogglePassword}
          style={{ cursor: 'pointer', marginLeft: suffix ? '8px' : '0' }}
        >
          {pwdVisible ? '👁️' : '👁️‍🗨️'}
        </div>
      )}

      {showCount && (
        <span className="my-input-count">
          {currentValue.length}
          {maxLength && `/${maxLength}`}
        </span>
      )}
    </>
  )

  return (
    <div className={wrapperClassNames.join(' ')} style={style}>
      {prefix && <div className="my-input-prefix">{prefix}</div>}

      <input
        ref={ref}
        type={inputType}
        className={classNames.join(' ')}
        disabled={disabled}
        value={currentValue}
        onChange={handleChange}
        maxLength={maxLength}
        {...restProps}
      />

      {suffixContent && <div className="my-input-suffix">{suffixContent}</div>}
    </div>
  )
})
BaseInput.displayName = 'Input'

// TextArea接口属性
//
// export interface TextAreaProps extends Omit<InputProps,'type'|'onChange'|'onKeyDown' | 'prefix' | 'suffix'> {
//     // 自适应高度配置
//     autoSize?: boolean | {minRows?:number; maxRows?:number};
//     // 按下Enter键时的回调(和Input和onPressEnter区分开)
//     onPressEnter?: (event:React.KeyboardEvent<HTMLTextAreaElement>) => void;

//     onChange?: (event:React.ChangeEvent<HTMLTextAreaElement>) => void;
//     // 重写onKeyDown类型
//     onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
// }

export interface TextAreaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'size'
> {
  // 尺寸
  size?: 'mini' | 'small' | 'default' | 'large'

  // 状态
  disabled?: boolean
  error?: boolean

  // 功能
  allowClear?: boolean
  showCount?: boolean
  maxLength?: number
  autoSize?: boolean | { minRows?: number; maxRows?: number }
  onPressEnter?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

// 解构props
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    // 注意这里接收了 ref
    const {
      autoSize = false,
      onPressEnter,
      value,
      defaultValue,
      onChange,
      onKeyDown,
      className,
      style,
      size = 'default',
      error = false,
      disabled = false,
      allowClear = false,
      showCount = false,
      maxLength,
      ...restProps
    } = props

    // 状态管理
    // 内部值（非受控组件）
    const [internalValue, setInternalValue] = useState<string>(
      (value ?? defaultValue ?? '') as string
    )

    // 计算当前值
    const currentValue =
      value !== undefined ? (value as string) : (internalValue as string)

    // 自适应高度逻辑
    // textarea的DOM引用:使用useRef，直接操作DOM读取scrollHeight
    // forwardRef传进来的ref交给父组件使用，内部需要拎一个ref来操作DOM
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    // 使用 useImperativeHandle 暴露 ref 给父组件
    useImperativeHandle(ref, () => textAreaRef.current!)

    // 计算自适应高度
    // 使用useLayoutEffect在DOM更新后，浏览器绘制前同步执行
    // 可以避免高度计算是的闪烁问题
    // useEffect是浏览器绘制好异步执行，可能会先看到旧高度再看见新高度的闪烁
    useLayoutEffect(() => {
      if (!autoSize || !textAreaRef.current) return

      const textArea = textAreaRef.current!

      // 1.重置高度为auto
      // 让内容减少时scrollHeight高度能缩小，可以使得textarea紧贴内容
      textArea.style.height = 'auto'

      // 2. 获取实际内容高度
      const scrollHeight = textArea.scrollHeight

      // 3. 计算最小和最大高度
      let minHeight = 'auto'
      let maxHeight = 'none'

      if (typeof autoSize === 'object') {
        // 通过设置rows = 1测量，计算单行高度
        // 动态计算单行高度
        // 因为不同字体和浏览器的单行高度可能不同，动态测量一次最准确
        const singleLineHeight = textArea.scrollHeight

        // 计算最小高度
        if (autoSize.minRows) {
          minHeight = `${singleLineHeight * autoSize.minRows}px`
        }

        // 计算最大高度
        if (autoSize.maxRows) {
          maxHeight = `${singleLineHeight * autoSize.maxRows}px`
        }
      }
      // 4. 应用高度
      let finalHeight = scrollHeight

      // 限制在最小和最大高度之间
      if (minHeight !== 'auto') {
        const min = parseInt(minHeight)
        if (finalHeight < min) finalHeight = min
      }

      if (maxHeight !== 'none') {
        const max = parseInt(maxHeight)
        if (finalHeight > max) finalHeight = max
      }

      textArea.style.height = `${finalHeight}px`
    }, [currentValue, autoSize])

    // 事件处理
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value

      // 更新内部状态
      if (value === undefined) {
        setInternalValue(newValue)
      }

      // 触发onChange
      onChange?.(event)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // 监听Enter键
      if (event.key === 'Enter' && !event.shiftKey) {
        onPressEnter?.(event)
      }
      // 调用父组件传进来的onKeyDown
      onKeyDown?.(event)
    }

    const handleClear = () => {
      const event = {
        target: { value: '' },
      } as React.ChangeEvent<HTMLTextAreaElement>

      if (value === undefined) {
        setInternalValue('')
      }

      onChange?.(event)
    }

    // 计算类名
    const classNames = ['my-textarea']
    if (size !== 'default') {
      classNames.push(`my-textarea-${size}`)
    }
    if (error) {
      classNames.push('my-textarea-error')
    }
    if (disabled) {
      classNames.push('my-textarea-disabled')
    }
    if (className) {
      classNames.push(className)
    }

    // 计算样式
    const textAreaStyle: React.CSSProperties = {
      ...style,
      resize: autoSize ? 'none' : 'vertical', //自适应时禁用手动调整
      overflow: autoSize ? 'hidden' : 'auto', //超出时显示滚动条
    }

    // 计算是否清除按钮
    const showClearButton = allowClear && currentValue && !disabled

    // 渲染
    return (
      <div className="my-textarea-wrapper">
        <textarea
          ref={textAreaRef}
          className={classNames.join(' ')}
          style={textAreaStyle}
          disabled={disabled}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          {...restProps}
        />

        {/* 底部工具栏（清除按钮 + 字数统计） */}
        {(showClearButton || showCount) && (
          <div className="my-textarea-footer">
            <div style={{ flex: 1 }} />

            {showClearButton && (
              <div className="my-textarea-clear-icon" onClick={handleClear}>
                ❌
              </div>
            )}

            {showCount && (
              <span className="my-textarea-count">
                {currentValue.length}
                {maxLength && `/${maxLength}`}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

// Input.Group组件
// 组合多个输入框/同一管理样式（圆角、间距）/支持紧凑模式（无间隔）
// Group的属性接口
export interface GroupProps {
  // 子元素，一般是Input组件
  children: ReactNode
  // 是否紧凑模式，去掉中间的边框
  compact?: boolean
  // 自定义样式和类名
  style?: React.CSSProperties
  className?: string
}

const Group: React.FC<GroupProps> = ({
  children,
  compact = false,
  className,
  style,
}) => {
  // 计算类名
  const classNames = ['my-input-group']

  if (compact) {
    classNames.push('my-input-group-compact')
  }

  if (className) {
    classNames.push(className)
  }

  return (
    <div className={classNames.join(' ')} style={style}>
      {children}
    </div>
  )
}

Group.displayName = 'Input.Group'

// 定义复合组件类型
type InputComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
> & {
  TextArea: typeof TextArea
  Group: typeof Group
}

// 将 InternalInput 转换为 InputComponent 类型，并赋值给 Input
const Input = BaseInput as InputComponent

// 实际挂载静态属性
Input.TextArea = TextArea
Input.Group = Group

// 单独导出子组件
export { TextArea, Group }

// 导出 Input
export { Input }
export default Input
