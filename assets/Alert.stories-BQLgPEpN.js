import{r as x,j as e}from"./iframe-BblueGYI.js";import"./preload-helper-PPVm8Dsz.js";const s=({type:t="info",message:u,description:r,showIcon:n=!0,closable:g=!1,visible:y,onClose:f,onVisibleChange:b,className:h,style:w})=>{const[j,B]=x.useState(!0),v=y!==void 0,A=v?y:j,C=o=>{f?.(o),b?.(!1,o),v||B(!1)};if(!A)return null;const I=()=>{const o={width:"16px",height:"16px",fill:"currentColor"};switch(t){case"success":return e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",...o,children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"})});case"info":return e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",...o,children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm36-442c0 4.4-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v64zm0 204c0 4.4-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v96z"})});case"warning":return e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",...o,children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"})});case"error":return e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",...o,children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l41.7-46.4L291 584.5c-2-2.2-3.1-5.2-3.1-8.3s1.1-6.1 3.1-8.3l89-100c1.3-1.5 3.2-2.3 5.2-2.3l66.1.3 99.3-118.4 99.3 118.5 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2zM464 368h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8z"})});default:return null}},i=["my-alert",`my-alert-${t}`];return n&&i.push("my-alert-with-icon"),g&&i.push("my-alert-closable"),r&&i.push("my-alert-with-description"),h&&i.push(h),e.jsxs("div",{className:i.join(" "),style:w,children:[n&&e.jsx("div",{className:"my-alert-icon",children:I()}),e.jsxs("div",{className:"my-alert-content",children:[e.jsx("div",{className:"my-alert-message",children:u}),r&&e.jsx("div",{className:"my-alert-description",children:r})]}),g&&e.jsx("button",{className:"my-alert-close",onClick:C,type:"button","aria-label":"关闭",children:e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M567.4 511.4 768 310.8c6.2-6.2 6.2-16.4 0-22.6l-52.4-52.4c-6.2-6.2-16.4-6.2-22.6 0L492.6 436.4 292 235.8c-6.2-6.2-16.4-6.2-22.6 0l-52.4 52.4c-6.2 6.2-6.2 16.4 0 22.6L417.8 511.4 216.8 712.4c-6.2 6.2-6.2 16.4 0 22.6l52.4 52.4c6.2 6.2 16.4 6.2 22.6 0L492.6 586.4l200.6 200.6c6.2 6.2 16.4 6.2 22.6 0l52.4-52.4c6.2-6.2 6.2-16.4 0-22.6L567.4 511.4z"})})})]})};s.__docgenInfo={description:`Alert 警告提示组件

用于页面中展示重要的提示信息。支持多种类型、图标、关闭功能。

@example
\`\`\`tsx
// 基础用法
<Alert message="成功提示" type="success" />

// 带描述
<Alert
  message="警告"
  description="这是一个警告提示的详细描述"
  type="warning"
/>

// 可关闭
<Alert
  message="错误"
  type="error"
  closable
  onClose={() => console.log('关闭')}
/>
\`\`\``,methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`警告类型
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},message:{required:!0,tsType:{name:"ReactNode"},description:"主标题（必需）"},description:{required:!1,tsType:{name:"ReactNode"},description:"辅助详细描述"},showIcon:{required:!1,tsType:{name:"boolean"},description:`是否显示图标
@default true`,defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:`是否可关闭
@default false`,defaultValue:{value:"false",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:`是否显示（受控模式）

- 如果传入此属性，组件进入受控模式，由父组件控制显示/隐藏
- 如果不传入，组件进入非受控模式，内部维护 visible 状态

@default true`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"关闭时的回调"},onVisibleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(visible: boolean, e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"visible"},{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:`显示状态变化时的回调（受控模式辅助）

@param visible 是否显示
@param e 关闭事件`},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const z={title:"反馈交互/Alert",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Alert 警告提示组件 Storybook

展示 Alert 组件的各种用法和状态`}}},argTypes:{message:{control:"text",description:"主标题（必需）"},type:{control:"select",options:["success","info","warning","error"],description:"警告类型",table:{defaultValue:{summary:"info"}}},description:{control:"text",description:"辅助详细描述"},showIcon:{control:"boolean",description:"是否显示图标",table:{defaultValue:{summary:!0}}},closable:{control:!1},visible:{control:"boolean",description:"是否显示（受控模式，传入后可通过切换重新显示）",table:{defaultValue:{summary:!0}}},onClose:{control:!1,description:"关闭时的回调"},onVisibleChange:{control:!1,description:"显示状态变化时的回调"},className:{control:"text",description:"自定义类名"},style:{control:!1,description:"自定义样式（CSSProperties 对象）"}}},a={name:"Playground",args:{message:"这是一条提示信息",type:"info",showIcon:!0,closable:!1,visible:!0},render:t=>{const[u,r]=x.useState(t.visible??!0);return x.useEffect(()=>{t.visible!==void 0&&r(t.visible)},[t.visible]),e.jsxs("div",{style:{width:"100%",maxWidth:"600px"},children:[e.jsx(s,{...t,visible:u,onVisibleChange:n=>{r(n),t.onVisibleChange?.(n,{})}}),!u&&e.jsx("button",{onClick:()=>r(!0),style:{marginTop:"12px",padding:"6px 12px",fontSize:"14px",cursor:"pointer",backgroundColor:"var(--primary-color, #0f0f0f)",color:"var(--primary-text-color, #fff)",border:"none",borderRadius:"2px"},children:"恢复显示"})]})}},l={name:"基础用法 - 四种类型",render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"600px"},children:[e.jsx(s,{message:"成功提示",type:"success",style:{marginBottom:"12px"}}),e.jsx(s,{message:"信息提示",type:"info",style:{marginBottom:"12px"}}),e.jsx(s,{message:"警告提示",type:"warning",style:{marginBottom:"12px"}}),e.jsx(s,{message:"错误提示",type:"error"})]})},c={name:"带描述",render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"600px"},children:[e.jsx(s,{message:"成功提示",description:"这是一条成功提示的详细描述，可以包含更多的信息内容。操作已成功完成。",type:"success",style:{marginBottom:"12px"}}),e.jsx(s,{message:"信息提示",description:"这是一条信息提示的详细描述，用于提供额外的上下文信息和说明。",type:"info",style:{marginBottom:"12px"}}),e.jsx(s,{message:"警告提示",description:"这是一条警告提示的详细描述，提醒用户注意某些潜在问题或风险。",type:"warning",style:{marginBottom:"12px"}}),e.jsx(s,{message:"错误提示",description:"这是一条错误提示的详细描述，告诉用户发生了什么错误以及如何解决。",type:"error"})]})},d={name:"可关闭",render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"600px"},children:[e.jsx(s,{message:"成功提示",description:"点击关闭按钮可以关闭这条提示",type:"success",closable:!0,showIcon:!0,style:{marginBottom:"12px"}}),e.jsx(s,{message:"警告提示",description:"这是一条可关闭的警告信息",type:"warning",closable:!0,showIcon:!0})]})},m={name:"无图标",render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"600px"},children:[e.jsx(s,{message:"不带图标的提示信息",type:"info",showIcon:!1,style:{marginBottom:"12px"}}),e.jsx(s,{message:"不带图标的警告",description:"这是一个不带图标的警告提示，通过边框颜色区分类型",type:"warning",showIcon:!1})]})},p={name:"组合展示 - 业务场景",render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"800px"},children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 1：表单提交成功"}),e.jsx(s,{message:"提交成功",description:"您的表单已成功提交，我们将在 3 个工作日内处理完成。",type:"success",showIcon:!0,closable:!0})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 2：系统维护通知"}),e.jsx(s,{message:"系统维护通知",description:"系统将于 2024 年 1 月 15 日 02:00-06:00 进行维护，届时部分功能可能无法使用。",type:"warning",showIcon:!0,closable:!0})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 3：操作失败提示"}),e.jsx(s,{message:"操作失败",description:"网络连接失败，请检查您的网络设置后重试。如果问题持续，请联系客服。",type:"error",showIcon:!0,closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 4：简洁提示（无描述）"}),e.jsx(s,{message:"数据已保存",type:"success",showIcon:!0,style:{marginBottom:"8px"}}),e.jsx(s,{message:"请检查输入内容",type:"warning",showIcon:!0,style:{marginBottom:"8px"}}),e.jsx(s,{message:"加载中...",type:"info",showIcon:!0})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    message: '这是一条提示信息',
    type: 'info',
    showIcon: true,
    closable: false,
    visible: true
  },
  render: args => {
    // 使用受控模式：内部维护 visible 状态
    // 当用户点击关闭按钮时，更新状态；当用户在 Controls 中切换 visible 时，也能同步更新
    const [visible, setVisible] = useState(args.visible ?? true);

    // 同步 Controls 面板的变化
    useEffect(() => {
      if (args.visible !== undefined) {
        setVisible(args.visible);
      }
    }, [args.visible]);
    return <div style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <Alert {...args} visible={visible} onVisibleChange={newVisible => {
        setVisible(newVisible);
        args.onVisibleChange?.(newVisible, {} as any);
      }} />
        {/* 受控模式下隐藏后，显示恢复按钮 */}
        {!visible && <button onClick={() => setVisible(true)} style={{
        marginTop: '12px',
        padding: '6px 12px',
        fontSize: '14px',
        cursor: 'pointer',
        backgroundColor: 'var(--primary-color, #0f0f0f)',
        color: 'var(--primary-text-color, #fff)',
        border: 'none',
        borderRadius: '2px'
      }}>
            恢复显示
          </button>}
      </div>;
  }
}`,...a.parameters?.docs?.source},description:{story:`Playground - 在 Controls 面板中测试所有属性

