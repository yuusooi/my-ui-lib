import { useState } from 'react'
import './test.css'
import Button from './components/Button'

/**
 * Button 组件测试页面
 * 提供各种 Button 使用场景的测试用例
 */
export default function Test() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    console.log('Button clicked!')
  }

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="test-container">
      <h1 style={{ marginBottom: '40px' }}>Button 组件测试</h1>

      {/* ========== 1. 按钮类型 ========== */}
      <section className="test-section">
        <h2>1. 按钮类型 (Type)</h2>
        <div className="test-row">
          <span className="test-label">Default:</span>
          <Button>默认按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Primary:</span>
          <Button type="primary">主要按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Secondary:</span>
          <Button type="secondary">次要按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Dashed:</span>
          <Button type="dashed">虚线按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Text:</span>
          <Button type="text">文字按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Outline:</span>
          <Button type="outline">线框按钮</Button>
        </div>
      </section>

      {/* ========== 2. 按钮状态 ========== */}
      <section className="test-section">
        <h2>2. 按钮状态 (Status)</h2>
        <div className="test-row">
          <span className="test-label">Warning:</span>
          <Button type="primary" status="warning">
            警告按钮
          </Button>
          <Button status="warning">警告按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Danger:</span>
          <Button type="primary" status="danger">
            危险按钮
          </Button>
          <Button status="danger">危险按钮</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Success:</span>
          <Button type="primary" status="success">
            成功按钮
          </Button>
          <Button status="success">成功按钮</Button>
        </div>
      </section>

      {/* ========== 3. 按钮尺寸 ========== */}
      <section className="test-section">
        <h2>3. 按钮尺寸 (Size)</h2>
        <div className="test-row">
          <span className="test-label">Mini:</span>
          <Button type="primary" size="mini">
            Mini
          </Button>
          <Button size="mini">Mini</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Small:</span>
          <Button type="primary" size="small">
            Small
          </Button>
          <Button size="small">Small</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Default:</span>
          <Button type="primary" size="default">
            Default
          </Button>
          <Button size="default">Default</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Large:</span>
          <Button type="primary" size="large">
            Large
          </Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      {/* ========== 4. 按钮形状 ========== */}
      <section className="test-section">
        <h2>4. 按钮形状 (Shape)</h2>
        <div className="test-row">
          <span className="test-label">Square:</span>
          <Button type="primary" shape="square">
            Square
          </Button>
          <Button shape="square">Square</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Round:</span>
          <Button type="primary" shape="round">
            Round
          </Button>
          <Button shape="round">Round</Button>
        </div>
        <div className="test-row">
          <span className="test-label">Circle:</span>
          <Button type="primary" shape="circle" icon="●" />
          <Button shape="circle" icon="●" />
        </div>
      </section>

      {/* ========== 5. Loading 状态 ========== */}
      <section className="test-section">
        <h2>5. Loading 状态</h2>
        <div className="test-row">
          <span className="test-label">Loading:</span>
          <Button type="primary" loading>
            加载中...
          </Button>
          <Button loading>加载中...</Button>
          <Button type="dashed" loading>
            加载中...
          </Button>
          <Button type="text" loading>
            加载中...
          </Button>
        </div>
        <div className="test-row">
          <span className="test-label">切换:</span>
          <Button type="primary" loading={loading} onClick={handleLoadingClick}>
            {loading ? '加载中...' : '点击加载'}
          </Button>
        </div>
      </section>

      {/* ========== 6. 图标按钮 ========== */}
      <section className="test-section">
        <h2>6. 图标按钮 (Icon)</h2>
        <div className="test-row">
          <span className="test-label">With Icon:</span>
          <Button type="primary" icon="★">
            主要按钮
          </Button>
          <Button icon="★">默认按钮</Button>
          <Button type="dashed" icon="★">
            虚线按钮
          </Button>
        </div>
        <div className="test-row">
          <span className="test-label">Icon Only:</span>
          <Button type="primary" icon="★" iconOnly />
          <Button icon="★" iconOnly />
          <Button type="dashed" icon="★" iconOnly />
        </div>
      </section>

      {/* ========== 7. 链接按钮 ========== */}
      <section className="test-section">
        <h2>7. 链接按钮 (Href)</h2>
        <div className="test-row">
          <span className="test-label">Href:</span>
          <Button type="primary" href="https://arco.design" target="_blank">
            Arco Design (新窗口)
          </Button>
          <Button href="https://arco.design">Arco Design (当前窗口)</Button>
        </div>
      </section>

      {/* ========== 8. 布局 ========== */}
      <section className="test-section">
        <h2>8. 长按钮 (Long)</h2>
        <div className="test-row">
          <span className="test-label">Long:</span>
          <Button type="primary" long>
            长按钮
          </Button>
        </div>
      </section>

      {/* ========== 9. 禁用状态 ========== */}
      <section className="test-section">
        <h2>9. 禁用状态 (Disabled)</h2>
        <div className="test-row">
          <span className="test-label">Disabled:</span>
          <Button type="primary" disabled>
            主要按钮
          </Button>
          <Button disabled>默认按钮</Button>
          <Button type="dashed" disabled>
            虚线按钮
          </Button>
          <Button type="text" disabled>
            文字按钮
          </Button>
        </div>
      </section>

      {/* ========== 10. 事件处理 ========== */}
      <section className="test-section">
        <h2>10. 事件处理 (onClick)</h2>
        <div className="test-row">
          <span className="test-label">Click:</span>
          <Button type="primary" onClick={handleClick}>
            点击我
          </Button>
          <Button onClick={handleClick}>点击我</Button>
        </div>
      </section>

      {/* ========== 11. 综合示例 ========== */}
      <section className="test-section">
        <h2>11. 综合示例</h2>
        <div className="test-row">
          <Button type="primary" status="danger" size="large" icon="★">
            大型危险按钮
          </Button>
          <Button type="dashed" shape="round" icon="●">
            圆角虚线按钮
          </Button>
          <Button type="text" status="success" icon="✓">
            成功操作
          </Button>
        </div>
      </section>
    </div>
  )
}
