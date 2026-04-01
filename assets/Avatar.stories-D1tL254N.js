import{j as e}from"./iframe-BanNrfm3.js";import{A as a}from"./index-o5R4bciB.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"数据展示/Avatar",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{description:"文字内容（ReactNode）",table:{type:{summary:"ReactNode"}}},src:{control:"text",description:"图片地址"},icon:{control:!1,description:"图标元素（ReactNode）"},shape:{control:"select",options:["circle","square"],description:"形状",table:{defaultValue:{summary:"circle"}}},size:{control:"select",options:["small","default","large"],description:"预设尺寸（也支持自定义数字）",table:{defaultValue:{summary:"default"}}},alt:{control:"text",description:"图片 alt 属性"},onError:{control:!1,description:"图片加载失败时的回调",table:{type:{summary:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean | void"}}},className:{control:"text",description:"自定义类名"},style:{control:"object",description:"自定义样式"}}},r={name:"基础用法",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",alt:"头像1"}),e.jsx(a,{children:"张三"}),e.jsx(a,{children:e.jsx("span",{style:{fontSize:"20px"},children:"👤"})})]})},s={name:"图片头像",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",alt:"Felix"}),e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",alt:"Aneka"}),e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=John",alt:"John"})]})},t={name:"文字头像",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{children:"A"}),e.jsx(a,{children:"张三"}),e.jsx(a,{children:"李四"}),e.jsx(a,{children:"Admin"}),e.jsx(a,{children:"User"})]})},i={name:"形状",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{shape:"circle",children:"圆形"}),e.jsx(a,{shape:"square",children:"方形"}),e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",shape:"circle"}),e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",shape:"square"})]})},o={name:"尺寸",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px"},children:"预设尺寸"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"small",children:"S"}),e.jsx(a,{size:"default",children:"M"}),e.jsx(a,{size:"large",children:"L"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px"},children:"自定义尺寸"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:40,children:"40"}),e.jsx(a,{size:60,children:"60"}),e.jsx(a,{size:80,children:"80"}),e.jsx(a,{size:100,children:"100"})]})]})]})},l={name:"自定义样式",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{style:{backgroundColor:"#f56a00",color:"#fff"},children:"橙色"}),e.jsx(a,{style:{backgroundColor:"#87d068",color:"#fff"},children:"绿色"}),e.jsx(a,{style:{backgroundColor:"#108ee9",color:"#fff"},children:"蓝色"}),e.jsx(a,{style:{backgroundColor:"#722ed1",color:"#fff"},children:"紫色"})]})},n={name:"组合展示",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px"},children:"图片头像"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"}),e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"}),e.jsx(a,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=John"})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px"},children:"文字头像"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{children:"A"}),e.jsx(a,{children:"张三"}),e.jsx(a,{children:"Admin"})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px"},children:"不同形状 + 不同尺寸"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{shape:"circle",size:"small",children:"小圆"}),e.jsx(a,{shape:"circle",size:"default",children:"中圆"}),e.jsx(a,{shape:"circle",size:"large",children:"大圆"}),e.jsx(a,{shape:"square",size:"small",children:"小方"}),e.jsx(a,{shape:"square",size:"default",children:"中方"}),e.jsx(a,{shape:"square",size:"large",children:"大方"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px"},children:"自定义样式"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{style:{backgroundColor:"#f56a00",color:"#fff"},children:"橙"}),e.jsx(a,{style:{backgroundColor:"#87d068",color:"#fff"},children:"绿"}),e.jsx(a,{style:{backgroundColor:"#108ee9",color:"#fff"},children:"蓝"})]})]})]})},c={name:"Playground",args:{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",shape:"circle",size:"default",alt:"Avatar"},render:d=>e.jsx(a,{...d})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="头像1" />
      <Avatar>张三</Avatar>
      <Avatar>
        <span style={{
        fontSize: '20px'
      }}>👤</span>
      </Avatar>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"基础用法 - 展示不同类型的头像",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '图片头像',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Felix" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Aneka" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"图片头像 - 使用图片作为头像",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '文字头像',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar>A</Avatar>
      <Avatar>张三</Avatar>
      <Avatar>李四</Avatar>
      <Avatar>Admin</Avatar>
      <Avatar>User</Avatar>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"文字头像 - 自动缩放以适应容器",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '形状',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar shape="circle">圆形</Avatar>
      <Avatar shape="square">方形</Avatar>
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" shape="circle" />
      <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" shape="square" />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"形状 - 支持圆形和方形",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <div>
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '12px'
      }}>
          预设尺寸
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Avatar size="small">S</Avatar>
          <Avatar size="default">M</Avatar>
          <Avatar size="large">L</Avatar>
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '12px'
      }}>
          自定义尺寸
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Avatar size={40}>40</Avatar>
          <Avatar size={60}>60</Avatar>
          <Avatar size={80}>80</Avatar>
          <Avatar size={100}>100</Avatar>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"尺寸 - 支持预设尺寸和自定义尺寸",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '自定义样式',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar style={{
      backgroundColor: '#f56a00',
      color: '#fff'
    }}>
        橙色
      </Avatar>
      <Avatar style={{
      backgroundColor: '#87d068',
      color: '#fff'
    }}>
        绿色
      </Avatar>
      <Avatar style={{
      backgroundColor: '#108ee9',
      color: '#fff'
    }}>
        蓝色
      </Avatar>
      <Avatar style={{
      backgroundColor: '#722ed1',
      color: '#fff'
    }}>
        紫色
      </Avatar>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"自定义样式 - 自定义背景色和样式",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '组合展示',
  render: () => <div>
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '12px'
      }}>
          图片头像
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
          <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" />
          <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
        </div>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '12px'
      }}>
          文字头像
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Avatar>A</Avatar>
          <Avatar>张三</Avatar>
          <Avatar>Admin</Avatar>
        </div>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '12px'
      }}>
          不同形状 + 不同尺寸
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Avatar shape="circle" size="small">
            小圆
          </Avatar>
          <Avatar shape="circle" size="default">
            中圆
          </Avatar>
          <Avatar shape="circle" size="large">
            大圆
          </Avatar>
          <Avatar shape="square" size="small">
            小方
          </Avatar>
          <Avatar shape="square" size="default">
            中方
          </Avatar>
          <Avatar shape="square" size="large">
            大方
          </Avatar>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '12px'
      }}>
          自定义样式
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Avatar style={{
          backgroundColor: '#f56a00',
          color: '#fff'
        }}>
            橙
          </Avatar>
          <Avatar style={{
          backgroundColor: '#87d068',
          color: '#fff'
        }}>
            绿
          </Avatar>
          <Avatar style={{
          backgroundColor: '#108ee9',
          color: '#fff'
        }}>
            蓝
          </Avatar>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"组合展示 - 不同类型和样式的组合",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    shape: 'circle',
    size: 'default',
    alt: 'Avatar'
  },
  render: args => <Avatar {...args} />
}`,...c.parameters?.docs?.source},description:{story:"Playground - 在 Controls 面板中测试所有属性",...c.parameters?.docs?.description}}};const g=["Basic","Image","Text","Shape","Size","CustomStyle","Combination","Playground"];export{r as Basic,n as Combination,l as CustomStyle,s as Image,c as Playground,i as Shape,o as Size,t as Text,g as __namedExportsOrder,m as default};
