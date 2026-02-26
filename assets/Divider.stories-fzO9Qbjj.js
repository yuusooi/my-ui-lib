import{r as z,j as e}from"./iframe-BblueGYI.js";import"./preload-helper-PPVm8Dsz.js";const r=({children:n,type:y="horizontal",dashed:T=!1,orientation:j="center",orientationMargin:t,className:D,style:f,borderColor:g})=>{const M=n!=null,i=["my-divider"];y==="vertical"?i.push("my-divider-vertical"):i.push("my-divider-horizontal"),T&&i.push("my-divider-dashed"),M&&(i.push("my-divider-with-text"),y==="horizontal"&&j!=="center"&&i.push(`my-divider-with-text-${j}`)),D&&i.push(D);const b=z.useMemo(()=>{const u={...f};if(t!==void 0){const N=typeof t=="number"?`${t}px`:t;u["--orientation-margin"]=N}return g!==void 0&&(u["--border-color"]=g),u},[t,g,f]);return M?e.jsx("div",{className:i.join(" "),style:b,children:e.jsx("span",{className:"my-divider-text",children:n})}):e.jsx("div",{className:i.join(" "),style:b})};r.__docgenInfo={description:`Divider 分割线组件

用于划分内容的区域，提供视觉分隔。支持水平/垂直方向、虚线样式、文字内容。

@example
\`\`\`tsx
// 基础用法
<Divider />

// 带文字
<Divider>文字</Divider>

// 虚线
<Divider dashed />

// 垂直分割线
<Divider type="vertical" />

// 文字位置
<Divider orientation="left">左侧文字</Divider>
<Divider orientation="right">右侧文字</Divider>

// 自定义文字间距（注意：仅在 left 或 right 时有效）
<Divider orientation="left" orientationMargin="100px">文字</Divider>
\`\`\``,methods:[],displayName:"Divider",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"分割线文字"},type:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`分割线类型
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},dashed:{required:!1,tsType:{name:"boolean"},description:`是否虚线
@default false`,defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`文字位置（仅水平方向有效）
@default 'center'`,defaultValue:{value:"'center'",computed:!1}},orientationMargin:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`文字与边缘的距离
@example "20px" | 100 | "10%"
@description 注意：仅在 orientation="left" 或 orientation="right" 时有效！`},className:{required:!1,tsType:{name:"string"},description:"自定义样式类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:`分割线颜色
@example "red" | "#ff0000" | "rgb(255, 0, 0)"`}}};const C={title:"通用与布局/Divider",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"分割线文字"},type:{control:"select",options:["horizontal","vertical"],description:"分割线方向"},dashed:{control:"boolean",description:"是否虚线"},orientation:{control:"select",options:["left","center","right"],description:"文字位置（仅水平方向有效）"},orientationMargin:{control:"text",description:`文字与边缘的距离（如：20px、100px、10%）

