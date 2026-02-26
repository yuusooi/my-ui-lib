import{r as C,R as L,j as e}from"./iframe-BblueGYI.js";import"./preload-helper-PPVm8Dsz.js";const w="my-layout-header",R="my-layout-sider",N="my-layout-content",B="my-layout-footer",n=({className:t,style:r,children:a})=>{const o=C.useMemo(()=>L.Children.toArray(a).some(s=>L.isValidElement(s)?s.type===b:!1),[a]),d=["my-layout"];return o&&d.push("my-layout-has-sider"),t&&d.push(t),e.jsx("div",{className:d.join(" "),style:r,children:a})},W=({className:t,style:r,children:a})=>{const o=[w];return t&&o.push(t),e.jsx("div",{className:o.join(" "),style:r,children:a})},b=({className:t,style:r,children:a,width:o=200,collapsible:d=!1,collapsed:s,onCollapse:f,collapsedWidth:g=64})=>{const[S,H]=C.useState(!1),i=s!==void 0?s:S,F=C.useCallback(()=>{const v=!i;s===void 0&&H(v),f?.(v)},[i,s,f]),j=[R];t&&j.push(t),i&&g===0&&j.push("my-layout-sider-zero-width");const k=i?g:o;return e.jsxs("div",{className:j.join(" "),style:{width:k,...r},children:[a,d&&g!==0&&e.jsx("div",{className:"my-layout-sider-trigger",onClick:F,children:i?"›":"‹"})]})},M=({className:t,style:r,children:a})=>{const o=[N];return t&&o.push(t),e.jsx("div",{className:o.join(" "),style:r,children:a})},I=({className:t,style:r,children:a})=>{const o=[B];return t&&o.push(t),e.jsx("div",{className:o.join(" "),style:r,children:a})};n.Header=W;n.Sider=b;n.Content=M;n.Footer=I;n.__docgenInfo={description:`Layout 主容器组件
自动检测是否有 Sider，决定布局方向`,methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ className, style, children }",optional:!1,type:null}],returns:null},{name:"Sider",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  style,
  children,
  width = 200,
  collapsible = false,
  collapsed: propsCollapsed,
  onCollapse,
  collapsedWidth = 64,
}`,optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ className, style, children }",optional:!1,type:null}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ className, style, children }",optional:!1,type:null}],returns:null}],displayName:"Layout"};const D={title:"通用与布局/Layout",component:n,tags:["autodocs"]},l={name:"基础用法",render:()=>e.jsxs(n,{style:{height:"400px"},children:[e.jsx(n.Header,{children:"Header"}),e.jsx(n.Content,{children:"Content"}),e.jsx(n.Footer,{children:"Footer"})]})},c={name:"顶部-侧边栏-内容",render:()=>e.jsxs(n,{style:{height:"400px"},children:[e.jsx(n.Header,{children:"Header"}),e.jsxs(n,{children:[e.jsx(n.Sider,{children:"Sider"}),e.jsx(n.Content,{children:"Content"})]}),e.jsx(n.Footer,{children:"Footer"})]})},p={name:"可折叠侧边栏",render:()=>{const[t,r]=L.useState(!1);return e.jsxs(n,{style:{height:"400px"},children:[e.jsx(n.Header,{children:"Header"}),e.jsxs(n,{children:[e.jsx(n.Sider,{collapsible:!0,collapsed:t,onCollapse:r,width:200,collapsedWidth:64,children:t?"折叠":"侧边栏内容"}),e.jsx(n.Content,{children:"Content"})]})]})}},u={name:"自定义宽度",render:()=>e.jsx(n,{style:{height:"400px"},children:e.jsxs(n,{children:[e.jsx(n.Sider,{width:300,children:"300px 宽度的侧边栏"}),e.jsx(n.Content,{children:"Content"})]})})},y={name:"固定侧边栏",render:()=>e.jsx(n,{style:{height:"400px"},children:e.jsxs(n,{children:[e.jsx(n.Sider,{children:e.jsx("div",{style:{height:"200px",background:"rgba(0,0,0,0.05)",margin:"8px"},children:"固定区域"})}),e.jsx(n.Content,{children:e.jsx("div",{style:{height:"800px"},children:Array.from({length:50}).map((t,r)=>e.jsxs("p",{children:["内容行 ",r+1]},r))})})]})})},h={name:"完整后台管理布局",render:()=>{const[t,r]=L.useState(!1);return e.jsxs(n,{style:{height:"600px"},children:[e.jsx(n.Header,{style:{background:"var(--primary-color)",color:"var(--primary-text-color)"},children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold"},children:"My UI Lib"})}),e.jsxs(n,{children:[e.jsx(n.Sider,{collapsible:!0,collapsed:t,onCollapse:r,width:200,collapsedWidth:64,children:e.jsxs("div",{children:[e.jsx("div",{style:{padding:"16px",fontWeight:"bold",borderBottom:"1px solid var(--border-color)"},children:t?"菜单":"导航菜单"}),e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("div",{style:{marginBottom:"8px",padding:"8px",borderRadius:"4px",cursor:"pointer"},children:"仪表盘"}),e.jsx("div",{style:{marginBottom:"8px",padding:"8px",borderRadius:"4px",cursor:"pointer"},children:"用户管理"}),e.jsx("div",{style:{marginBottom:"8px",padding:"8px",borderRadius:"4px",cursor:"pointer"},children:"系统设置"})]})]})}),e.jsxs(n,{children:[e.jsx(n.Content,{children:e.jsxs("div",{style:{padding:"24px",background:"var(--component-bg)",borderRadius:"8px",minHeight:"380px"},children:[e.jsx("h2",{children:"页面标题"}),e.jsx("p",{children:"这是主要内容区域，可以根据需要放置任何内容。"}),e.jsx("p",{children:"Layout 组件采用 Flexbox 布局，自动适应父容器高度。"})]})}),e.jsxs(n.Footer,{children:["My UI Lib ©",new Date().getFullYear()," Created by Me"]})]})]})]})}},m={name:"响应式布局",render:()=>{const[t,r]=L.useState(!1);return e.jsxs(n,{style:{height:"400px"},children:[e.jsx(n.Header,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"响应式布局-"}),e.jsx("span",{children:"调整窗口大小查看效果"})]})}),e.jsxs(n,{children:[e.jsx(n.Sider,{collapsible:!0,collapsed:t,onCollapse:r,breakpoint:"lg",width:200,children:"侧边栏"}),e.jsx(n.Content,{children:e.jsx("p",{children:"在小屏幕上，侧边栏会自动折叠。"})})]})]})}},x={name:"暗黑模式",render:()=>e.jsxs(n,{style:{height:"400px"},children:[e.jsx(n.Header,{children:"Header"}),e.jsxs(n,{children:[e.jsx(n.Sider,{children:"Sider"}),e.jsx(n.Content,{children:"Content"})]}),e.jsx(n.Footer,{children:"Footer"})]}),parameters:{backgrounds:{default:"dark",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#191919"}]}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <Layout style={{
    height: '400px'
  }}>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
}`,...l.parameters?.docs?.source},description:{story:"基础用法 - 最简单的上中下布局",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '顶部-侧边栏-内容',
  render: () => <Layout style={{
    height: '400px'
  }}>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
}`,...c.parameters?.docs?.source},description:{story:"顶部-侧边栏-内容 - 典型的后台管理布局",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '可折叠侧边栏',
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <Layout style={{
      height: '400px'
    }}>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={200} collapsedWidth={64}>
            {collapsed ? '折叠' : '侧边栏内容'}
          </Layout.Sider>
          <Layout.Content>Content</Layout.Content>
        </Layout>
      </Layout>;
  }
}`,...p.parameters?.docs?.source},description:{story:"可折叠侧边栏 - 点击底部箭头折叠/展开",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '自定义宽度',
  render: () => <Layout style={{
    height: '400px'
  }}>
      <Layout>
        <Layout.Sider width={300}>300px 宽度的侧边栏</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>
    </Layout>
}`,...u.parameters?.docs?.source},description:{story:"自定义宽度 - 自定义 Sider 宽度",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '固定侧边栏',
  render: () => <Layout style={{
    height: '400px'
  }}>
      <Layout>
        <Layout.Sider>
          <div style={{
          height: '200px',
          background: 'rgba(0,0,0,0.05)',
          margin: '8px'
        }}>
            固定区域
          </div>
        </Layout.Sider>
        <Layout.Content>
          <div style={{
          height: '800px'
        }}>
            {Array.from({
            length: 50
          }).map((_, i) => <p key={i}>内容行 {i + 1}</p>)}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
}`,...y.parameters?.docs?.source},description:{story:"固定侧边栏 - 侧边栏内容固定不滚动",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '完整后台管理布局',
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <Layout style={{
      height: '600px'
    }}>
        <Layout.Header style={{
        background: 'var(--primary-color)',
        color: 'var(--primary-text-color)'
      }}>
          <div style={{
          fontSize: '20px',
          fontWeight: 'bold'
        }}>My UI Lib</div>
        </Layout.Header>
        <Layout>
          <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={200} collapsedWidth={64}>
            <div>
              <div style={{
              padding: '16px',
              fontWeight: 'bold',
              borderBottom: '1px solid var(--border-color)'
            }}>
                {collapsed ? '菜单' : '导航菜单'}
              </div>
              <div style={{
              padding: '16px'
            }}>
                <div style={{
                marginBottom: '8px',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                  仪表盘
                </div>
                <div style={{
                marginBottom: '8px',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                  用户管理
                </div>
                <div style={{
                marginBottom: '8px',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                  系统设置
                </div>
              </div>
            </div>
          </Layout.Sider>
          <Layout>
            <Layout.Content>
              <div style={{
              padding: '24px',
              background: 'var(--component-bg)',
              borderRadius: '8px',
              minHeight: '380px'
            }}>
                <h2>页面标题</h2>
                <p>这是主要内容区域，可以根据需要放置任何内容。</p>
                <p>Layout 组件采用 Flexbox 布局，自动适应父容器高度。</p>
              </div>
            </Layout.Content>
            <Layout.Footer>
              My UI Lib ©{new Date().getFullYear()} Created by Me
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>;
  }
}`,...h.parameters?.docs?.source},description:{story:"完整后台管理布局 - 实际项目中的典型布局",...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '响应式布局',
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <Layout style={{
      height: '400px'
    }}>
        <Layout.Header>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
            <span>响应式布局-</span>
            <span>调整窗口大小查看效果</span>
          </div>
        </Layout.Header>
        <Layout>
          <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} breakpoint="lg" width={200}>
            侧边栏
          </Layout.Sider>
          <Layout.Content>
            <p>在小屏幕上，侧边栏会自动折叠。</p>
          </Layout.Content>
        </Layout>
      </Layout>;
  }
}`,...m.parameters?.docs?.source},description:{story:"响应式布局 - 在不同屏幕尺寸下自动调整",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '暗黑模式',
  render: () => <Layout style={{
    height: '400px'
  }}>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>,
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
}`,...x.parameters?.docs?.source},description:{story:"暗黑模式 - 在暗黑主题下的效果",...x.parameters?.docs?.description}}};const E=["Basic","TopSidebar","CollapsibleSider","CustomWidth","FixedSider","AdminLayout","Responsive","DarkMode"];export{h as AdminLayout,l as Basic,p as CollapsibleSider,u as CustomWidth,x as DarkMode,y as FixedSider,m as Responsive,c as TopSidebar,E as __namedExportsOrder,D as default};
