import{r as U,j as e}from"./iframe-BanNrfm3.js";import"./preload-helper-PPVm8Dsz.js";const r=C=>{const{as:R="button",type:z="default",status:w="default",size:M="default",shape:E="square",disabled:P=!1,loading:a=!1,loadingFixedWidth:$=!1,long:D=!1,htmlType:O="button",children:F,className:k,style:N,icon:G,href:J,target:K,onClick:H,...Q}=C,A=U.useMemo(()=>{const t=["my-btn"];return z!=="default"&&t.push(`my-btn-${z}`),w!=="default"&&t.push(`my-btn-status-${w}`),M!=="default"&&t.push(`my-btn-size-${M}`),E!=="square"&&t.push(`my-btn-shape-${E}`),a&&t.push("my-btn-loading"),D&&t.push("my-btn-long"),k&&t.push(k),t.join(" ")},[z,w,M,E,a,D,k]),W=a?a?e.jsx("span",{className:"my-btn-loading-icon"}):null:G,I=a&&$?e.jsxs(e.Fragment,{children:[W,e.jsx("span",{style:{visibility:"hidden"},children:F})]}):a?e.jsx(e.Fragment,{children:W}):e.jsxs(e.Fragment,{children:[W,F]});return R=="a"?e.jsx("a",{className:A,style:N,href:J,target:K,onClick:H,children:I}):e.jsx("button",{...Q,className:A,style:N,type:O,disabled:P||a,onClick:H,children:I})};r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{required:!1,tsType:{name:"union",raw:"'a' | 'button'",elements:[{name:"literal",value:"'a'"},{name:"literal",value:"'button'"}]},description:`渲染成什么标签
@description 控制组件最终渲染成的 HTML 标签
@default 'button'
- 'a': 渲染成 <a> 标签
- 'button': 渲染成 <button> 标签`},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'text'"},{name:"literal",value:"'outline'"}]},description:`按钮类型
@default 'default'
- default: 默认按钮（透明背景）
- primary: 主要按钮（蓝色背景）
- secondary: 次要按钮（灰色背景）
- dashed: 虚线按钮
- text: 文字按钮
- outline: 线框按钮`},size:{required:!1,tsType:{name:"union",raw:"'mini' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'mini'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`按钮尺寸
@default 'default'
- mini: 迷你 (高度 24px)
- small: 小型 (高度 28px)
- default: 默认 (高度 32px)
- large: 大型 (高度 36px)`},loading:{required:!1,tsType:{name:"boolean"},description:`是否显示加载状态
@description loading 时按钮会显示转圈图标，且无法点击
@default false`},loadingFixedWidth:{required:!1,tsType:{name:"boolean"},description:`loading时是都保持宽度不变，防止抖动
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:`是否禁用按钮
@description 禁用后按钮无法点击，且呈现灰色状态
@default false`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}],raw:"MouseEvent<HTMLButtonElement | HTMLAnchorElement>"},name:"e"}],return:{name:"void"}}},description:`点击事件回调
@description 用户点击按钮时触发的函数`},icon:{required:!1,tsType:{name:"ReactNode"},description:`按钮图标
@description 显示在按钮文字前面的图标，可以是字符串或者React组件`},href:{required:!1,tsType:{name:"string"},description:`链接地址
@description 设置此属性后，按钮渲染为 <a> 标签，支持 链接跳转
@example <Button href="https://example.com">跳转</Button>`},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"}]},description:`链接打开方式
@description 仅在 href 存在时生效
@default '_self'
- _blank: 新窗口
- _self: 当前窗口
- _parent: 父窗口
- _top: 顶层窗口（有嵌套 iframe 时）`},htmlType:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`原生button type属性
@description 仅在渲染为 <button> 时生效
@default 'button'
- button: 默认按钮
- submit: 提交表单
- reset: 重置表单`},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'round' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'round'"},{name:"literal",value:"'square'"}]},description:`按钮形状
@default 'square'
- circle: 圆形（宽高相等，完全圆角）
- round: 圆角（大圆角）
- square: 方形（小圆角）`},status:{required:!1,tsType:{name:"union",raw:"'warning' | 'danger' | 'success' | 'default'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'default'"}]},description:`按钮状态
@description 让按钮传达操作的严重程度
@default 'default'
- warning: 警告状态（黄色）
- danger: 危险状态（红色）
- success: 成功状态（绿色）
- default: 默认状态`},long:{required:!1,tsType:{name:"boolean"},description:`宽度是否自适应容器
@description 设置后按钮宽度拉伸至 100%
@default false`}}};const Z={title:"通用与布局/Button",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["default","primary","secondary","dashed","text","outline"],description:"按钮类型"},size:{control:"select",options:["mini","small","default","large"],description:"按钮尺寸"},status:{control:"select",options:["default","warning","danger","success"],description:"按钮状态"},shape:{control:"select",options:["square","circle","round"],description:"按钮形状"},as:{control:"select",options:["button","a"],description:"渲染标签类型"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},loadingFixedWidth:{control:"boolean",description:"加载时保持宽度"},long:{control:"boolean",description:"宽度拉伸"},href:{control:"text",description:"链接地址"},target:{control:"select",options:["_self","_blank","_parent","_top"],description:"链接打开方式"},htmlType:{control:"select",options:["button","submit","reset"],description:"原生 button type"},onClick:{action:"clicked"}}},s={args:{children:"默认按钮",type:"default"}},n={args:{children:"主要按钮",type:"primary"}},o={args:{children:"次要按钮",type:"secondary"}},i={args:{children:"虚线按钮",type:"dashed"}},c={args:{children:"文字按钮",type:"text"}},d={args:{children:"线框按钮",type:"outline"}},p={args:{children:"删除",type:"primary",status:"danger"}},l={args:{children:"警告操作",type:"primary",status:"warning"}},u={args:{children:"操作成功",type:"primary",status:"success"}},m={args:{children:"迷你按钮",type:"primary",size:"mini"}},y={args:{children:"小型按钮",type:"primary",size:"small"}},g={args:{children:"大型按钮",type:"primary",size:"large"}},h={args:{children:"🔍",type:"primary",shape:"circle"}},f={args:{children:"圆角按钮",type:"primary",shape:"round"}},x={args:{children:"禁用按钮",type:"primary",disabled:!0}},b={args:{children:"加载中",type:"default",loading:!0}},B={args:{children:"提交",type:"default",loading:!0,loadingFixedWidth:!0}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{type:"default",children:"取消"}),e.jsx(r,{type:"primary",children:"确定"})]})},S={args:{children:"长按钮",type:"primary",long:!0},parameters:{layout:"padded"}},T={args:{children:"下载",type:"primary",icon:e.jsx("span",{children:"⬇️"})}},j={args:{children:"跳转链接",type:"primary",as:"a",href:"https://example.com",target:"_blank"}},q={args:{children:"提交表单",type:"primary",htmlType:"submit"}},_={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{type:"default",children:"默认"}),e.jsx(r,{type:"primary",children:"主要"}),e.jsx(r,{type:"secondary",children:"次要"}),e.jsx(r,{type:"dashed",children:"虚线"}),e.jsx(r,{type:"text",children:"文字"}),e.jsx(r,{type:"outline",children:"线框"})]})},L={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(r,{type:"primary",size:"mini",children:"Mini"}),e.jsx(r,{type:"primary",size:"small",children:"Small"}),e.jsx(r,{type:"primary",size:"default",children:"Default"}),e.jsx(r,{type:"primary",size:"large",children:"Large"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: '默认按钮',
    type: 'default'
  }
}`,...s.parameters?.docs?.source},description:{story:"默认按钮 - 最基础的按钮样式",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: '主要按钮',
    type: 'primary'
  }
}`,...n.parameters?.docs?.source},description:{story:"主要按钮 - 用于主要操作",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: '次要按钮',
    type: 'secondary'
  }
}`,...o.parameters?.docs?.source},description:{story:"次要按钮 - 用于次要操作",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: '虚线按钮',
    type: 'dashed'
  }
}`,...i.parameters?.docs?.source},description:{story:"虚线按钮 - 用于添加操作",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: '文字按钮',
    type: 'text'
  }
}`,...c.parameters?.docs?.source},description:{story:"文字按钮 - 轻量级的操作",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: '线框按钮',
    type: 'outline'
  }
}`,...d.parameters?.docs?.source},description:{story:"线框按钮 - 边框样式",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: '删除',
    type: 'primary',
    status: 'danger'
  }
}`,...p.parameters?.docs?.source},description:{story:"危险状态 - 用于删除等危险操作",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: '警告操作',
    type: 'primary',
    status: 'warning'
  }
}`,...l.parameters?.docs?.source},description:{story:"警告状态 - 用于警告操作",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: '操作成功',
    type: 'primary',
    status: 'success'
  }
}`,...u.parameters?.docs?.source},description:{story:"成功状态 - 用于成功反馈",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: '迷你按钮',
    type: 'primary',
    size: 'mini'
  }
}`,...m.parameters?.docs?.source},description:{story:"迷你按钮 - 24px 高度",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: '小型按钮',
    type: 'primary',
    size: 'small'
  }
}`,...y.parameters?.docs?.source},description:{story:"小型按钮 - 28px 高度",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: '大型按钮',
    type: 'primary',
    size: 'large'
  }
}`,...g.parameters?.docs?.source},description:{story:"大型按钮 - 36px 高度",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: '🔍',
    type: 'primary',
    shape: 'circle'
  }
}`,...h.parameters?.docs?.source},description:{story:"圆形按钮 - 适合图标按钮",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: '圆角按钮',
    type: 'primary',
    shape: 'round'
  }
}`,...f.parameters?.docs?.source},description:{story:"圆角按钮 - 更圆润的边角",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: '禁用按钮',
    type: 'primary',
    disabled: true
  }
}`,...x.parameters?.docs?.source},description:{story:"禁用状态 - 不可点击",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: '加载中',
    type: 'default',
    loading: true
  }
}`,...b.parameters?.docs?.source},description:{story:"加载状态 - 显示加载动画",...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: '提交',
    type: 'default',
    loading: true,
    loadingFixedWidth: true
  }
}`,...B.parameters?.docs?.source},description:{story:"加载状态固定宽度 - 防止文字抖动",...B.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Button type="default">取消</Button>
      <Button type="primary">确定</Button>
    </div>
}`,...v.parameters?.docs?.source},description:{story:"按钮组 - 展示多个按钮并排",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: '长按钮',
    type: 'primary',
    long: true
  },
  parameters: {
    layout: 'padded' // 使用 padded 布局以展示宽度拉伸效果
  }
}`,...S.parameters?.docs?.source},description:{story:"长按钮 - 宽度拉伸至 100%",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: '下载',
    type: 'primary',
    icon: <span>⬇️</span>
  }
}`,...T.parameters?.docs?.source},description:{story:"图标按钮 - 带图标",...T.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: '跳转链接',
    type: 'primary',
    as: 'a',
    href: 'https://example.com',
    target: '_blank'
  }
}`,...j.parameters?.docs?.source},description:{story:"链接按钮 - 跳转链接",...j.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    children: '提交表单',
    type: 'primary',
    htmlType: 'submit'
  }
}`,...q.parameters?.docs?.source},description:{story:"提交按钮 - 用于表单",...q.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Button type="default">默认</Button>
      <Button type="primary">主要</Button>
      <Button type="secondary">次要</Button>
      <Button type="dashed">虚线</Button>
      <Button type="text">文字</Button>
      <Button type="outline">线框</Button>
    </div>
}`,..._.parameters?.docs?.source},description:{story:"类型组合 - 展示所有类型",..._.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Button type="primary" size="mini">
        Mini
      </Button>
      <Button type="primary" size="small">
        Small
      </Button>
      <Button type="primary" size="default">
        Default
      </Button>
      <Button type="primary" size="large">
        Large
      </Button>
    </div>
}`,...L.parameters?.docs?.source},description:{story:"尺寸组合 - 展示所有尺寸",...L.parameters?.docs?.description}}};const ee=["Default","Primary","Secondary","Dashed","Text","Outline","Danger","Warning","Success","Mini","Small","Large","Circle","Round","Disabled","Loading","LoadingFixedWidth","ButtonGroup","LongButton","IconButton","LinkButton","SubmitButton","AllTypes","AllSizes"];export{L as AllSizes,_ as AllTypes,v as ButtonGroup,h as Circle,p as Danger,i as Dashed,s as Default,x as Disabled,T as IconButton,g as Large,j as LinkButton,b as Loading,B as LoadingFixedWidth,S as LongButton,m as Mini,d as Outline,n as Primary,f as Round,o as Secondary,y as Small,q as SubmitButton,u as Success,c as Text,l as Warning,ee as __namedExportsOrder,Z as default};
