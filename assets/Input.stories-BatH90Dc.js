import{j as e}from"./iframe-BblueGYI.js";import{I as r}from"./index-CMGU_2ki.js";import"./preload-helper-PPVm8Dsz.js";const R={title:"数据录入/Input",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["mini","small","default","large"],description:"输入框尺寸"},disabled:{control:"boolean",description:"是否禁用"},error:{control:"boolean",description:"是否错误状态"},allowClear:{control:"boolean",description:"是否显示清除按钮"},showCount:{control:"boolean",description:"是否显示字数统计"},maxLength:{control:"number",description:"最大长度"},visibilityToggle:{control:"boolean",description:"是否显示密码切换按钮"},type:{control:"select",options:["text","password","number","email"],description:"输入框类型"},placeholder:{control:"text",description:"占位文本"},onChange:{action:"changed"}}},a={args:{placeholder:"请输入内容"}},s={args:{prefix:"🔍",placeholder:"搜索"}},t={args:{suffix:"📌",placeholder:"标记"}},o={args:{prefix:"🔍",suffix:"📌",placeholder:"搜索并标记"}},l={args:{size:"mini",placeholder:"Mini 输入框"}},p={args:{size:"small",placeholder:"Small 输入框"}},i={args:{size:"large",placeholder:"Large 输入框"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{size:"mini",placeholder:"Mini"}),e.jsx(r,{size:"small",placeholder:"Small"}),e.jsx(r,{size:"default",placeholder:"Default"}),e.jsx(r,{size:"large",placeholder:"Large"})]})},c={args:{disabled:!0,placeholder:"禁用的输入框",defaultValue:"不可编辑"}},n={args:{error:!0,placeholder:"请输入正确的内容",defaultValue:"错误的输入"}},u={args:{allowClear:!0,placeholder:"输入内容后可清除",defaultValue:"可清除的内容"}},m={args:{showCount:!0,placeholder:"输入内容会显示字数",maxLength:100,defaultValue:"Hello"}},x={args:{showCount:!0,maxLength:50,placeholder:"最多输入50字",defaultValue:"已输入字数统计"}},h={args:{type:"password",visibilityToggle:!0,placeholder:"请输入密码"}},g={args:{type:"number",placeholder:"请输入数字"}},f={args:{type:"email",placeholder:"请输入邮箱"}},y={args:{prefix:"🔍",allowClear:!0,showCount:!0,maxLength:50,placeholder:"搜索内容（最多50字）",defaultValue:"示例内容"}},w={args:{error:!0,prefix:"⚠️",allowClear:!0,placeholder:"输入有误",defaultValue:"错误的输入"}},b={render:()=>e.jsx(r.TextArea,{placeholder:"请输入多行文本",style:{width:"400px"}})},S={render:()=>e.jsx(r.TextArea,{placeholder:"请输入内容（最多200字）",showCount:!0,maxLength:200,style:{width:"400px"},defaultValue:"这是一段示例文本"})},I={render:()=>e.jsx(r.TextArea,{placeholder:"输入内容会自动调整高度",autoSize:!0,style:{width:"400px"},defaultValue:"这是一段会自动调整高度的文本内容"})},A={render:()=>e.jsx(r.TextArea,{placeholder:"最小2行，最大6行",autoSize:{minRows:2,maxRows:6},style:{width:"400px"},defaultValue:"这是一个限制行数的自适应文本框。输入更多内容时会自动扩展高度，但不会低于2行，也不会超过6行。"})},j={render:()=>e.jsx(r.TextArea,{placeholder:"禁用的多行输入框",disabled:!0,style:{width:"400px"},defaultValue:"这是一段不可编辑的文本"})},V={render:()=>e.jsx(r.TextArea,{placeholder:"输入有误",error:!0,style:{width:"400px"},defaultValue:"这是一段错误的文本"})},T={render:()=>e.jsx(r.TextArea,{placeholder:"可清除内容的多行输入框",allowClear:!0,style:{width:"400px"},defaultValue:"这是一段可以清除的文本内容"})},C={render:()=>e.jsxs(r.Group,{children:[e.jsx(r,{defaultValue:"https://",style:{width:"100px"}}),e.jsx(r,{defaultValue:"example.com",style:{width:"200px"}})]})},W={render:()=>e.jsxs(r.Group,{compact:!0,children:[e.jsx(r,{defaultValue:"0571",style:{width:"80px"}}),e.jsx(r,{defaultValue:"88888888",style:{width:"150px"}}),e.jsx(r,{defaultValue:"#",style:{width:"40px"}})]})},z={render:()=>e.jsxs(r.Group,{compact:!0,children:[e.jsx(r,{prefix:"¥",defaultValue:"100",style:{width:"120px"}}),e.jsx(r,{suffix:"元",defaultValue:"00",style:{width:"80px"}})]})},v={render:()=>e.jsxs(r.Group,{compact:!0,children:[e.jsx(r,{prefix:"🔍",placeholder:"搜索关键词",style:{width:"200px"}}),e.jsx(r,{suffix:"▼",defaultValue:"全部",style:{width:"80px"}})]})},G={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{placeholder:"受控组件（示例）",defaultValue:"受控组件的值"}),e.jsx("p",{style:{color:"#666",fontSize:"14px"},children:"💡 在实际项目中，使用 value + onChange 来实现受控组件"})]})},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",border:"1px solid #e5e6eb",borderRadius:"8px",width:"400px"},children:[e.jsx("h3",{style:{margin:0},children:"用户信息表单"}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontWeight:"bold"},children:"用户名"}),e.jsx(r,{prefix:"👤",placeholder:"请输入用户名"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontWeight:"bold"},children:"邮箱"}),e.jsx(r,{type:"email",prefix:"📧",placeholder:"请输入邮箱"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontWeight:"bold"},children:"密码"}),e.jsx(r,{type:"password",visibilityToggle:!0,placeholder:"请输入密码"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontWeight:"bold"},children:"个人简介（最多200字）"}),e.jsx(r.TextArea,{placeholder:"请输入个人简介",showCount:!0,maxLength:200,autoSize:{minRows:3,maxRows:6}})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容'
  }
}`,...a.parameters?.docs?.source},description:{story:"默认输入框",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '🔍',
    placeholder: '搜索'
  }
}`,...s.parameters?.docs?.source},description:{story:"带前缀图标",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    suffix: '📌',
    placeholder: '标记'
  }
}`,...t.parameters?.docs?.source},description:{story:"带后缀图标",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '🔍',
    suffix: '📌',
    placeholder: '搜索并标记'
  }
}`,...o.parameters?.docs?.source},description:{story:"同时带前后缀",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'mini',
    placeholder: 'Mini 输入框'
  }
}`,...l.parameters?.docs?.source},description:{story:"迷你输入框",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small 输入框'
  }
}`,...p.parameters?.docs?.source},description:{story:"小型输入框",...p.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Large 输入框'
  }
}`,...i.parameters?.docs?.source},description:{story:"大型输入框",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Input size="mini" placeholder="Mini" />
      <Input size="small" placeholder="Small" />
      <Input size="default" placeholder="Default" />
      <Input size="large" placeholder="Large" />
    </div>
}`,...d.parameters?.docs?.source},description:{story:"所有尺寸对比",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用的输入框',
    defaultValue: '不可编辑'
  }
}`,...c.parameters?.docs?.source},description:{story:"禁用状态",...c.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: '请输入正确的内容',
    defaultValue: '错误的输入'
  }
}`,...n.parameters?.docs?.source},description:{story:"错误状态",...n.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: '输入内容后可清除',
    defaultValue: '可清除的内容'
  }
}`,...u.parameters?.docs?.source},description:{story:"带清除按钮 - 输入内容后显示清除图标",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showCount: true,
    placeholder: '输入内容会显示字数',
    maxLength: 100,
    defaultValue: 'Hello'
  }
}`,...m.parameters?.docs?.source},description:{story:"字数统计 - 显示当前输入字数",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showCount: true,
    maxLength: 50,
    placeholder: '最多输入50字',
    defaultValue: '已输入字数统计'
  }
}`,...x.parameters?.docs?.source},description:{story:"字数统计 + 最大长度",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    visibilityToggle: true,
    placeholder: '请输入密码'
  }
}`,...h.parameters?.docs?.source},description:{story:"密码输入框 - 带显示/隐藏切换",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '请输入数字'
  }
}`,...g.parameters?.docs?.source},description:{story:"数字输入框",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: '请输入邮箱'
  }
}`,...f.parameters?.docs?.source},description:{story:"邮箱输入框",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '🔍',
    allowClear: true,
    showCount: true,
    maxLength: 50,
    placeholder: '搜索内容（最多50字）',
    defaultValue: '示例内容'
  }
}`,...y.parameters?.docs?.source},description:{story:"前缀 + 清除 + 字数统计",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    prefix: '⚠️',
    allowClear: true,
    placeholder: '输入有误',
    defaultValue: '错误的输入'
  }
}`,...w.parameters?.docs?.source},description:{story:"错误 + 前缀 + 清除",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="请输入多行文本" style={{
    width: '400px'
  }} />
}`,...b.parameters?.docs?.source},description:{story:"TextArea - 基础用法",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="请输入内容（最多200字）" showCount maxLength={200} style={{
    width: '400px'
  }} defaultValue="这是一段示例文本" />
}`,...S.parameters?.docs?.source},description:{story:"TextArea - 带字数统计",...S.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="输入内容会自动调整高度" autoSize style={{
    width: '400px'
  }} defaultValue="这是一段会自动调整高度的文本内容" />
}`,...I.parameters?.docs?.source},description:{story:"TextArea - 自适应高度（简单模式）",...I.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="最小2行，最大6行" autoSize={{
    minRows: 2,
    maxRows: 6
  }} style={{
    width: '400px'
  }} defaultValue="这是一个限制行数的自适应文本框。输入更多内容时会自动扩展高度，但不会低于2行，也不会超过6行。" />
}`,...A.parameters?.docs?.source},description:{story:"TextArea - 自适应高度（限制行数）",...A.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="禁用的多行输入框" disabled style={{
    width: '400px'
  }} defaultValue="这是一段不可编辑的文本" />
}`,...j.parameters?.docs?.source},description:{story:"TextArea - 禁用状态",...j.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="输入有误" error style={{
    width: '400px'
  }} defaultValue="这是一段错误的文本" />
}`,...V.parameters?.docs?.source},description:{story:"TextArea - 错误状态",...V.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea placeholder="可清除内容的多行输入框" allowClear style={{
    width: '400px'
  }} defaultValue="这是一段可以清除的文本内容" />
}`,...T.parameters?.docs?.source},description:{story:"TextArea - 带清除按钮",...T.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Group>
      <Input defaultValue="https://" style={{
      width: '100px'
    }} />
      <Input defaultValue="example.com" style={{
      width: '200px'
    }} />
    </Input.Group>
}`,...C.parameters?.docs?.source},description:{story:"Input.Group - 基础用法",...C.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Group compact>
      <Input defaultValue="0571" style={{
      width: '80px'
    }} />
      <Input defaultValue="88888888" style={{
      width: '150px'
    }} />
      <Input defaultValue="#" style={{
      width: '40px'
    }} />
    </Input.Group>
}`,...W.parameters?.docs?.source},description:{story:"Input.Group - 紧凑模式",...W.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Group compact>
      <Input prefix="¥" defaultValue="100" style={{
      width: '120px'
    }} />
      <Input suffix="元" defaultValue="00" style={{
      width: '80px'
    }} />
    </Input.Group>
}`,...z.parameters?.docs?.source},description:{story:"Input.Group - 带前后缀组合",...z.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Group compact>
      <Input prefix="🔍" placeholder="搜索关键词" style={{
      width: '200px'
    }} />
      <Input suffix="▼" defaultValue="全部" style={{
      width: '80px'
    }} />
    </Input.Group>
}`,...v.parameters?.docs?.source},description:{story:"Input.Group - 搜索框组合",...v.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 注意：这只是展示，实际使用时需要配合 React state
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Input placeholder="受控组件（示例）" defaultValue="受控组件的值" />
        <p style={{
        color: '#666',
        fontSize: '14px'
      }}>
          💡 在实际项目中，使用 value + onChange 来实现受控组件
        </p>
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:"受控组件示例",...G.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    border: '1px solid #e5e6eb',
    borderRadius: '8px',
    width: '400px'
  }}>
      <h3 style={{
      margin: 0
    }}>用户信息表单</h3>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontWeight: 'bold'
      }}>
          用户名
        </label>
        <Input prefix="👤" placeholder="请输入用户名" />
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontWeight: 'bold'
      }}>
          邮箱
        </label>
        <Input type="email" prefix="📧" placeholder="请输入邮箱" />
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontWeight: 'bold'
      }}>
          密码
        </label>
        <Input type="password" visibilityToggle placeholder="请输入密码" />
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontWeight: 'bold'
      }}>
          个人简介（最多200字）
        </label>
        <Input.TextArea placeholder="请输入个人简介" showCount maxLength={200} autoSize={{
        minRows: 3,
        maxRows: 6
      }} />
      </div>
    </div>
}`,...L.parameters?.docs?.source},description:{story:"表单场景示例",...L.parameters?.docs?.description}}};const k=["Default","WithPrefix","WithSuffix","WithPrefixAndSuffix","Mini","Small","Large","AllSizes","Disabled","Error","WithClear","WithCount","WithCountAndMaxLength","PasswordInput","NumberInput","EmailInput","CombinedFeatures","ErrorWithFeatures","TextAreaBasic","TextAreaWithCount","TextAreaAutoSize","TextAreaAutoSizeWithLimit","TextAreaDisabled","TextAreaError","TextAreaWithClear","InputGroupBasic","InputGroupCompact","InputGroupWithPrefixSuffix","SearchInputGroup","ControlledInput","FormExample"];export{d as AllSizes,y as CombinedFeatures,G as ControlledInput,a as Default,c as Disabled,f as EmailInput,n as Error,w as ErrorWithFeatures,L as FormExample,C as InputGroupBasic,W as InputGroupCompact,z as InputGroupWithPrefixSuffix,i as Large,l as Mini,g as NumberInput,h as PasswordInput,v as SearchInputGroup,p as Small,I as TextAreaAutoSize,A as TextAreaAutoSizeWithLimit,b as TextAreaBasic,j as TextAreaDisabled,V as TextAreaError,T as TextAreaWithClear,S as TextAreaWithCount,u as WithClear,m as WithCount,x as WithCountAndMaxLength,s as WithPrefix,o as WithPrefixAndSuffix,t as WithSuffix,k as __namedExportsOrder,R as default};
