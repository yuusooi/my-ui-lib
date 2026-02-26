import{j as e,r as h}from"./iframe-BrsRkbZt.js";import"./preload-helper-PPVm8Dsz.js";const r=({spinning:o=!0,size:c="default",tip:t,children:g,className:x,style:m})=>{const u=g!==void 0,f=()=>e.jsxs("div",{className:"my-spinner",children:[e.jsx("svg",{className:"my-spinner-icon",viewBox:"0 0 1024 1024",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"})}),t&&e.jsx("div",{className:"my-spinner-tip",children:t})]});if(!u){if(!o)return null;const v=["my-spin",`my-spin-${c}`];return x&&v.push(x),e.jsx("div",{className:v.join(" "),style:m,children:f()})}const y=["my-spin-nested-wrapper"];return x&&y.push(x),e.jsxs("div",{className:y.join(" "),style:m,children:[e.jsx("div",{className:"my-spin-nested-content",children:g}),o&&e.jsx("div",{className:"my-spin-nested-loading","aria-busy":"true",children:f()})]})};r.__docgenInfo={description:`Spin 加载中组件

用于页面和区块的加载中状态。

@example
\`\`\`tsx
// 基础用法 - 独立使用
<Spin />

// 带提示文字
<Spin tip="加载中..." />

// 不同尺寸
<Spin size="small" />
<Spin size="large" />

// 包裹模式 - 加载内容
<Spin spinning={true}>
  <div>这里是内容</div>
</Spin>

// 控制加载状态
<Spin spinning={isLoading}>
  <Table data={data} />
</Spin>
\`\`\``,methods:[],displayName:"Spin",props:{spinning:{required:!1,tsType:{name:"boolean"},description:`是否处于加载中
@default true`,defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`加载指示器尺寸
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},tip:{required:!1,tsType:{name:"string"},description:"加载提示文字（显示在加载图标下方）"},children:{required:!1,tsType:{name:"ReactNode"},description:"包裹的内容（如果有此属性，启用包裹模式，渲染遮罩层）"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};const j={title:"反馈交互/Spin",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Spin 加载中组件 Storybook

展示 Spin 组件的各种用法和状态`}}},argTypes:{spinning:{control:"boolean",description:"是否处于加载中",table:{defaultValue:{summary:!0}}},size:{control:"select",options:["small","default","large"],description:"加载指示器尺寸",table:{defaultValue:{summary:"default"}}},tip:{control:"text",description:"加载提示文字"},children:{control:!1,description:"包裹的内容（如果有，启用包裹模式）"},className:{control:"text",description:"自定义类名"},style:{control:!1,description:"自定义样式（CSSProperties 对象）"}}},i={name:"Playground",args:{spinning:!0,size:"default",tip:"加载中..."},render:o=>e.jsx(r,{...o})},n={name:"基础用法 - 不同尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{size:"small"}),e.jsx(r,{size:"default"}),e.jsx(r,{size:"large"})]})},s={name:"带提示文字",render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{tip:"加载中...",size:"small"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:"var(--text-color-secondary)"},children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{tip:"加载中...",size:"default"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:"var(--text-color-secondary)"},children:"Default"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{tip:"加载中...",size:"large"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px",color:"var(--text-color-secondary)"},children:"Large"})]})]})},a={name:"包裹模式 - 卡片加载",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx(r,{spinning:!0,tip:"加载中...",children:e.jsxs("div",{style:{width:"200px",padding:"24px",backgroundColor:"var(--component-bg, #fff)",border:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",borderRadius:"4px"},children:[e.jsx("div",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:500},children:"卡片标题"}),e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)"},children:"这是一段示例内容，用于展示加载中的遮罩效果。"})]})}),e.jsx(r,{spinning:!1,children:e.jsxs("div",{style:{width:"200px",padding:"24px",backgroundColor:"var(--component-bg, #fff)",border:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",borderRadius:"4px"},children:[e.jsx("div",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:500},children:"卡片标题"}),e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)"},children:"这是一段示例内容，加载完成后可以正常查看。"})]})})]})},d={name:"包裹模式 - 表格加载",render:()=>{const[o,c]=h.useState(!0);return e.jsxs("div",{style:{width:"100%",maxWidth:"800px"},children:[e.jsxs("div",{style:{marginBottom:"16px",display:"flex",gap:"12px"},children:[e.jsx("button",{onClick:()=>c(!0),style:{padding:"6px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"var(--primary-color, #0f0f0f)",color:"var(--primary-text-color, #fff)",border:"none",borderRadius:"2px"},children:"开始加载"}),e.jsx("button",{onClick:()=>c(!1),style:{padding:"6px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"var(--component-bg, #fff)",color:"var(--text-color, #37352f)",border:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",borderRadius:"2px"},children:"加载完成"})]}),e.jsx(r,{spinning:o,tip:"正在加载数据...",children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"var(--component-bg, #fff)",border:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",borderRadius:"4px",overflow:"hidden"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",backgroundColor:"var(--component-hover-bg, rgba(55, 53, 47, 0.04))"},children:[e.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:500},children:"姓名"}),e.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:500},children:"年龄"}),e.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:500},children:"职业"}),e.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:500},children:"邮箱"})]})}),e.jsx("tbody",{children:[1,2,3,4,5].map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))"},children:[e.jsxs("td",{style:{padding:"12px",fontSize:"14px"},children:["用户 ",t]}),e.jsx("td",{style:{padding:"12px",fontSize:"14px"},children:20+t}),e.jsx("td",{style:{padding:"12px",fontSize:"14px"},children:"前端工程师"}),e.jsxs("td",{style:{padding:"12px",fontSize:"14px"},children:["user",t,"@example.com"]})]},t))})]})})]})}},l={name:"自定义提示文字",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx(r,{tip:"正在提交表单...",size:"default"}),e.jsx(r,{tip:"正在上传文件...",size:"default"}),e.jsx(r,{tip:"请稍候，正在处理...",size:"large"}),e.jsx(r,{tip:"数据同步中...",size:"large"})]})},p={name:"组合展示 - 业务场景",render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"900px"},children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 1：按钮加载"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{tip:"提交中...",size:"small"}),e.jsx("span",{style:{fontSize:"14px",color:"var(--text-color-secondary)"},children:"正在提交表单..."})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 2：内容区域加载"}),e.jsx(r,{spinning:!0,tip:"正在加载内容...",children:e.jsx("div",{style:{minHeight:"200px",padding:"24px",backgroundColor:"var(--component-bg, #fff)",border:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)"},children:"这是内容区域，加载时会被遮罩层覆盖"})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"var(--text-color-secondary)",marginBottom:"12px",fontWeight:500},children:"场景 3：图片加载"}),e.jsx(r,{spinning:!0,size:"large",children:e.jsx("div",{style:{width:"200px",height:"150px",backgroundColor:"var(--component-hover-bg, rgba(55, 53, 47, 0.04))",border:"1px solid var(--border-color, rgba(55, 53, 47, 0.16))",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:"var(--text-color-secondary)"},children:"图片区域"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    spinning: true,
    size: 'default',
    tip: '加载中...'
  },
  render: args => <Spin {...args} />
}`,...i.parameters?.docs?.source},description:{story:"Playground - 在 Controls 面板中测试所有属性",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '基础用法 - 不同尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Spin size="small" />
      <Spin size="default" />
      <Spin size="large" />
    </div>
}`,...n.parameters?.docs?.source},description:{story:`基础用法 - 独立使用

最简单的用法，展示不同尺寸的加载指示器`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '带提示文字',
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin tip="加载中..." size="small" />
        <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: 'var(--text-color-secondary)'
      }}>
          Small
        </div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin tip="加载中..." size="default" />
        <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: 'var(--text-color-secondary)'
      }}>
          Default
        </div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin tip="加载中..." size="large" />
        <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: 'var(--text-color-secondary)'
      }}>
          Large
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source},description:{story:`带提示文字

在加载图标下方显示提示文字`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '包裹模式 - 卡片加载',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      {/* 示例 1：加载中的卡片 */}
      <Spin spinning={true} tip="加载中...">
        <div style={{
        width: '200px',
        padding: '24px',
        backgroundColor: 'var(--component-bg, #fff)',
        border: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
        borderRadius: '4px'
      }}>
          <div style={{
          marginBottom: '12px',
          fontSize: '16px',
          fontWeight: 500
        }}>
            卡片标题
          </div>
          <div style={{
          fontSize: '14px',
          color: 'var(--text-color-secondary)'
        }}>
            这是一段示例内容，用于展示加载中的遮罩效果。
          </div>
        </div>
      </Spin>

      {/* 示例 2：未加载的卡片 */}
      <Spin spinning={false}>
        <div style={{
        width: '200px',
        padding: '24px',
        backgroundColor: 'var(--component-bg, #fff)',
        border: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
        borderRadius: '4px'
      }}>
          <div style={{
          marginBottom: '12px',
          fontSize: '16px',
          fontWeight: 500
        }}>
            卡片标题
          </div>
          <div style={{
          fontSize: '14px',
          color: 'var(--text-color-secondary)'
        }}>
            这是一段示例内容，加载完成后可以正常查看。
          </div>
        </div>
      </Spin>
    </div>
}`,...a.parameters?.docs?.source},description:{story:`包裹模式 - 卡片加载

在内容上方覆盖遮罩层，适用于加载表格、卡片等内容`,...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '包裹模式 - 表格加载',
  render: () => {
    const [loading, setLoading] = useState(true);
    return <div style={{
      width: '100%',
      maxWidth: '800px'
    }}>
        <div style={{
        marginBottom: '16px',
        display: 'flex',
        gap: '12px'
      }}>
          <button onClick={() => setLoading(true)} style={{
          padding: '6px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: 'var(--primary-color, #0f0f0f)',
          color: 'var(--primary-text-color, #fff)',
          border: 'none',
          borderRadius: '2px'
        }}>
            开始加载
          </button>
          <button onClick={() => setLoading(false)} style={{
          padding: '6px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: 'var(--component-bg, #fff)',
          color: 'var(--text-color, #37352f)',
          border: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
          borderRadius: '2px'
        }}>
            加载完成
          </button>
        </div>

        <Spin spinning={loading} tip="正在加载数据...">
          <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'var(--component-bg, #fff)',
          border: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
            <thead>
              <tr style={{
              borderBottom: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
              backgroundColor: 'var(--component-hover-bg, rgba(55, 53, 47, 0.04))'
            }}>
                <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: 500
              }}>
                  姓名
                </th>
                <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: 500
              }}>
                  年龄
                </th>
                <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: 500
              }}>
                  职业
                </th>
                <th style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: 500
              }}>
                  邮箱
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(i => <tr key={i} style={{
              borderBottom: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))'
            }}>
                  <td style={{
                padding: '12px',
                fontSize: '14px'
              }}>
                    用户 {i}
                  </td>
                  <td style={{
                padding: '12px',
                fontSize: '14px'
              }}>
                    {20 + i}
                  </td>
                  <td style={{
                padding: '12px',
                fontSize: '14px'
              }}>
                    前端工程师
                  </td>
                  <td style={{
                padding: '12px',
                fontSize: '14px'
              }}>
                    user{i}@example.com
                  </td>
                </tr>)}
            </tbody>
          </table>
        </Spin>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`包裹模式 - 表格加载

模拟实际业务中的表格加载场景`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '自定义提示文字',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      <Spin tip="正在提交表单..." size="default" />
      <Spin tip="正在上传文件..." size="default" />
      <Spin tip="请稍候，正在处理..." size="large" />
      <Spin tip="数据同步中..." size="large" />
    </div>
}`,...l.parameters?.docs?.source},description:{story:`自定义提示文字

展示不同场景下的提示文字`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '组合展示 - 业务场景',
  render: () => <div style={{
    width: '100%',
    maxWidth: '900px'
  }}>
      {/* 场景 1：按钮加载 */}
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 1：按钮加载
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Spin tip="提交中..." size="small" />
          <span style={{
          fontSize: '14px',
          color: 'var(--text-color-secondary)'
        }}>
            正在提交表单...
          </span>
        </div>
      </div>

      {/* 场景 2：内容区域加载 */}
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 2：内容区域加载
        </div>
        <Spin spinning={true} tip="正在加载内容...">
          <div style={{
          minHeight: '200px',
          padding: '24px',
          backgroundColor: 'var(--component-bg, #fff)',
          border: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <div style={{
            fontSize: '14px',
            color: 'var(--text-color-secondary)'
          }}>
              这是内容区域，加载时会被遮罩层覆盖
            </div>
          </div>
        </Spin>
      </div>

      {/* 场景 3：图片加载 */}
      <div style={{
      marginBottom: '24px'
    }}>
        <div style={{
        fontSize: '14px',
        color: 'var(--text-color-secondary)',
        marginBottom: '12px',
        fontWeight: 500
      }}>
          场景 3：图片加载
        </div>
        <Spin spinning={true} size="large">
          <div style={{
          width: '200px',
          height: '150px',
          backgroundColor: 'var(--component-hover-bg, rgba(55, 53, 47, 0.04))',
          border: '1px solid var(--border-color, rgba(55, 53, 47, 0.16))',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          color: 'var(--text-color-secondary)'
        }}>
            图片区域
          </div>
        </Spin>
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`组合展示 - 业务场景

展示实际业务场景中的常见用法`,...p.parameters?.docs?.description}}};const z=["Playground","Basic","WithTip","WrapperMode","TableLoading","CustomTip","Combination"];export{n as Basic,p as Combination,l as CustomTip,i as Playground,d as TableLoading,s as WithTip,a as WrapperMode,z as __namedExportsOrder,j as default};
