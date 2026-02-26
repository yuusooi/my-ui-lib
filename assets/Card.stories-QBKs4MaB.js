import{j as e}from"./iframe-BblueGYI.js";import"./preload-helper-PPVm8Dsz.js";const r=({title:f,extra:y,children:b,bordered:j=!0,hoverable:v=!1,shadow:C="base",className:S,style:w,onClick:a,bodyStyle:k,headStyle:T})=>{const t=["my-card"];j||t.push("my-card-bordered"),v&&t.push("my-card-hoverable"),!v&&C!=="base"&&t.push(`my-card-shadow-${C}`),S&&t.push(S);const B=()=>!f&&!y?null:e.jsxs("div",{className:"my-card-head",style:T,children:[f&&e.jsx("div",{className:"my-card-head-title",children:f}),y&&e.jsx("div",{className:"my-card-head-extra",children:y})]});return e.jsxs("div",{className:t.join(" "),style:w,onClick:a,role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:a?g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a())}:void 0,children:[B(),b&&e.jsx("div",{className:"my-card-body",style:k,children:b})]})};r.__docgenInfo={description:`Card 卡片组件

通用卡片容器，可包含标题、额外操作和内容。支持双主题、多种阴影级别和悬停效果。

@example
\`\`\`tsx
// 基础用法
<Card title="卡片标题">卡片内容</Card>

// 带 extra
<Card
  title="卡片标题"
  extra={<a href="#">更多</a>}
>
  卡片内容
</Card>

// 可悬停
<Card hoverable title="悬停试试">悬停会有阴影效果</Card>

// 自定义阴影
<Card shadow="float" title="浮起阴影">更明显的阴影</Card>

// 无边框
<Card bordered={false} title="无边框">没有边框的卡片</Card>

// 只有内容
<Card>纯内容卡片</Card>
\`\`\``,methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"卡片标题"},extra:{required:!1,tsType:{name:"ReactNode"},description:"标题右侧的额外操作区域（如按钮、链接等）"},children:{required:!1,tsType:{name:"ReactNode"},description:"卡片内容"},bordered:{required:!1,tsType:{name:"boolean"},description:`是否显示边框
@default true`,defaultValue:{value:"true",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:`是否可悬停（悬停时添加阴影效果）
@default false`,defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:"'base' | 'float' | 'none'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'float'"},{name:"literal",value:"'none'"}]},description:"阴影级别\n- `base`: 基础阴影（默认）\n- `float`: 浮起阴影（更明显的阴影）\n- `none`: 无阴影\n@default 'base'",defaultValue:{value:"'base'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义样式类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击卡片时的回调函数"},bodyStyle:{required:!1,tsType:{name:"CSSProperties"},description:"卡片内容的样式"},headStyle:{required:!1,tsType:{name:"CSSProperties"},description:"卡片头部区域的样式"}}};const R={title:"数据展示/Card",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"卡片标题"},extra:{control:"text",description:"标题右侧的额外内容"},bordered:{control:"boolean",description:"是否显示边框"},hoverable:{control:"boolean",description:"是否可悬停（悬停时添加阴影效果）"},shadow:{control:"select",options:["base","float","none"],description:"阴影级别"}}},s={name:"基础用法",args:{title:"默认标题",children:"这是一个基础的卡片组件，包含标题、内容区域。"}},o={name:"带额外内容",args:{title:"卡片标题",extra:e.jsx("a",{href:"#",children:"查看更多"}),children:`
      卡片标题右侧可以放置操作按钮、链接等额外内容。
      通过设置 extra 属性来实现。
    `}},n={name:"无边框",args:{title:"无边框卡片",bordered:!1,children:"通过设置 bordered={false} 可以移除卡片的边框。"}},d={name:"可悬停",args:{title:"悬停试试",hoverable:!0,children:"鼠标悬停在这个卡片上，会看到浮起的阴影效果。"}},i={name:"浮起阴影",args:{title:"浮起阴影",shadow:"float",children:'使用 shadow="float" 可以获得更明显的阴影效果。'}},l={name:"无阴影",args:{title:"无阴影",shadow:"none",bordered:!0,children:'通过设置 shadow="none" 可以完全移除阴影。'}},c={name:"灵活的内容",args:{title:"文章卡片",extra:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"4px 12px",cursor:"pointer"},children:"点赞"}),e.jsx("button",{style:{padding:"4px 12px",cursor:"pointer"},children:"分享"})]}),children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"12px"},children:"Card 组件可以包含任何 React 元素，比如："}),e.jsxs("ul",{style:{paddingLeft:"20px",lineHeight:"1.8"},children:[e.jsx("li",{children:"文本段落"}),e.jsx("li",{children:"图片、图标"}),e.jsx("li",{children:"其他组件"}),e.jsx("li",{children:"甚至嵌套的 Card"})]}),e.jsx("img",{src:"https://via.placeholder.com/400x200",alt:"示例图片",style:{width:"100%",marginTop:"12px",borderRadius:"4px"}})]})}},p={name:"卡片网格",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"24px"},children:[e.jsx(r,{title:"卡片 1",extra:e.jsx("a",{href:"#",children:"更多"}),hoverable:!0,children:e.jsx("p",{children:"这是第一个卡片的内容。"})}),e.jsx(r,{title:"卡片 2",extra:e.jsx("a",{href:"#",children:"更多"}),hoverable:!0,children:e.jsx("p",{children:"这是第二个卡片的内容。"})}),e.jsx(r,{title:"卡片 3",extra:e.jsx("a",{href:"#",children:"更多"}),hoverable:!0,children:e.jsx("p",{children:"这是第三个卡片的内容。"})}),e.jsx(r,{title:"卡片 4",extra:e.jsx("a",{href:"#",children:"更多"}),hoverable:!0,children:e.jsx("p",{children:"这是第四个卡片的内容。"})})]})},m={name:"可点击卡片",args:{title:"点击我",hoverable:!0,children:"点击这个卡片会触发 onClick 回调函数。",onClick:()=>{alert("卡片被点击了！")}}},u={name:"简洁卡片",args:{children:"这是一个没有标题的简洁卡片，只包含内容区域。"}},h={name:"自定义样式",args:{title:"自定义样式",extra:e.jsx("a",{href:"#",children:"操作"}),bodyStyle:{background:"var(--component-hover-bg)",padding:"20px",borderRadius:"4px"},headStyle:{borderBottom:"1px solid var(--border-color)",paddingBottom:"12px",marginBottom:"16px"},children:`
      通过 bodyStyle 和 headStyle 属性，可以自定义内容区域和头部区域的样式。
    `}},x={name:"暗黑模式",args:{title:"暗黑模式卡片",extra:e.jsx("a",{href:"#",children:"更多"}),hoverable:!0,children:`
      这个卡片支持暗黑模式。
      在 Storybook 顶部切换主题为"dark"，看看效果吧！
    `},parameters:{backgrounds:{default:"dark",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#191919"}]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  args: {
    title: '默认标题',
    children: '这是一个基础的卡片组件，包含标题、内容区域。'
  }
}`,...s.parameters?.docs?.source},description:{story:"基础用法 - 最简单的卡片用法",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '带额外内容',
  args: {
    title: '卡片标题',
    extra: <a href="#">查看更多</a>,
    children: \`
      卡片标题右侧可以放置操作按钮、链接等额外内容。
      通过设置 extra 属性来实现。
    \`
  }
}`,...o.parameters?.docs?.source},description:{story:"带 extra - 标题右侧可以添加额外内容",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '无边框',
  args: {
    title: '无边框卡片',
    bordered: false,
    children: '通过设置 bordered={false} 可以移除卡片的边框。'
  }
}`,...n.parameters?.docs?.source},description:{story:"无边框 - 不显示边框的卡片",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '可悬停',
  args: {
    title: '悬停试试',
    hoverable: true,
    children: '鼠标悬停在这个卡片上，会看到浮起的阴影效果。'
  }
}`,...d.parameters?.docs?.source},description:{story:"可悬停 - 鼠标悬停时有浮起效果",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '浮起阴影',
  args: {
    title: '浮起阴影',
    shadow: 'float',
    children: '使用 shadow="float" 可以获得更明显的阴影效果。'
  }
}`,...i.parameters?.docs?.source},description:{story:"浮起阴影 - 更明显的阴影效果",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '无阴影',
  args: {
    title: '无阴影',
    shadow: 'none',
    bordered: true,
    children: '通过设置 shadow="none" 可以完全移除阴影。'
  }
}`,...l.parameters?.docs?.source},description:{story:"无阴影 - 完全没有阴影",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '灵活的内容',
  args: {
    title: '文章卡片',
    extra: <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <button style={{
        padding: '4px 12px',
        cursor: 'pointer'
      }}>点赞</button>
        <button style={{
        padding: '4px 12px',
        cursor: 'pointer'
      }}>分享</button>
      </div>,
    children: <div>
        <p style={{
        marginBottom: '12px'
      }}>
          Card 组件可以包含任何 React 元素，比如：
        </p>
        <ul style={{
        paddingLeft: '20px',
        lineHeight: '1.8'
      }}>
          <li>文本段落</li>
          <li>图片、图标</li>
          <li>其他组件</li>
          <li>甚至嵌套的 Card</li>
        </ul>
        <img src="https://via.placeholder.com/400x200" alt="示例图片" style={{
        width: '100%',
        marginTop: '12px',
        borderRadius: '4px'
      }} />
      </div>
  }
}`,...c.parameters?.docs?.source},description:{story:"灵活的内容 - 可以包含任何 React 元素",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '卡片网格',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px'
  }}>
      <Card title="卡片 1" extra={<a href="#">更多</a>} hoverable>
        <p>这是第一个卡片的内容。</p>
      </Card>
      <Card title="卡片 2" extra={<a href="#">更多</a>} hoverable>
        <p>这是第二个卡片的内容。</p>
      </Card>
      <Card title="卡片 3" extra={<a href="#">更多</a>} hoverable>
        <p>这是第三个卡片的内容。</p>
      </Card>
      <Card title="卡片 4" extra={<a href="#">更多</a>} hoverable>
        <p>这是第四个卡片的内容。</p>
      </Card>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"卡片网格 - 多个卡片组成的网格布局",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '可点击卡片',
  args: {
    title: '点击我',
    hoverable: true,
    children: '点击这个卡片会触发 onClick 回调函数。',
    onClick: () => {
      alert('卡片被点击了！');
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"可点击 - 点击卡片触发回调",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '简洁卡片',
  args: {
    children: '这是一个没有标题的简洁卡片，只包含内容区域。'
  }
}`,...u.parameters?.docs?.source},description:{story:"简洁卡片 - 只有内容，没有标题",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '自定义样式',
  args: {
    title: '自定义样式',
    extra: <a href="#">操作</a>,
    bodyStyle: {
      background: 'var(--component-hover-bg)',
      padding: '20px',
      borderRadius: '4px'
    },
    headStyle: {
      borderBottom: '1px solid var(--border-color)',
      paddingBottom: '12px',
      marginBottom: '16px'
    },
    children: \`
      通过 bodyStyle 和 headStyle 属性，可以自定义内容区域和头部区域的样式。
    \`
  }
}`,...h.parameters?.docs?.source},description:{story:"自定义样式 - 通过 bodyStyle 和 headStyle 自定义样式",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '暗黑模式',
  args: {
    title: '暗黑模式卡片',
    extra: <a href="#">更多</a>,
    hoverable: true,
    children: \`
      这个卡片支持暗黑模式。
      在 Storybook 顶部切换主题为"dark"，看看效果吧！
    \`
  },
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
}`,...x.parameters?.docs?.source},description:{story:"暗黑模式演示 - 在暗黑主题下的效果",...x.parameters?.docs?.description}}};const E=["Basic","WithExtra","WithoutBorder","Hoverable","FloatShadow","NoShadow","FlexibleContent","CardGrid","Clickable","Simple","CustomStyle","DarkMode"];export{s as Basic,p as CardGrid,m as Clickable,h as CustomStyle,x as DarkMode,c as FlexibleContent,i as FloatShadow,d as Hoverable,l as NoShadow,u as Simple,o as WithExtra,n as WithoutBorder,E as __namedExportsOrder,R as default};