使用受控模式：关闭后可点击"恢复显示"按钮或切换 visible 开关重新显示`,...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '基础用法 - 四种类型',
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <Alert message="成功提示" type="success" style={{
      marginBottom: '12px'
    }} />
      <Alert message="信息提示" type="info" style={{
      marginBottom: '12px'
    }} />
      <Alert message="警告提示" type="warning" style={{
      marginBottom: '12px'
    }} />
      <Alert message="错误提示" type="error" />
    </div>
}`,...l.parameters?.docs?.source},description:{story:`基础用法 - 不同类型的 Alert

展示 4 种不同类型的警告提示`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '带描述',
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <Alert message="成功提示" description="这是一条成功提示的详细描述，可以包含更多的信息内容。操作已成功完成。" type="success" style={{
      marginBottom: '12px'
    }} />
      <Alert message="信息提示" description="这是一条信息提示的详细描述，用于提供额外的上下文信息和说明。" type="info" style={{
      marginBottom: '12px'
    }} />
      <Alert message="警告提示" description="这是一条警告提示的详细描述，提醒用户注意某些潜在问题或风险。" type="warning" style={{
      marginBottom: '12px'
    }} />
      <Alert message="错误提示" description="这是一条错误提示的详细描述，告诉用户发生了什么错误以及如何解决。" type="error" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:`带描述 - 包含详细描述信息

当有 description 时，padding 变大，message 字体加粗`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '可关闭',
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <Alert message="成功提示" description="点击关闭按钮可以关闭这条提示" type="success" closable showIcon style={{
      marginBottom: '12px'
    }} />
      <Alert message="警告提示" description="这是一条可关闭的警告信息" type="warning" closable showIcon />
    </div>
}`,...d.parameters?.docs?.source},description:{story:`可关闭 - 带关闭按钮

