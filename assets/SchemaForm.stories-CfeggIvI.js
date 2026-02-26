import{R as c,j as t,r as y}from"./iframe-BblueGYI.js";import{F as b,b as g,a as h}from"./index-BJRLn4J3.js";import{I as p}from"./index-CMGU_2ki.js";import"./preload-helper-PPVm8Dsz.js";const x={input:p,password:p,textarea:p},f=({schemas:n,submitText:s})=>{const{values:i}=y.useContext(g),l=c.useMemo(()=>n.filter(e=>e.hidden?!e.hidden(i):!0),[n,i]);return t.jsxs(t.Fragment,{children:[l.map((e,r)=>{const m=x[e.type];if(!m)return console.warn(`未找到类型为 ${e.type} 的组件，请检查 componentMap`),null;const u={...e.props,placeholder:e.placeholder||`请输入${e.label||e.name}`};return e.type==="password"&&(u.type="password"),t.jsx(h,{name:e.name,label:e.label,children:t.jsx(m,{...u})},e.name||r)}),t.jsx("button",{type:"submit",children:s})]})},d=({schemas:n,onSubmit:s,submitText:i="提交"})=>{const l=c.useMemo(()=>{const e={};return n.forEach(r=>{r.initialValue!==void 0?e[r.name]=r.initialValue:e[r.name]=""}),e},[n]);return t.jsx(b,{initialValues:l,onSubmit:s,children:t.jsx(f,{schemas:n,onSubmit:s,submitText:i})})};d.__docgenInfo={description:"",methods:[],displayName:"SchemaForm",props:{schemas:{required:!0,tsType:{name:"Array",elements:[{name:"FormItemSchema"}],raw:"FormItemSchema[]"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},name:"values"}],return:{name:"void"}}},description:""},submitText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'提交'",computed:!1}}}};const V={title:"数据录入/SchemaForm",component:d,tags:["autodocs"]},a={name:"基础表单",args:{schemas:[{type:"input",name:"username",label:"用户名",placeholder:"请输入用户名",initialValue:""},{type:"password",name:"password",label:"密码",placeholder:"请输入密码",initialValue:""}],onSubmit:n=>{console.log("表单提交数据：",n),alert(`提交成功！
用户名：${n.username}
密码：${n.password}`)},submitText:"登录"}},o={name:"表单联动",args:{schemas:[{type:"input",name:"username",label:"用户名",placeholder:"请输入用户名"},{type:"input",name:"country",label:"国家",placeholder:'请输入国家（输入"中国"会显示省份字段）'},{type:"input",name:"province",label:"省份",placeholder:"请输入省份",hidden:n=>n.country!=="中国"}],onSubmit:n=>{alert(`提交成功！
${JSON.stringify(n,null,2)}`)},submitText:"注册"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '基础表单',
  // 在 Storybook 中显示的名字
  args: {
    // schemas 配置：定义表单结构
    schemas: [{
      type: 'input',
      // 组件类型：普通输入框
      name: 'username',
      // 字段名
      label: '用户名',
      // 标签文字
      placeholder: '请输入用户名',
      // 占位符
      initialValue: '' // 初始值
    }, {
      type: 'password',
      // 组件类型：密码输入框
      name: 'password',
      // 字段名
      label: '密码',
      // 标签文字
      placeholder: '请输入密码',
      initialValue: ''
    }],
    // 提交回调函数：打印收集到的数据
    onSubmit: values => {
      console.log('表单提交数据：', values);
      alert(\`提交成功！\\n用户名：\${values.username}\\n密码：\${values.password}\`);
    },
    submitText: '登录' // 提交按钮文字
  }
}`,...a.parameters?.docs?.source},description:{story:`基础测试：简单的登录表单
验证点：
1. 能否正确渲染用户名和密码输入框
2. 点击提交后能否收集到数据`,...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '表单联动',
  args: {
    schemas: [{
      type: 'input',
      name: 'username',
      label: '用户名',
      placeholder: '请输入用户名'
    }, {
      type: 'input',
      // 先用 input 代替 select（后面你可 以添加真正的 Select 组件）
      name: 'country',
      label: '国家',
      placeholder: '请输入国家（输入"中国"会显示省份字段）'
    }, {
      type: 'input',
      name: 'province',
      label: '省份',
      placeholder: '请输入省份',
      // 【核心联动逻辑】当 country 不等于"中国"时，隐藏此字段
      hidden: values => {
        return values.country !== '中国';
      }
    }],
    onSubmit: values => {
      alert(\`提交成功！\\n\${JSON.stringify(values, null, 2)}\`);
    },
    submitText: '注册'
  }
}`,...o.parameters?.docs?.source},description:{story:`进阶测试：带联动的注册表单
验证点：
1. 当国家选择"中国"时，才显示省份字段
2. 当国家选择其他国家时，省份字段隐藏`,...o.parameters?.docs?.description}}};const j=["BasicForm","FormWithLinkage"];export{a as BasicForm,o as FormWithLinkage,j as __namedExportsOrder,V as default};
