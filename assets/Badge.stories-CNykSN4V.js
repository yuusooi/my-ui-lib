import{j as e}from"./iframe-BblueGYI.js";import{A as s}from"./index-bx65pWE4.js";import"./preload-helper-PPVm8Dsz.js";const a=({children:t,count:r=0,dot:m=!1,overflowCount:C=99,showZero:S=!1,status:v,text:q,color:o,offset:y,title:I,className:A,style:z})=>{const h=typeof r=="number"&&r>C?`${C}+`:r,N=!v&&!m&&r===0&&!S,T=typeof r=="number"&&r>=0&&r<10,B=["my-badge-count"];m||(T?B.push("my-badge-count-single"):B.push("my-badge-count-multiple"));const b=["my-badge"],k=!t&&v;k&&b.push("my-badge-status"),A&&b.push(A);const j={...z};if(o&&(j.backgroundColor=o),y&&y.length===2&&(j.right=`-${y[0]}px`,j.marginTop=`${y[1]}px`),k){const $=o&&o!=="gray"?{backgroundColor:o}:{},Z=`my-badge-status-dot my-badge-status-${v}`;return e.jsxs("span",{className:b.join(" "),children:[e.jsx("span",{className:Z,style:$,"data-status":v}),q&&e.jsx("span",{className:"my-badge-status-text",children:q})]})}const w=e.jsx("sup",{className:`${B.join(" ")} ${m?"my-badge-dot":""} ${N?"my-badge-hidden":""} ${t?"":"my-badge-count-standalone"}`,style:j,title:I??(typeof h=="number"?`${h}`:h),children:m?null:h});return t?e.jsxs("span",{className:"my-badge-wrapper",children:[t,w]}):w};a.__docgenInfo={description:`Badge 徽标数组件

用于展示通知数量、状态标记等。支持数字封顶、小红点、状态展示等模式。

@example
\`\`\`tsx
// 数字徽标
<Badge count={5}>
  <button>消息</button>
</Badge>

// 封顶数字
<Badge count={100} overflowCount={99}>
  <button>通知</button>
</Badge>

// 小红点
<Badge dot>
  <button>待办</button>
</Badge>

// 独立状态徽标
<Badge status="success" text="成功" />
\`\`\``,methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"包裹的子元素"},count:{required:!1,tsType:{name:"ReactNode"},description:`显示的数字或内容
@default 0`,defaultValue:{value:"0",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:`是否显示为小红点
@default false`,defaultValue:{value:"false",computed:!1}},overflowCount:{required:!1,tsType:{name:"number"},description:"数字封顶值（超过显示 `${overflowCount}+`）\n@default 99",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:`当 count 为 0 时是否显示徽标
@default false`,defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'success' | 'processing' | 'default' | 'error' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'processing'"},{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"状态徽标的状态（独立使用，不包裹 children）"},text:{required:!1,tsType:{name:"ReactNode"},description:"状态徽标的文字"},color:{required:!1,tsType:{name:"string"},description:"自定义徽标颜色"},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"设置徽标的偏移量 [x, y]，单位 px"},title:{required:!1,tsType:{name:"string"},description:"鼠标悬浮时显示的文字"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const F={title:"数据展示/Badge",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{count:{control:"text",description:"显示的数字或内容"},dot:{control:"boolean",description:"是否显示为小红点",table:{defaultValue:{summary:!1}}},overflowCount:{control:"number",description:"数字封顶值",table:{defaultValue:{summary:99}}},showZero:{control:"boolean",description:"count为0时是否显示",table:{defaultValue:{summary:!1}}},status:{control:"select",options:["success","processing","default","error","warning"],description:"状态徽标的状态"},text:{control:"text",description:"状态徽标的文字"},color:{control:"color",description:"自定义徽标颜色"},offset:{control:"object",description:"徽标的偏移量 [x, y]"},title:{control:"text",description:"鼠标悬浮时显示的文字"}}},n={name:"基础用法",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{count:5,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"5"})}),e.jsx(a,{count:0,showZero:!0,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"0"})}),e.jsx(a,{count:99,children:e.jsx(s,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",shape:"square"})}),e.jsx(a,{count:100,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"+"})})]})},d={name:"封顶数字",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{count:100,overflowCount:99,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"99+"})}),e.jsx(a,{count:1e3,overflowCount:999,children:e.jsx(s,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",shape:"square"})})]})},l={name:"数字位数对比",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"个位数（圆形）"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{count:0,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"0"})}),e.jsx(a,{count:1,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"1"})}),e.jsx(a,{count:5,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"5"})}),e.jsx(a,{count:9,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"9"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"多位数（胶囊形状）"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{count:10,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"10"})}),e.jsx(a,{count:99,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"99"})}),e.jsx(a,{count:100,overflowCount:99,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"99+"})})]})]})]})},c={name:"独立徽标",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"独立数字徽标"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{count:5}),e.jsx(a,{count:10}),e.jsx(a,{count:99}),e.jsx(a,{count:100,overflowCount:99})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"独立小红点"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{dot:!0}),e.jsx(a,{dot:!0}),e.jsx(a,{dot:!0})]})]})]})},i={name:"小红点",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{dot:!0,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"待"})}),e.jsx(a,{dot:!0,children:e.jsx(s,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=John",shape:"square"})}),e.jsx(a,{dot:!0,children:e.jsx("a",{href:"#",style:{color:"var(--color-primary)",textDecoration:"none"},children:"链接"})})]})},u={name:"状态徽标",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"带文字的状态徽标"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{status:"success",text:"成功"}),e.jsx(a,{status:"processing",text:"进行中"}),e.jsx(a,{status:"error",text:"错误"}),e.jsx(a,{status:"warning",text:"警告"}),e.jsx(a,{status:"default",text:"默认"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"纯状态点（无文字）"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{status:"success"}),e.jsx(a,{status:"processing"}),e.jsx(a,{status:"error"}),e.jsx(a,{status:"warning"}),e.jsx(a,{status:"default"})]})]})]})},p={name:"自定义颜色",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{count:5,color:"#52c41a",children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"成"})}),e.jsx(a,{count:10,color:"#1890ff",children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"信"})}),e.jsx(a,{count:20,color:"#faad14",children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"警"})})]})},g={name:"偏移量",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{count:10,offset:[10,10],children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"偏"})}),e.jsx(a,{count:20,offset:[20,0],children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"移"})}),e.jsx(a,{dot:!0,offset:[0,10],children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"点"})})]})},f={name:"组合展示",render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"消息通知（数字徽标）"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{count:5,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"消"})}),e.jsx(a,{count:0,showZero:!0,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"通"})}),e.jsx(a,{count:99,children:e.jsx(s,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",shape:"square"})}),e.jsx(a,{count:100,overflowCount:99,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"99+"})})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"待办事项（小红点）"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{dot:!0,children:e.jsx(s,{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",shape:"square"})}),e.jsx(a,{dot:!0,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"待"})}),e.jsx(a,{dot:!0,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"办"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px"},children:"状态指示（独立徽标）"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{status:"success",text:"成功"}),e.jsx(a,{status:"processing",text:"进行中"}),e.jsx(a,{status:"error",text:"错误"}),e.jsx(a,{status:"warning",text:"警告"})]})]})]})},x={name:"Playground",args:{count:5,dot:!1,overflowCount:99,showZero:!1},render:t=>e.jsx(a,{...t,children:e.jsx(s,{shape:"square",style:{backgroundColor:"#f5f5f5"},children:"测试"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Badge count={5}>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          5
        </Avatar>
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          0
        </Avatar>
      </Badge>
      <Badge count={99}>
        <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" shape="square" />
      </Badge>
      <Badge count={100}>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          +
        </Avatar>
      </Badge>
    </div>
}`,...n.parameters?.docs?.source},description:{story:`基础用法 - 包裹在 Avatar 右上角
个位数显示圆形，多位数显示胶囊形状`,...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '封顶数字',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Badge count={100} overflowCount={99}>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          99+
        </Avatar>
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" shape="square" />
      </Badge>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"封顶数字 - 超过 overflowCount 显示 99+",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '数字位数对比',
  render: () => <div>
      <div style={{
      marginBottom: '16px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          个位数（圆形）
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Badge count={0}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              0
            </Avatar>
          </Badge>
          <Badge count={1}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              1
            </Avatar>
          </Badge>
          <Badge count={5}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              5
            </Avatar>
          </Badge>
          <Badge count={9}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              9
            </Avatar>
          </Badge>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          多位数（胶囊形状）
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Badge count={10}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              10
            </Avatar>
          </Badge>
          <Badge count={99}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              99
            </Avatar>
          </Badge>
          <Badge count={100} overflowCount={99}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              99+
            </Avatar>
          </Badge>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"数字位数对比 - 个位数圆形 vs 多位数胶囊",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '独立徽标',
  render: () => <div>
      <div style={{
      marginBottom: '16px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          独立数字徽标
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Badge count={5} />
          <Badge count={10} />
          <Badge count={99} />
          <Badge count={100} overflowCount={99} />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          独立小红点
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Badge dot />
          <Badge dot />
          <Badge dot />
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"独立徽标 - 不包裹元素，仅显示徽标",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '小红点',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Badge dot>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          待
        </Avatar>
      </Badge>
      <Badge dot>
        <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" shape="square" />
      </Badge>
      <Badge dot>
        <a href="#" style={{
        color: 'var(--color-primary)',
        textDecoration: 'none'
      }}>
          链接
        </a>
      </Badge>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"小红点模式 - 使用 dot 属性",...i.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '状态徽标',
  render: () => <div>
      <div style={{
      marginBottom: '16px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          带文字的状态徽标
        </div>
        <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
          <Badge status="success" text="成功" />
          <Badge status="processing" text="进行中" />
          <Badge status="error" text="错误" />
          <Badge status="warning" text="警告" />
          <Badge status="default" text="默认" />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          纯状态点（无文字）
        </div>
        <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
          <Badge status="success" />
          <Badge status="processing" />
          <Badge status="error" />
          <Badge status="warning" />
          <Badge status="default" />
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"状态徽标 - 使用 status 显示不同状态",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '自定义颜色',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Badge count={5} color="#52c41a">
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          成
        </Avatar>
      </Badge>
      <Badge count={10} color="#1890ff">
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          信
        </Avatar>
      </Badge>
      <Badge count={20} color="#faad14">
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          警
        </Avatar>
      </Badge>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"自定义颜色 - 使用 color 属性自定义徽标颜色",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '偏移量',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Badge count={10} offset={[10, 10]}>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          偏
        </Avatar>
      </Badge>
      <Badge count={20} offset={[20, 0]}>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          移
        </Avatar>
      </Badge>
      <Badge dot offset={[0, 10]}>
        <Avatar shape="square" style={{
        backgroundColor: '#f5f5f5'
      }}>
          点
        </Avatar>
      </Badge>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"偏移量 - 使用 offset 调整徽标位置",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '组合展示',
  render: () => <div>
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          消息通知（数字徽标）
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Badge count={5}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              消
            </Avatar>
          </Badge>
          <Badge count={0} showZero>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              通
            </Avatar>
          </Badge>
          <Badge count={99}>
            <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" shape="square" />
          </Badge>
          <Badge count={100} overflowCount={99}>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              99+
            </Avatar>
          </Badge>
        </div>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          待办事项（小红点）
        </div>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Badge dot>
            <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" shape="square" />
          </Badge>
          <Badge dot>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              待
            </Avatar>
          </Badge>
          <Badge dot>
            <Avatar shape="square" style={{
            backgroundColor: '#f5f5f5'
          }}>
              办
            </Avatar>
          </Badge>
        </div>
      </div>

      <div>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px'
      }}>
          状态指示（独立徽标）
        </div>
        <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
          <Badge status="success" text="成功" />
          <Badge status="processing" text="进行中" />
          <Badge status="error" text="错误" />
          <Badge status="warning" text="警告" />
        </div>
      </div>
    </div>
}`,...f.parameters?.docs?.source},description:{story:"组合展示 - 真实场景演示",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    count: 5,
    dot: false,
    overflowCount: 99,
    showZero: false
  },
  render: args => <Badge {...args}>
      <Avatar shape="square" style={{
      backgroundColor: '#f5f5f5'
    }}>
        测试
      </Avatar>
    </Badge>
}`,...x.parameters?.docs?.source},description:{story:"Playground - 在 Controls 面板中测试所有属性",...x.parameters?.docs?.description}}};const R=["Basic","OverflowCount","NumberCount","Standalone","Dot","Status","CustomColor","Offset","Combination","Playground"];export{n as Basic,f as Combination,p as CustomColor,i as Dot,l as NumberCount,g as Offset,d as OverflowCount,x as Playground,c as Standalone,u as Status,R as __namedExportsOrder,F as default};