注意：仅在 orientation="left" 或 orientation="right" 时有效！`},className:{control:"text",description:"自定义样式类名"},style:{control:"object"}}},a={name:"基础用法",args:{dashed:!1,type:"horizontal"},render:n=>e.jsxs("div",{children:[e.jsx("p",{children:"上方内容"}),e.jsx(r,{...n}),e.jsx("p",{children:"下方内容"})]})},s={name:"带文字",render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"这是第一段内容"}),e.jsx(r,{children:"文字"}),e.jsx("p",{children:"这是第二段内容"}),e.jsx(r,{children:"更多内容"}),e.jsx("p",{children:"这是第三段内容"})]})},o={name:"文字位置",render:()=>e.jsxs("div",{children:[e.jsx(r,{orientation:"left",children:"左侧文字"}),e.jsx(r,{orientation:"center",children:"居中文字"}),e.jsx(r,{orientation:"right",children:"右侧文字"})]})},d={name:"虚线",render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"实线分割线"}),e.jsx(r,{}),e.jsx("p",{children:"虚线分割线"}),e.jsx(r,{dashed:!0}),e.jsx("p",{children:"带文字的虚线"}),e.jsx(r,{dashed:!0,children:"文字"})]})},c={name:"垂直分割线",render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"文字 1"}),e.jsx(r,{type:"vertical"}),e.jsx("span",{children:"文字 2"}),e.jsx(r,{type:"vertical"}),e.jsx("span",{children:"文字 3"}),e.jsx(r,{type:"vertical",dashed:!0}),e.jsx("span",{children:"文字 4"})]})},l={name:"自定义间距",render:()=>e.jsxs("div",{children:[e.jsx(r,{orientation:"left",orientationMargin:"100px",children:"距离左边 100px"}),e.jsx(r,{orientation:"right",orientationMargin:"100px",children:"距离右边 100px"}),e.jsx(r,{orientation:"left",orientationMargin:"20px",children:"距离左边 20px"})]})},p={name:"文章分割",render:()=>e.jsxs("div",{style:{padding:"24px",background:"var(--component-bg)"},children:[e.jsx("h2",{children:"第一章：组件库介绍"}),e.jsx("p",{children:"这是一个基于 React 的 UI 组件库，提供了丰富的组件供开发者使用。"}),e.jsx(r,{children:"章节分隔"}),e.jsx("h2",{children:"第二章：快速开始"}),e.jsx("p",{children:"安装组件库后，您可以直接引入组件并使用，非常简单方便。"}),e.jsx(r,{dashed:!0}),e.jsx("h2",{children:"第三章：进阶使用"}),e.jsx("p",{children:"通过主题定制、组件配置等方式，您可以轻松实现个性化需求。"})]})},m={name:"卡片分隔",render:()=>e.jsxs("div",{style:{padding:"24px",background:"var(--component-bg)",borderRadius:"8px",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{marginTop:0},children:"用户信息"}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("p",{style:{margin:0,color:"var(--text-color-secondary)"},children:"用户名：张三"}),e.jsx("p",{style:{margin:0,color:"var(--text-color-secondary)"},children:"邮箱：zhangsan@example.com"})]}),e.jsx(r,{children:"详细信息"}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("p",{style:{margin:0,color:"var(--text-color-secondary)"},children:"电话：138****8888"}),e.jsx("p",{style:{margin:0,color:"var(--text-color-secondary)"},children:"地址：北京市朝阳区"})]})]})},x={name:"多条分割线",render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"第一条内容"}),e.jsx(r,{children:"第一部分"}),e.jsx("p",{children:"第二条内容"}),e.jsx(r,{dashed:!0,children:"第二部分"}),e.jsx("p",{children:"第三条内容"}),e.jsx(r,{orientation:"left",children:"第三部分"}),e.jsx("p",{children:"第四条内容"})]})},h={name:"Playground",args:{children:"分割线文字",dashed:!1,type:"horizontal",orientation:"left",orientationMargin:"100px",className:""},render:n=>e.jsx(r,{...n})},v={name:"测试所有属性",render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"测试 className"}),e.jsx(r,{className:"custom-divider",children:"带自定义类名"}),e.jsx("h3",{children:"测试 style"}),e.jsx(r,{style:{borderColor:"red"},children:"红色边框"}),e.jsx(r,{style:{"--orientation-margin":"150px"},children:"距离左边 150px（通过 style）"}),e.jsx("h3",{children:"测试 orientationMargin - left"}),e.jsx(r,{orientation:"left",orientationMargin:"20px",children:"距离左边 20px"}),e.jsx(r,{orientation:"left",orientationMargin:"100px",children:"距离左边 100px"}),e.jsx(r,{orientation:"left",orientationMargin:"200px",children:"距离左边 200px"}),e.jsx("h3",{children:"测试 orientationMargin - right"}),e.jsx(r,{orientation:"right",orientationMargin:"50px",children:"距离右边 50px"}),e.jsx(r,{orientation:"right",orientationMargin:"150px",children:"距离右边 150px"}),e.jsx("h3",{children:"组合测试"}),e.jsx(r,{orientation:"left",orientationMargin:"80px",dashed:!0,className:"custom-divider",style:{color:"blue"},children:"左侧80px + 虚线 + 自定义类名 + 蓝色文字"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  args: {
    dashed: false,
    type: 'horizontal'
  },
  render: args => <div>
      <p>上方内容</p>
      <Divider {...args} />
      <p>下方内容</p>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"基础用法 - 最基础的分割线（可在 Controls 中调整属性）",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '带文字',
  render: () => <div>
      <p>这是第一段内容</p>
      <Divider>文字</Divider>
      <p>这是第二段内容</p>
      <Divider>更多内容</Divider>
      <p>这是第三段内容</p>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"带文字 - 在分割线上显示文字",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '文字位置',
  render: () => <div>
      <Divider orientation="left">左侧文字</Divider>
      <Divider orientation="center">居中文字</Divider>
      <Divider orientation="right">右侧文字</Divider>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"文字位置 - 调整文字在分割线上的位置",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '虚线',
  render: () => <div>
      <p>实线分割线</p>
      <Divider />
      <p>虚线分割线</p>
      <Divider dashed />
      <p>带文字的虚线</p>
      <Divider dashed>文字</Divider>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"虚线 - 使用虚线样式",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '垂直分割线',
  render: () => <div>
      <span>文字 1</span>
      <Divider type="vertical" />
      <span>文字 2</span>
      <Divider type="vertical" />
      <span>文字 3</span>
      <Divider type="vertical" dashed />
      <span>文字 4</span>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"垂直分割线 - 垂直方向的分割线",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '自定义间距',
  render: () => <div>
      <Divider orientation="left" orientationMargin="100px">
        距离左边 100px
      </Divider>
      <Divider orientation="right" orientationMargin="100px">
        距离右边 100px
      </Divider>
      <Divider orientation="left" orientationMargin="20px">
        距离左边 20px
      </Divider>
    </div>
}`,...l.parameters?.docs?.source},description:{story:`自定义间距 - 调整文字与边缘的距离

分割线中带有文字，可以用orientation指定文字位置。`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '文章分割',
  render: () => <div style={{
    padding: '24px',
    background: 'var(--component-bg)'
  }}>
      <h2>第一章：组件库介绍</h2>
      <p>这是一个基于 React 的 UI 组件库，提供了丰富的组件供开发者使用。</p>
      <Divider>章节分隔</Divider>
      <h2>第二章：快速开始</h2>
      <p>安装组件库后，您可以直接引入组件并使用，非常简单方便。</p>
      <Divider dashed />
      <h2>第三章：进阶使用</h2>
      <p>通过主题定制、组件配置等方式，您可以轻松实现个性化需求。</p>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"文章分割 - 在文章中用于分隔不同章节",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '卡片分隔',
  render: () => <div style={{
    padding: '24px',
    background: 'var(--component-bg)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)'
  }}>
      <h3 style={{
      marginTop: 0
    }}>用户信息</h3>
      <div style={{
      marginBottom: '16px'
    }}>
        <p style={{
        margin: 0,
        color: 'var(--text-color-secondary)'
      }}>
          用户名：张三
        </p>
        <p style={{
        margin: 0,
        color: 'var(--text-color-secondary)'
      }}>
          邮箱：zhangsan@example.com
        </p>
      </div>
      <Divider>详细信息</Divider>
      <div style={{
      marginTop: '16px'
    }}>
        <p style={{
        margin: 0,
        color: 'var(--text-color-secondary)'
      }}>
          电话：138****8888
        </p>
        <p style={{
        margin: 0,
        color: 'var(--text-color-secondary)'
      }}>
          地址：北京市朝阳区
        </p>
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"卡片分隔 - 在卡片中用于分隔不同内容",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '多条分割线',
  render: () => <div>
      <p>第一条内容</p>
      <Divider>第一部分</Divider>
      <p>第二条内容</p>
      <Divider dashed>第二部分</Divider>
      <p>第三条内容</p>
      <Divider orientation="left">第三部分</Divider>
      <p>第四条内容</p>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"多条分割线 - 连续使用多条分割线",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: '分割线文字',
    dashed: false,
    type: 'horizontal',
    orientation: 'left',
    orientationMargin: '100px',
    className: ''
  },
  render: args => <Divider {...args} />
}`,...h.parameters?.docs?.source},description:{story:"Playground - 在 Controls 面板中测试所有属性",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '测试所有属性',
  render: () => <div>
      <h3>测试 className</h3>
      <Divider className="custom-divider">带自定义类名</Divider>

      <h3>测试 style</h3>
      <Divider style={{
      borderColor: 'red'
    }}>红色边框</Divider>
      <Divider style={{
      '--orientation-margin': '150px'
    } as any}>
        距离左边 150px（通过 style）
      </Divider>

      <h3>测试 orientationMargin - left</h3>
      <Divider orientation="left" orientationMargin="20px">
        距离左边 20px
      </Divider>
      <Divider orientation="left" orientationMargin="100px">
        距离左边 100px
      </Divider>
      <Divider orientation="left" orientationMargin="200px">
        距离左边 200px
      </Divider>

      <h3>测试 orientationMargin - right</h3>
      <Divider orientation="right" orientationMargin="50px">
        距离右边 50px
      </Divider>
      <Divider orientation="right" orientationMargin="150px">
        距离右边 150px
      </Divider>

      <h3>组合测试</h3>
      <Divider orientation="left" orientationMargin="80px" dashed className="custom-divider" style={{
      color: 'blue'
    }}>
        左侧80px + 虚线 + 自定义类名 + 蓝色文字
      </Divider>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`测试所有属性 - 验证 className、style、orientationMargin 等功能

注意：orientationMargin 仅在 orientation="left" 或 orientation="right" 时有效！`,...v.parameters?.docs?.description}}};const P=["Basic","WithText","Orientation","Dashed","Vertical","CustomMargin","Article","Card","Multiple","Playground","TestAllProps"];export{p as Article,a as Basic,m as Card,l as CustomMargin,d as Dashed,x as Multiple,o as Orientation,h as Playground,v as TestAllProps,c as Vertical,s as WithText,P as __namedExportsOrder,C as default};