点击关闭按钮可以隐藏 Alert，内部维护 visible 状态`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '无图标',
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <Alert message="不带图标的提示信息" type="info" showIcon={false} style={{
      marginBottom: '12px'
    }} />
      <Alert message="不带图标的警告" description="这是一个不带图标的警告提示，通过边框颜色区分类型" type="warning" showIcon={false} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`无图标 - 不显示辅助图标

设置 showIcon={false} 可以隐藏左侧的图标`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '组合展示 - 业务场景',
  render: () => <div style={{
    width: '100%',
    maxWidth: '800px'
  }}>
      {/* 场景 1：表单提交成功 */}
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 1：表单提交成功
        </div>
        <Alert message="提交成功" description="您的表单已成功提交，我们将在 3 个工作日内处理完成。" type="success" showIcon closable />
      </div>

      {/* 场景 2：系统维护通知 */}
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 2：系统维护通知
        </div>
        <Alert message="系统维护通知" description="系统将于 2024 年 1 月 15 日 02:00-06:00 进行维护，届时部分功能可能无法使用。" type="warning" showIcon closable />
      </div>

      {/* 场景 3：操作失败提示 */}
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 3：操作失败提示
        </div>
        <Alert message="操作失败" description="网络连接失败，请检查您的网络设置后重试。如果问题持续，请联系客服。" type="error" showIcon closable />
      </div>

      {/* 场景 4：简洁提示 */}
      <div>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 4：简洁提示（无描述）
        </div>
        <Alert message="数据已保存" type="success" showIcon style={{
        marginBottom: '8px'
      }} />
        <Alert message="请检查输入内容" type="warning" showIcon style={{
        marginBottom: '8px'
      }} />
        <Alert message="加载中..." type="info" showIcon />
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`组合展示 - 多种 Alert 组合使用

展示实际业务场景中的常见组合`,...p.parameters?.docs?.description}}};const V=["Playground","Basic","WithDescription","Closable","WithoutIcon","Combination"];export{l as Basic,d as Closable,p as Combination,a as Playground,c as WithDescription,m as WithoutIcon,V as __namedExportsOrder,z as default};
