import{r as j,R as z,j as e}from"./iframe-FRnsl5h-.js";import"./preload-helper-PPVm8Dsz.js";const r=({children:g,direction:v="horizontal",size:a="small",align:y="center",wrap:k=!1,split:h,className:S,style:w})=>{const R=j.useMemo(()=>typeof a=="number"?`${a}px`:typeof a=="string"?{small:"8px",middle:"16px",large:"24px"}[a]||a:"8px",[a]),n=["my-space"];v==="vertical"&&n.push("my-space-vertical"),y!=="center"&&n.push(`my-space-align-${y}`),k&&n.push("my-space-wrap"),S&&n.push(S);const f=z.Children.toArray(g).filter(t=>t!=null&&t!==!1),B=()=>f.map((t,b)=>h&&j.isValidElement(h)&&b<f.length-1?e.jsxs(z.Fragment,{children:[e.jsx("div",{className:"my-space-item",children:t}),e.jsx("div",{className:"my-space-split",children:h})]},b):e.jsx("div",{className:"my-space-item",children:t},b));return e.jsx("div",{className:n.join(" "),style:{"--space-size":R,...w},children:B()})};r.__docgenInfo={description:`Space 间距组件

设置组件之间的间距。使用现代 CSS gap 属性实现，避免使用 margin 的常见问题。

@example
\`\`\`tsx
// 基础用法
<Space>按钮1 按钮2 按钮3</Space>

// 垂直排列
<Space direction="vertical">内容1 内容2 内容3</Space>

// 自定义间距
<Space size={16}>按钮1 按钮2</Space>
<Space size="large">按钮1 按钮2</Space>

// 对齐方式
<Space align="start">
  <div>短文本</div>
  <div>长文本内容</div>
</Space>

// 自动换行
<Space wrap>
  {Array.from({ length: 10 }).map((_, i) => (
    <button key={i}>按钮{i + 1}</button>
  ))}
</Space>

// 带分隔符
<Space split={<span>|</span>}>
  <a href="#">链接1</a>
  <a href="#">链接2</a>
  <a href="#">链接3</a>
</Space>
\`\`\``,methods:[],displayName:"Space",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`排列方向
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"number | string | 'small' | 'middle' | 'large'",elements:[{name:"number"},{name:"string"},{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"}]},description:`间距大小
- number: 直接指定像素值
- string: 自定义值（如 '16px', '1rem'）
- 'small': 8px
- 'middle': 16px
- 'large': 24px
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"}]},description:`对齐方式（仅当 direction 为 horizontal 时有效）
@default 'center'`,defaultValue:{value:"'center'",computed:!1}},wrap:{required:!1,tsType:{name:"boolean"},description:`是否自动换行
@default false`,defaultValue:{value:"false",computed:!1}},split:{required:!1,tsType:{name:"ReactNode"},description:"分隔符"},className:{required:!1,tsType:{name:"string"},description:"自定义样式类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const C={title:"布局/Space",component:r,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"],description:"排列方向"},size:{control:"select",options:["small","middle","large","8","16","24"],description:"间距大小"},align:{control:"select",options:["start","end","center","baseline"],description:"对齐方式"},wrap:{control:"boolean",description:"是否自动换行"}}},i={name:"基础用法",render:()=>e.jsxs(r,{children:[e.jsx("button",{children:"按钮1"}),e.jsx("button",{children:"按钮2"}),e.jsx("button",{children:"按钮3"})]})},o={name:"垂直间距",render:()=>e.jsxs(r,{direction:"vertical",children:[e.jsx("div",{children:"第一行内容"}),e.jsx("div",{children:"第二行内容"}),e.jsx("div",{children:"第三行内容"})]})},s={name:"间距大小",render:()=>e.jsxs(r,{direction:"vertical",size:"large",children:[e.jsxs(r,{children:[e.jsx("button",{children:"Small (8px)"}),e.jsx("button",{children:"按钮"})]}),e.jsxs(r,{size:"middle",children:[e.jsx("button",{children:"Middle (16px)"}),e.jsx("button",{children:"按钮"})]}),e.jsxs(r,{size:"large",children:[e.jsx("button",{children:"Large (24px)"}),e.jsx("button",{children:"按钮"})]}),e.jsxs(r,{size:32,children:[e.jsx("button",{children:"Custom (32px)"}),e.jsx("button",{children:"按钮"})]})]})},d={name:"对齐方式",render:()=>e.jsxs(r,{direction:"vertical",size:"large",children:[e.jsxs(r,{align:"start",children:[e.jsx("button",{children:"Start 对齐"}),e.jsx("div",{style:{padding:"8px 16px",background:"var(--component-hover-bg)"},children:"较高的内容块"})]}),e.jsxs(r,{align:"center",children:[e.jsx("button",{children:"Center 对齐"}),e.jsx("div",{style:{padding:"8px 16px",background:"var(--component-hover-bg)"},children:"较高的内容块"})]}),e.jsxs(r,{align:"end",children:[e.jsx("button",{children:"End 对齐"}),e.jsx("div",{style:{padding:"8px 16px",background:"var(--component-hover-bg)"},children:"较高的内容块"})]}),e.jsxs(r,{align:"baseline",children:[e.jsx("button",{style:{fontSize:"14px"},children:"Baseline 对齐"}),e.jsx("div",{style:{padding:"8px 16px",background:"var(--component-hover-bg)",fontSize:"20px"},children:"较大的字体"})]})]})},c={name:"自动换行",render:()=>e.jsx(r,{wrap:!0,children:Array.from({length:27}).map((g,v)=>e.jsxs("button",{children:["按钮 ",v+1]},v))})},l={name:"带分隔符",render:()=>e.jsxs(r,{split:e.jsx("span",{style:{color:"var(--text-color-secondary)"},children:"|"}),children:[e.jsx("a",{href:"#",children:"首页"}),e.jsx("a",{href:"#",children:"产品"}),e.jsx("a",{href:"#",children:"关于"}),e.jsx("a",{href:"#",children:"联系"})]})},p={name:"垂直分隔符",render:()=>e.jsxs(r,{direction:"vertical",split:e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:0}}),children:[e.jsx("div",{children:"第一条内容"}),e.jsx("div",{children:"第二条内容"}),e.jsx("div",{children:"第三条内容"})]})},u={name:"混合使用",render:()=>e.jsx("div",{style:{padding:"24px",background:"var(--component-bg, #fff)",borderRadius:"8px"},children:e.jsxs(r,{direction:"vertical",size:"middle",style:{width:"100%"},children:[e.jsxs(r,{align:"start",children:[e.jsx("div",{style:{width:"50px",height:"50px",background:"var(--component-hover-bg)",borderRadius:"4px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:"标题"}),e.jsx("div",{style:{color:"var(--text-color-secondary)",fontSize:"12px"},children:"描述文本"})]})]}),e.jsxs(r,{align:"start",children:[e.jsx("div",{style:{width:"50px",height:"50px",background:"var(--component-hover-bg)",borderRadius:"4px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:"标题"}),e.jsx("div",{style:{color:"var(--text-color-secondary)",fontSize:"12px"},children:"描述文本"})]})]}),e.jsxs(r,{align:"start",children:[e.jsx("div",{style:{width:"50px",height:"50px",background:"var(--component-hover-bg)",borderRadius:"4px"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:"标题"}),e.jsx("div",{style:{color:"var(--text-color-secondary)",fontSize:"12px"},children:"描述文本"})]})]})]})})},m={name:"紧凑布局",render:()=>e.jsx(r,{direction:"vertical",size:"large",style:{width:"300px"},children:e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"用户登录"}),e.jsxs(r,{direction:"vertical",size:"middle",style:{width:"100%"},children:[e.jsx("input",{type:"text",placeholder:"用户名",style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid var(--border-color)"}}),e.jsx("input",{type:"password",placeholder:"密码",style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid var(--border-color)"}}),e.jsxs(r,{style:{width:"100%"},children:[e.jsx("button",{style:{flex:1,padding:"8px",background:"var(--primary-color)",color:"var(--primary-text-color)",border:"none",borderRadius:"4px",cursor:"pointer"},children:"登录"}),e.jsx("button",{style:{flex:1,padding:"8px",background:"var(--component-bg)",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:"4px",cursor:"pointer"},children:"注册"})]})]})]})})},x={name:"暗黑模式",render:()=>e.jsxs(r,{direction:"vertical",size:"middle",children:[e.jsxs(r,{children:[e.jsx("button",{children:"按钮1"}),e.jsx("button",{children:"按钮2"}),e.jsx("button",{children:"按钮3"})]}),e.jsxs(r,{direction:"vertical",children:[e.jsx("div",{children:"第一行内容"}),e.jsx("div",{children:"第二行内容"}),e.jsx("div",{children:"第三行内容"})]})]}),parameters:{backgrounds:{default:"dark",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#191919"}]}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <Space>
      <button>按钮1</button>
      <button>按钮2</button>
      <button>按钮3</button>
    </Space>
}`,...i.parameters?.docs?.source},description:{story:"基础用法 - 设置组件之间的间距",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '垂直间距',
  render: () => <Space direction="vertical">
      <div>第一行内容</div>
      <div>第二行内容</div>
      <div>第三行内容</div>
    </Space>
}`,...o.parameters?.docs?.source},description:{story:"垂直间距 - 垂直排列子元素",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '间距大小',
  render: () => <Space direction="vertical" size="large">
      <Space>
        <button>Small (8px)</button>
        <button>按钮</button>
      </Space>
      <Space size="middle">
        <button>Middle (16px)</button>
        <button>按钮</button>
      </Space>
      <Space size="large">
        <button>Large (24px)</button>
        <button>按钮</button>
      </Space>
      <Space size={32}>
        <button>Custom (32px)</button>
        <button>按钮</button>
      </Space>
    </Space>
}`,...s.parameters?.docs?.source},description:{story:"间距大小 - 使用预设的间距大小",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '对齐方式',
  render: () => <Space direction="vertical" size="large">
      <Space align="start">
        <button>Start 对齐</button>
        <div style={{
        padding: '8px 16px',
        background: 'var(--component-hover-bg)'
      }}>
          较高的内容块
        </div>
      </Space>
      <Space align="center">
        <button>Center 对齐</button>
        <div style={{
        padding: '8px 16px',
        background: 'var(--component-hover-bg)'
      }}>
          较高的内容块
        </div>
      </Space>
      <Space align="end">
        <button>End 对齐</button>
        <div style={{
        padding: '8px 16px',
        background: 'var(--component-hover-bg)'
      }}>
          较高的内容块
        </div>
      </Space>
      <Space align="baseline">
        <button style={{
        fontSize: '14px'
      }}>Baseline 对齐</button>
        <div style={{
        padding: '8px 16px',
        background: 'var(--component-hover-bg)',
        fontSize: '20px'
      }}>
          较大的字体
        </div>
      </Space>
    </Space>
}`,...d.parameters?.docs?.source},description:{story:"对齐方式 - 设置子元素的对齐方式",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '自动换行',
  render: () => <Space wrap>
      {Array.from({
      length: 27
    }).map((_, i) => <button key={i}>按钮 {i + 1}</button>)}
    </Space>
}`,...c.parameters?.docs?.source},description:{story:"自动换行 - 超出宽度时自动换行",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '带分隔符',
  render: () => <Space split={<span style={{
    color: 'var(--text-color-secondary)'
  }}>|</span>}>
      <a href="#">首页</a>
      <a href="#">产品</a>
      <a href="#">关于</a>
      <a href="#">联系</a>
    </Space>
}`,...l.parameters?.docs?.source},description:{story:"带分隔符 - 在子元素之间添加分隔符",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '垂直分隔符',
  render: () => <Space direction="vertical" split={<hr style={{
    border: 'none',
    borderTop: '1px solid var(--border-color)',
    margin: 0
  }} />}>
      <div>第一条内容</div>
      <div>第二条内容</div>
      <div>第三条内容</div>
    </Space>
}`,...p.parameters?.docs?.source},description:{story:"垂直分隔符 - 垂直排列时分隔符的使用",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '混合使用',
  render: () => <div style={{
    padding: '24px',
    background: 'var(--component-bg, #fff)',
    borderRadius: '8px'
  }}>
      <Space direction="vertical" size="middle" style={{
      width: '100%'
    }}>
        <Space align="start">
          <div style={{
          width: '50px',
          height: '50px',
          background: 'var(--component-hover-bg)',
          borderRadius: '4px'
        }} />
          <div>
            <div style={{
            fontWeight: 'bold',
            marginBottom: '4px'
          }}>标题</div>
            <div style={{
            color: 'var(--text-color-secondary)',
            fontSize: '12px'
          }}>描述文本</div>
          </div>
        </Space>
        <Space align="start">
          <div style={{
          width: '50px',
          height: '50px',
          background: 'var(--component-hover-bg)',
          borderRadius: '4px'
        }} />
          <div>
            <div style={{
            fontWeight: 'bold',
            marginBottom: '4px'
          }}>标题</div>
            <div style={{
            color: 'var(--text-color-secondary)',
            fontSize: '12px'
          }}>描述文本</div>
          </div>
        </Space>
        <Space align="start">
          <div style={{
          width: '50px',
          height: '50px',
          background: 'var(--component-hover-bg)',
          borderRadius: '4px'
        }} />
          <div>
            <div style={{
            fontWeight: 'bold',
            marginBottom: '4px'
          }}>标题</div>
            <div style={{
            color: 'var(--text-color-secondary)',
            fontSize: '12px'
          }}>描述文本</div>
          </div>
        </Space>
      </Space>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"混合使用 - 各种属性的组合使用",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '紧凑布局',
  render: () => <Space direction="vertical" size="large" style={{
    width: '300px'
  }}>
      <div>
        <div style={{
        marginBottom: '8px',
        fontWeight: 'bold'
      }}>用户登录</div>
        <Space direction="vertical" size="middle" style={{
        width: '100%'
      }}>
          <input type="text" placeholder="用户名" style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid var(--border-color)'
        }} />
          <input type="password" placeholder="密码" style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid var(--border-color)'
        }} />
          <Space style={{
          width: '100%'
        }}>
            <button style={{
            flex: 1,
            padding: '8px',
            background: 'var(--primary-color)',
            color: 'var(--primary-text-color)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
              登录
            </button>
            <button style={{
            flex: 1,
            padding: '8px',
            background: 'var(--component-bg)',
            color: 'var(--text-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
              注册
            </button>
          </Space>
        </Space>
      </div>
    </Space>
}`,...m.parameters?.docs?.source},description:{story:"紧凑布局 - 在表单中的实际应用",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '暗黑模式',
  render: () => <Space direction="vertical" size="middle">
      <Space>
        <button>按钮1</button>
        <button>按钮2</button>
        <button>按钮3</button>
      </Space>
      <Space direction="vertical">
        <div>第一行内容</div>
        <div>第二行内容</div>
        <div>第三行内容</div>
      </Space>
    </Space>,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'light',
        value: '#ffffff'
      }, {
        name: 'dark',
        value: '#191919'
      }]
    }
  }
}`,...x.parameters?.docs?.source},description:{story:"暗黑模式 - 在暗黑主题下的效果",...x.parameters?.docs?.description}}};const V=["Basic","Vertical","Size","Align","Wrap","WithSplit","VerticalSplit","Combined","FormLayout","DarkMode"];export{d as Align,i as Basic,u as Combined,x as DarkMode,m as FormLayout,s as Size,o as Vertical,p as VerticalSplit,l as WithSplit,c as Wrap,V as __namedExportsOrder,C as default};
