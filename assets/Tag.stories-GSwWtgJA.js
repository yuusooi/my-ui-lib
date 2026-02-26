import{r as T,j as e}from"./iframe-BblueGYI.js";import"./preload-helper-PPVm8Dsz.js";const r=({children:o,color:a,closable:t=!1,onClose:s,className:n,style:p})=>{const[f,j]=T.useState(!0),y=c=>{s?.(c),j(!1)};if(!f)return null;const b=()=>{const c={...p};if(!a)return c;const h={success:"var(--success-color)",warning:"var(--warning-color)",error:"var(--error-color)"};if(["success","warning","error"].includes(a)){const v=a;c.backgroundColor=h[v],c.color="#fff",c.borderColor=h[v]}else c.backgroundColor=a,c.color="#fff",c.borderColor=a;return c},x=["my-tag"];return t&&x.push("my-tag-closable"),n&&x.push(n),e.jsxs("span",{className:x.join(" "),style:b(),children:[e.jsx("span",{className:"my-tag-content",children:o}),t&&e.jsx("span",{className:"my-tag-close",onClick:y,children:e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M567.4 511.4 768 310.8c6.2-6.2 6.2-16.4 0-22.6l-52.4-52.4c-6.2-6.2-16.4-6.2-22.6 0L492.6 436.4 292 235.8c-6.2-6.2-16.4-6.2-22.6 0l-52.4 52.4c-6.2 6.2-6.2 16.4 0 22.6L417.8 511.4 216.8 712.4c-6.2 6.2-6.2 16.4 0 22.6l52.4 52.4c6.2 6.2 16.4 6.2 22.6 0L492.6 586.4l200.6 200.6c6.2 6.2 16.4 6.2 22.6 0l52.4-52.4c6.2-6.2 6.2-16.4 0-22.6L567.4 511.4z"})})})]})};r.__docgenInfo={description:`Tag 标签组件

用于标记、分类和选择。支持关闭、自定义颜色等特性。

@example
\`\`\`tsx
// 基础用法
<Tag>默认标签</Tag>

// 预设颜色
<Tag color="success">成功</Tag>
<Tag color="warning">警告</Tag>
<Tag color="error">错误</Tag>

// 自定义颜色
<Tag color="#f50">自定义颜色</Tag>

// 可关闭
<Tag closable onClose={(e) => console.log('关闭', e)}>
  可关闭标签
</Tag>
\`\`\``,methods:[],displayName:"Tag",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"标签内容"},color:{required:!1,tsType:{name:"union",raw:"TagPresets | string",elements:[{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},{name:"string"}]},description:"标签颜色（预设类型或自定义颜色）"},closable:{required:!1,tsType:{name:"boolean"},description:`是否可关闭
@default false`,defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:"关闭时的回调"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const S={title:"数据展示/Tag",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"标签内容"},color:{control:"select",options:["success","warning","error","#108ee9","#f50","#87d068"],description:"标签颜色"},closable:{control:"boolean",description:"是否可关闭",table:{defaultValue:{summary:!1}}},onClose:{control:!1,description:"关闭时的回调"},className:{control:"text",description:"自定义类名"},style:{control:!1,description:"自定义样式（CSSProperties 对象）"}}},l={name:"Playground",args:{children:"测试标签",color:"success",closable:!1},render:o=>e.jsx(r,{...o})},i={name:"基础用法",render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"默认标签"}),e.jsx(r,{color:"success",children:"成功"}),e.jsx(r,{color:"warning",children:"警告"}),e.jsx(r,{color:"error",children:"错误"}),e.jsx(r,{color:"#108ee9",children:"自定义颜色"})]})},d={name:"可关闭",render:()=>{const[o,a]=T.useState(["标签1","标签2","标签3"]),t=s=>{a(o.filter(n=>n!==s))};return e.jsxs("div",{children:[o.map(s=>e.jsx(r,{color:"success",closable:!0,onClose:()=>t(s),children:s},s)),e.jsx(r,{color:"#108ee9",closable:!0,children:"新标签"})]})}},g={name:"预设颜色",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx(r,{color:"success",children:"成功"}),e.jsx(r,{color:"warning",children:"警告"}),e.jsx(r,{color:"error",children:"错误"})]}),e.jsxs("div",{children:[e.jsx(r,{color:"success",closable:!0,children:"可关闭"}),e.jsx(r,{color:"warning",closable:!0,children:"可关闭"}),e.jsx(r,{color:"error",closable:!0,children:"可关闭"})]})]})},u={name:"自定义颜色",render:()=>e.jsxs("div",{children:[e.jsx(r,{color:"#f50",children:"#f50"}),e.jsx(r,{color:"#2db7f5",children:"#2db7f5"}),e.jsx(r,{color:"#87d068",children:"#87d068"}),e.jsx(r,{color:"#108ee9",children:"#108ee9"})]})},m={name:"组合展示",render:()=>{const[o,a]=T.useState([{text:"待处理",color:"warning"},{text:"进行中",color:"#108ee9"},{text:"已完成",color:"success"},{text:"失败",color:"error"}]),t=s=>{a(o.filter((n,p)=>p!==s))};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"静态标签"}),e.jsxs("div",{children:[e.jsx(r,{children:"默认"}),e.jsx(r,{color:"success",children:"成功"}),e.jsx(r,{color:"warning",children:"警告"}),e.jsx(r,{color:"error",children:"错误"}),e.jsx(r,{color:"#f50",children:"自定义"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"动态标签（可关闭）"}),e.jsxs("div",{children:[o.map((s,n)=>e.jsx(r,{color:s.color,closable:!0,onClose:()=>t(n),children:s.text},n)),e.jsx(r,{color:"success",closable:!0,onClose:()=>{a([...o,{text:`新标签${o.length+1}`,color:"success"}])},children:"+ 添加标签"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: '测试标签',
    color: 'success',
    closable: false
  },
  render: args => <Tag {...args} />
}`,...l.parameters?.docs?.source},description:{story:"Playground - 在 Controls 面板中测试所有属性",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <div>
      <Tag>默认标签</Tag>
      <Tag color="success">成功</Tag>
      <Tag color="warning">警告</Tag>
      <Tag color="error">错误</Tag>
      <Tag color="#108ee9">自定义颜色</Tag>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"基础用法 - 最简单的用法",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '可关闭',
  render: () => {
    const [tags, setTags] = useState<string[]>(['标签1', '标签2', '标签3']);
    const handleClose = (tagToRemove: string) => {
      setTags(tags.filter(tag => tag !== tagToRemove));
    };
    return <div>
        {tags.map(tag => <Tag key={tag} color="success" closable onClose={() => handleClose(tag)}>
            {tag}
          </Tag>)}
        <Tag color="#108ee9" closable>
          新标签
        </Tag>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:"可关闭 - 带 closable 属性，点击关闭图标触发事件",...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '预设颜色',
  render: () => <div>
      <div style={{
      marginBottom: '12px'
    }}>
        <Tag color="success">成功</Tag>
        <Tag color="warning">警告</Tag>
        <Tag color="error">错误</Tag>
      </div>
      <div>
        <Tag color="success" closable>
          可关闭
        </Tag>
        <Tag color="warning" closable>
          可关闭
        </Tag>
        <Tag color="error" closable>
          可关闭
        </Tag>
      </div>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"预设颜色 - 使用 success/warning/error",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '自定义颜色',
  render: () => <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"自定义颜色 - 使用任意 HEX 颜色值",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '组合展示',
  render: () => {
    const [tags, setTags] = useState([{
      text: '待处理',
      color: 'warning' as const
    }, {
      text: '进行中',
      color: '#108ee9'
    }, {
      text: '已完成',
      color: 'success' as const
    }, {
      text: '失败',
      color: 'error' as const
    }]);
    const handleClose = (index: number) => {
      setTags(tags.filter((_, i) => i !== index));
    };
    return <div>
        <div style={{
        marginBottom: '16px'
      }}>
          <div style={{
          fontSize: '14px',
          color: 'var(--text-color-secondary)',
          marginBottom: '12px'
        }}>
            静态标签
          </div>
          <div>
            <Tag>默认</Tag>
            <Tag color="success">成功</Tag>
            <Tag color="warning">警告</Tag>
            <Tag color="error">错误</Tag>
            <Tag color="#f50">自定义</Tag>
          </div>
        </div>

        <div>
          <div style={{
          fontSize: '14px',
          color: 'var(--text-color-secondary)',
          marginBottom: '12px'
        }}>
            动态标签（可关闭）
          </div>
          <div>
            {tags.map((tag, index) => <Tag key={index} color={tag.color} closable onClose={() => handleClose(index)}>
                {tag.text}
              </Tag>)}
            <Tag color="success" closable onClose={() => {
            setTags([...tags, {
              text: \`新标签\${tags.length + 1}\`,
              color: 'success'
            }]);
          }}>
              + 添加标签
            </Tag>
          </div>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"组合展示 - 不同类型的标签组合",...m.parameters?.docs?.description}}};const B=["Playground","Basic","Closable","PresetColors","CustomColors","Combination"];export{i as Basic,d as Closable,m as Combination,u as CustomColors,l as Playground,g as PresetColors,B as __namedExportsOrder,S as default};
