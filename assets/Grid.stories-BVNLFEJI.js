import{r as M,j as e}from"./iframe-FRnsl5h-.js";import"./preload-helper-PPVm8Dsz.js";const _=M.createContext(0),r=$=>{const{gutter:i=0,align:c="top",justify:m="start",style:H,className:h,children:A}=$,d=Array.isArray(i)?i[0]:i,u=Array.isArray(i)?i[1]:0,P={top:"flex-start",middle:"center",bottom:"flex-end",stretch:"stretch"}[c],L={start:"flex-start",end:"flex-end",center:"center","space-between":"space-between","space-around":"space-around"}[m],t=["my-row"];c!=="top"&&t.push(`my-row-align-${c}`),m!=="start"&&t.push(`my-row-justify-${m}`),h&&t.push(h);const x=t.join(" "),p={marginLeft:d?-d/2:0,marginRight:d?-d/2:0,rowGap:u||void 0,display:"flex",flexWrap:"wrap",alignItems:P,justifyContent:L,...H};return e.jsx(_.Provider,{value:d,children:e.jsx("div",{className:x,style:p,children:A})})};r.__docgenInfo={description:"",methods:[],displayName:"Row",props:{gutter:{required:!1,tsType:{name:"union",raw:"number | number[] | [number, number]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom' | 'stretch'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'stretch'"}]},description:""},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const n=$=>{const{span:i,offset:c,push:m,pull:H,xs:h,sm:A,md:d,lg:u,xl:N,style:P,className:W,children:L}=$,t=M.useContext(_),x=o=>typeof o=="number"?{span:o}:o||{},p=x(h),G=x(A),O=x(d),I=x(u),E=x(N),l=["my-col"],g=(o,a)=>{a.span!==void 0&&l.push(`my-col-${o}-span-${a.span}`),a.offset!==void 0&&l.push(`my-col-${o}-offset-${a.offset}`),a.push!==void 0&&l.push(`my-col-${o}-push-${a.push}`),a.pull!==void 0&&l.push(`my-col-${o}-pull-${a.pull}`)};g("xs",p),g("sm",G),g("md",O),g("lg",I),g("xl",E),i!==void 0?p.span===void 0&&l.push(`my-col-xs-span-${i}`):h!==void 0||A!==void 0||d!==void 0||u!==void 0||N!==void 0||l.push("my-col-xs-span-24"),c!==void 0&&p.offset===void 0&&l.push(`my-col-xs-offset-${c}`),m!==void 0&&p.push===void 0&&l.push(`my-col-xs-push-${m}`),H!==void 0&&p.pull===void 0&&l.push(`my-col-xs-pull-${H}`),W&&l.push(W);const F=l.join(" "),J={boxSizing:"border-box",...t?{paddingLeft:`${t/2}px`,paddingRight:`${t/2}px`}:{},...P};return e.jsx("div",{className:F,style:J,children:L})};n.__docgenInfo={description:"",methods:[],displayName:"Col",props:{span:{required:!1,tsType:{name:"number"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},push:{required:!1,tsType:{name:"number"},description:""},pull:{required:!1,tsType:{name:"number"},description:""},xs:{required:!1,tsType:{name:"union",raw:"number | ResponsiveConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number
  offset?: number
  push?: number
  pull?: number
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}}]}}]},description:""},sm:{required:!1,tsType:{name:"union",raw:"number | ResponsiveConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number
  offset?: number
  push?: number
  pull?: number
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}}]}}]},description:""},md:{required:!1,tsType:{name:"union",raw:"number | ResponsiveConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number
  offset?: number
  push?: number
  pull?: number
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}}]}}]},description:""},lg:{required:!1,tsType:{name:"union",raw:"number | ResponsiveConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number
  offset?: number
  push?: number
  pull?: number
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}}]}}]},description:""},xl:{required:!1,tsType:{name:"union",raw:"number | ResponsiveConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number
  offset?: number
  push?: number
  pull?: number
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}}]}}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const D={title:"布局/Grid",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{gutter:{control:"number",description:"列间距（像素）"},align:{control:"select",options:["top","middle","bottom","stretch"],description:"垂直对齐方式"},justify:{control:"select",options:["start","end","center","space-between","space-around"],description:"水平对齐方式"}}},s={background:"#165dff",color:"white",padding:"20px",textAlign:"center",borderRadius:"4px",minHeight:"50px",display:"flex",alignItems:"center",justifyContent:"center"},y={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"24 栅格系统（1-24 列）"}),e.jsx(r,{style:{marginBottom:"16px"},children:e.jsx(n,{xs:24,children:e.jsx("div",{style:s,children:"span-24 (100%)"})})}),e.jsxs(r,{style:{marginBottom:"16px"},children:[e.jsx(n,{xs:12,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"span-12 (50%)"})}),e.jsx(n,{xs:12,children:e.jsx("div",{style:s,children:"span-12 (50%)"})})]}),e.jsxs(r,{style:{marginBottom:"16px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,background:"#69c0ff"},children:"span-8 (33%)"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"span-8 (33%)"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"span-8 (33%)"})})]}),e.jsxs(r,{children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:{...s,background:"#85a5ff"},children:"span-6 (25%)"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:{...s,background:"#69c0ff"},children:"span-6 (25%)"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"span-6 (25%)"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"span-6 (25%)"})})]})]})},v={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"列间距（gutter）"}),e.jsxs("h4",{children:["gutter=",0,"（默认）"]}),e.jsxs(r,{gutter:0,style:{marginBottom:"16px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 3"})})]}),e.jsxs("h4",{children:["gutter=",16]}),e.jsxs(r,{gutter:16,style:{marginBottom:"16px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 3"})})]}),e.jsxs("h4",{children:["gutter=",24]}),e.jsxs(r,{gutter:24,children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 3"})})]})]})},j={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"垂直对齐（align）"}),e.jsx("h4",{children:'align="top"（默认）'}),e.jsxs(r,{align:"top",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,minHeight:"60px"},children:"顶部对齐"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,background:"#4080ff",minHeight:"100px"},children:"较高内容"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,minHeight:"80px"},children:"中间内容"})})]}),e.jsx("h4",{children:'align="middle"'}),e.jsxs(r,{align:"middle",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,minHeight:"60px"},children:"居中对齐"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,background:"#4080ff",minHeight:"100px"},children:"较高内容"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,minHeight:"80px"},children:"中间内容"})})]}),e.jsx("h4",{children:'align="bottom"'}),e.jsxs(r,{align:"bottom",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,minHeight:"60px"},children:"底部对齐"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,background:"#4080ff",minHeight:"100px"},children:"较高内容"})}),e.jsx(n,{xs:8,children:e.jsx("div",{style:{...s,minHeight:"80px"},children:"中间内容"})})]})]})},b={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"水平对齐（justify）"}),e.jsx("h4",{children:'justify="start"（默认）'}),e.jsxs(r,{justify:"start",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 3"})})]}),e.jsx("h4",{children:'justify="center"'}),e.jsxs(r,{justify:"center",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 3"})})]}),e.jsx("h4",{children:'justify="end"'}),e.jsxs(r,{justify:"end",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 3"})})]}),e.jsx("h4",{children:'justify="space-between"'}),e.jsxs(r,{justify:"space-between",style:{marginBottom:"16px",border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 3"})})]}),e.jsx("h4",{children:'justify="space-around"'}),e.jsxs(r,{justify:"space-around",style:{border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 2"})}),e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 3"})})]})]})},f={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"列偏移（offset）"}),e.jsxs(r,{style:{marginBottom:"16px"},children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 1 (span=8)"})}),e.jsx(n,{xs:8,offset:8,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"列 2 (span=8, offset=8)"})})]}),e.jsx(r,{style:{marginBottom:"16px"},children:e.jsx(n,{xs:6,offset:6,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"偏移 6 列"})})}),e.jsxs(r,{children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:6,offset:6,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"列 2 (offset=6)"})})]})]})},C={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"列排序（push/pull）"}),e.jsxs(r,{style:{marginBottom:"16px"},children:[e.jsx(n,{xs:12,push:12,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"列 1 (span=12, push=12) - 被推到右边"})}),e.jsx(n,{xs:12,pull:12,children:e.jsx("div",{style:s,children:"列 2 (span=12, pull=12) - 被拉到左边"})})]}),e.jsxs(r,{children:[e.jsx(n,{xs:8,children:e.jsx("div",{style:s,children:"列 1"})}),e.jsx(n,{xs:8,push:8,children:e.jsx("div",{style:{...s,background:"#4080ff"},children:"列 2 (push=8)"})}),e.jsx(n,{xs:8,pull:8,children:e.jsx("div",{style:s,children:"列 3 (pull=8)"})})]})]})},w={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"响应式布局 - 简单形式"}),e.jsx("p",{style:{color:"#666",marginBottom:"16px"},children:"调整浏览器宽度测试：xs 默认全宽，md 半宽"}),e.jsxs(r,{gutter:16,style:{border:"2px solid #e5e6eb",padding:"10px"},children:[e.jsx(n,{xs:24,md:12,children:e.jsxs("div",{style:{...s,background:"#91d5ff",marginBottom:"10px"},children:[e.jsx("strong",{children:"xs=24 md=12"}),e.jsx("br",{}),"手机全宽，电脑半宽"]})}),e.jsx(n,{xs:24,md:12,children:e.jsxs("div",{style:{...s,background:"#69c0ff",marginBottom:"10px"},children:[e.jsx("strong",{children:"xs=24 md=12"}),e.jsx("br",{}),"手机全宽，电脑半宽"]})})]})]})},R={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"响应式布局 - 多断点"}),e.jsx("p",{style:{color:"#666",marginBottom:"16px"},children:"测试不同屏幕宽度下的布局变化"}),e.jsxs(r,{gutter:16,style:{border:"2px solid #52c41a",padding:"10px"},children:[e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsxs("div",{style:{...s,background:"#95de64",marginBottom:"10px"},children:[e.jsx("strong",{children:"列 1"}),e.jsx("br",{}),"xs=24 sm=12 md=8 lg=6 xl=4"]})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsxs("div",{style:{...s,background:"#b7eb8f",marginBottom:"10px"},children:[e.jsx("strong",{children:"列 2"}),e.jsx("br",{}),"xs=24 sm=12 md=8 lg=6 xl=4"]})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsxs("div",{style:{...s,background:"#95de64",marginBottom:"10px"},children:[e.jsx("strong",{children:"列 3"}),e.jsx("br",{}),"xs=24 sm=12 md=8 lg=6 xl=4"]})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsxs("div",{style:{...s,background:"#b7eb8f",marginBottom:"10px"},children:[e.jsx("strong",{children:"列 4"}),e.jsx("br",{}),"xs=24 sm=12 md=8 lg=6 xl=4"]})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsxs("div",{style:{...s,background:"#95de64",marginBottom:"10px"},children:[e.jsx("strong",{children:"列 5"}),e.jsx("br",{}),"xs=24 sm=12 md=8 lg=6 xl=4"]})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsxs("div",{style:{...s,background:"#b7eb8f",marginBottom:"10px"},children:[e.jsx("strong",{children:"列 6"}),e.jsx("br",{}),"xs=24 sm=12 md=8 lg=6 xl=4"]})})]})]})},S={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"响应式布局 - 对象形式"}),e.jsx("p",{style:{color:"#666",marginBottom:"16px"},children:"手机不偏移，电脑偏移"}),e.jsxs(r,{gutter:16,style:{border:"2px solid #faad14",padding:"10px"},children:[e.jsx(n,{xs:24,md:{span:8,offset:4},children:e.jsxs("div",{style:{...s,background:"#ffe58f",marginBottom:"10px"},children:[e.jsx("strong",{children:"偏移列"}),e.jsx("br",{}),"xs=",24," md=","{ span: 8, offset: 4 }"]})}),e.jsx(n,{xs:24,md:8,children:e.jsxs("div",{style:{...s,background:"#ffd666",marginBottom:"10px"},children:[e.jsx("strong",{children:"普通列"}),e.jsx("br",{}),"xs=",24," md=",8]})})]})]})},k={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"卡片布局（12 列）"}),e.jsxs(r,{gutter:[16,16],children:[e.jsx(n,{xs:24,sm:12,lg:8,children:e.jsxs("div",{style:{border:"1px solid #e5e6eb",borderRadius:"8px",padding:"20px",background:"white"},children:[e.jsx("h4",{style:{marginTop:0},children:"卡片 1"}),e.jsx("p",{children:"这是第一张卡片的内容"})]})}),e.jsx(n,{xs:24,sm:12,lg:8,children:e.jsxs("div",{style:{border:"1px solid #e5e6eb",borderRadius:"8px",padding:"20px",background:"white"},children:[e.jsx("h4",{style:{marginTop:0},children:"卡片 2"}),e.jsx("p",{children:"这是第二张卡片的内容"})]})}),e.jsx(n,{xs:24,sm:12,lg:8,children:e.jsxs("div",{style:{border:"1px solid #e5e6eb",borderRadius:"8px",padding:"20px",background:"white"},children:[e.jsx("h4",{style:{marginTop:0},children:"卡片 3"}),e.jsx("p",{children:"这是第三张卡片的内容"})]})}),e.jsx(n,{xs:24,sm:12,lg:8,children:e.jsxs("div",{style:{border:"1px solid #e5e6eb",borderRadius:"8px",padding:"20px",background:"white"},children:[e.jsx("h4",{style:{marginTop:0},children:"卡片 4"}),e.jsx("p",{children:"这是第四张卡片的内容"})]})}),e.jsx(n,{xs:24,sm:12,lg:8,children:e.jsxs("div",{style:{border:"1px solid #e5e6eb",borderRadius:"8px",padding:"20px",background:"white"},children:[e.jsx("h4",{style:{marginTop:0},children:"卡片 5"}),e.jsx("p",{children:"这是第五张卡片的内容"})]})}),e.jsx(n,{xs:24,sm:12,lg:8,children:e.jsxs("div",{style:{border:"1px solid #e5e6eb",borderRadius:"8px",padding:"20px",background:"white"},children:[e.jsx("h4",{style:{marginTop:0},children:"卡片 6"}),e.jsx("p",{children:"这是第六张卡片的内容"})]})})]})]})},B={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"表单布局"}),e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsxs(r,{gutter:16,style:{marginBottom:"16px"},align:"middle",children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:{textAlign:"right",fontWeight:"bold"},children:"用户名："})}),e.jsx(n,{xs:18,children:e.jsx("input",{type:"text",placeholder:"请输入用户名",style:{width:"100%",padding:"8px",border:"1px solid #d9d9d9",borderRadius:"4px"}})})]}),e.jsxs(r,{gutter:16,style:{marginBottom:"16px"},align:"middle",children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:{textAlign:"right",fontWeight:"bold"},children:"邮箱："})}),e.jsx(n,{xs:18,children:e.jsx("input",{type:"email",placeholder:"请输入邮箱",style:{width:"100%",padding:"8px",border:"1px solid #d9d9d9",borderRadius:"4px"}})})]}),e.jsxs(r,{gutter:16,align:"middle",children:[e.jsx(n,{xs:6,children:e.jsx("div",{style:{textAlign:"right",fontWeight:"bold"},children:"备注："})}),e.jsx(n,{xs:18,children:e.jsx("textarea",{placeholder:"请输入备注",rows:3,style:{width:"100%",padding:"8px",border:"1px solid #d9d9d9",borderRadius:"4px"}})})]})]})]})},q={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"页面头部布局"}),e.jsxs(r,{gutter:16,style:{marginBottom:"16px"},align:"middle",children:[e.jsx(n,{xs:12,children:e.jsx("h2",{style:{margin:0},children:"用户管理"})}),e.jsx(n,{xs:12,children:e.jsx("div",{style:{textAlign:"right"},children:e.jsx("button",{style:{padding:"8px 16px",background:"#165dff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"新增用户"})})})]}),e.jsx(r,{gutter:16,children:e.jsx(n,{xs:24,children:e.jsx("div",{style:{padding:"20px",background:"#f5f5f5",borderRadius:"4px"},children:"这里是页面内容区域"})})})]})},T={render:()=>e.jsxs("div",{children:[e.jsx("h3",{children:"侧边栏布局"}),e.jsx("p",{style:{color:"#666",marginBottom:"16px"},children:"sm 断点（576px）以上显示左右布局，以下显示上下布局"}),e.jsxs(r,{gutter:16,children:[e.jsx(n,{xs:24,sm:6,children:e.jsxs("div",{style:{background:"#001529",color:"white",padding:"20px",minHeight:"300px",borderRadius:"4px"},children:[e.jsx("h4",{style:{color:"white",marginTop:0},children:"侧边栏"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{style:{padding:"8px 0"},children:"菜单 1"}),e.jsx("li",{style:{padding:"8px 0"},children:"菜单 2"}),e.jsx("li",{style:{padding:"8px 0"},children:"菜单 3"})]})]})}),e.jsx(n,{xs:24,sm:18,children:e.jsxs("div",{style:{background:"white",padding:"20px",minHeight:"300px",border:"1px solid #e5e6eb",borderRadius:"4px"},children:[e.jsx("h4",{style:{marginTop:0},children:"主内容区"}),e.jsx("p",{children:"这里是主要内容区域"})]})})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>24 栅格系统（1-24 列）</h3>
      <Row style={{
      marginBottom: '16px'
    }}>
        <Col xs={24}>
          <div style={colStyle}>span-24 (100%)</div>
        </Col>
      </Row>

      <Row style={{
      marginBottom: '16px'
    }}>
        <Col xs={12}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>span-12 (50%)</div>
        </Col>
        <Col xs={12}>
          <div style={colStyle}>span-12 (50%)</div>
        </Col>
      </Row>

      <Row style={{
      marginBottom: '16px'
    }}>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          background: '#69c0ff'
        }}>span-8 (33%)</div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>span-8 (33%)</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>span-8 (33%)</div>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <div style={{
          ...colStyle,
          background: '#85a5ff'
        }}>span-6 (25%)</div>
        </Col>
        <Col xs={6}>
          <div style={{
          ...colStyle,
          background: '#69c0ff'
        }}>span-6 (25%)</div>
        </Col>
        <Col xs={6}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>span-6 (25%)</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>span-6 (25%)</div>
        </Col>
      </Row>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"基础栅格 - 24 栅格系统",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>列间距（gutter）</h3>

      <h4>gutter={0}（默认）</h4>
      <Row gutter={0} style={{
      marginBottom: '16px'
    }}>
        <Col xs={8}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>

      <h4>gutter={16}</h4>
      <Row gutter={16} style={{
      marginBottom: '16px'
    }}>
        <Col xs={8}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>

      <h4>gutter={24}</h4>
      <Row gutter={24}>
        <Col xs={8}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={8}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>
    </div>
}`,...v.parameters?.docs?.source},description:{story:"栅格间隔 - gutter",...v.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>垂直对齐（align）</h3>

      <h4>align="top"（默认）</h4>
      <Row align="top" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          minHeight: '60px'
        }}>顶部对齐</div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          background: '#4080ff',
          minHeight: '100px'
        }}>
            较高内容
          </div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          minHeight: '80px'
        }}>中间内容</div>
        </Col>
      </Row>

      <h4>align="middle"</h4>
      <Row align="middle" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          minHeight: '60px'
        }}>居中对齐</div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          background: '#4080ff',
          minHeight: '100px'
        }}>
            较高内容
          </div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          minHeight: '80px'
        }}>中间内容</div>
        </Col>
      </Row>

      <h4>align="bottom"</h4>
      <Row align="bottom" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          minHeight: '60px'
        }}>底部对齐</div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          background: '#4080ff',
          minHeight: '100px'
        }}>
            较高内容
          </div>
        </Col>
        <Col xs={8}>
          <div style={{
          ...colStyle,
          minHeight: '80px'
        }}>中间内容</div>
        </Col>
      </Row>
    </div>
}`,...j.parameters?.docs?.source},description:{story:"垂直对齐 - align",...j.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>水平对齐（justify）</h3>

      <h4>justify="start"（默认）</h4>
      <Row justify="start" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={6}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>

      <h4>justify="center"</h4>
      <Row justify="center" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={6}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>

      <h4>justify="end"</h4>
      <Row justify="end" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={6}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>

      <h4>justify="space-between"</h4>
      <Row justify="space-between" style={{
      marginBottom: '16px',
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={6}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>

      <h4>justify="space-around"</h4>
      <Row justify="space-around" style={{
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={6}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 2</div>
        </Col>
        <Col xs={6}>
          <div style={colStyle}>列 3</div>
        </Col>
      </Row>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"水平对齐 - justify",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>列偏移（offset）</h3>

      <Row style={{
      marginBottom: '16px'
    }}>
        <Col xs={8}>
          <div style={colStyle}>列 1 (span=8)</div>
        </Col>
        <Col xs={8} offset={8}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>列 2 (span=8, offset=8)</div>
        </Col>
      </Row>

      <Row style={{
      marginBottom: '16px'
    }}>
        <Col xs={6} offset={6}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>偏移 6 列</div>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={6} offset={6}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>列 2 (offset=6)</div>
        </Col>
      </Row>
    </div>
}`,...f.parameters?.docs?.source},description:{story:"列偏移 - offset",...f.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>列排序（push/pull）</h3>

      <Row style={{
      marginBottom: '16px'
    }}>
        <Col xs={12} push={12}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>
            列 1 (span=12, push=12) - 被推到右边
          </div>
        </Col>
        <Col xs={12} pull={12}>
          <div style={colStyle}>列 2 (span=12, pull=12) - 被拉到左边</div>
        </Col>
      </Row>

      <Row>
        <Col xs={8}>
          <div style={colStyle}>列 1</div>
        </Col>
        <Col xs={8} push={8}>
          <div style={{
          ...colStyle,
          background: '#4080ff'
        }}>列 2 (push=8)</div>
        </Col>
        <Col xs={8} pull={8}>
          <div style={colStyle}>列 3 (pull=8)</div>
        </Col>
      </Row>
    </div>
}`,...C.parameters?.docs?.source},description:{story:"列排序 - push / pull",...C.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>响应式布局 - 简单形式</h3>
      <p style={{
      color: '#666',
      marginBottom: '16px'
    }}>
        调整浏览器宽度测试：xs 默认全宽，md 半宽
      </p>

      <Row gutter={16} style={{
      border: '2px solid #e5e6eb',
      padding: '10px'
    }}>
        <Col xs={24} md={12}>
          <div style={{
          ...colStyle,
          background: '#91d5ff',
          marginBottom: '10px'
        }}>
            <strong>xs=24 md=12</strong>
            <br />
            手机全宽，电脑半宽
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={{
          ...colStyle,
          background: '#69c0ff',
          marginBottom: '10px'
        }}>
            <strong>xs=24 md=12</strong>
            <br />
            手机全宽，电脑半宽
          </div>
        </Col>
      </Row>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"响应式 - 简单形式",...w.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>响应式布局 - 多断点</h3>
      <p style={{
      color: '#666',
      marginBottom: '16px'
    }}>
        测试不同屏幕宽度下的布局变化
      </p>

      <Row gutter={16} style={{
      border: '2px solid #52c41a',
      padding: '10px'
    }}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{
          ...colStyle,
          background: '#95de64',
          marginBottom: '10px'
        }}>
            <strong>列 1</strong>
            <br />
            xs=24 sm=12 md=8 lg=6 xl=4
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{
          ...colStyle,
          background: '#b7eb8f',
          marginBottom: '10px'
        }}>
            <strong>列 2</strong>
            <br />
            xs=24 sm=12 md=8 lg=6 xl=4
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{
          ...colStyle,
          background: '#95de64',
          marginBottom: '10px'
        }}>
            <strong>列 3</strong>
            <br />
            xs=24 sm=12 md=8 lg=6 xl=4
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{
          ...colStyle,
          background: '#b7eb8f',
          marginBottom: '10px'
        }}>
            <strong>列 4</strong>
            <br />
            xs=24 sm=12 md=8 lg=6 xl=4
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{
          ...colStyle,
          background: '#95de64',
          marginBottom: '10px'
        }}>
            <strong>列 5</strong>
            <br />
            xs=24 sm=12 md=8 lg=6 xl=4
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{
          ...colStyle,
          background: '#b7eb8f',
          marginBottom: '10px'
        }}>
            <strong>列 6</strong>
            <br />
            xs=24 sm=12 md=8 lg=6 xl=4
          </div>
        </Col>
      </Row>
    </div>
}`,...R.parameters?.docs?.source},description:{story:"响应式 - 多断点",...R.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>响应式布局 - 对象形式</h3>
      <p style={{
      color: '#666',
      marginBottom: '16px'
    }}>
        手机不偏移，电脑偏移
      </p>

      <Row gutter={16} style={{
      border: '2px solid #faad14',
      padding: '10px'
    }}>
        <Col xs={24} md={{
        span: 8,
        offset: 4
      }}>
          <div style={{
          ...colStyle,
          background: '#ffe58f',
          marginBottom: '10px'
        }}>
            <strong>偏移列</strong>
            <br />
            xs={24} md={'{ span: 8, offset: 4 }'}
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div style={{
          ...colStyle,
          background: '#ffd666',
          marginBottom: '10px'
        }}>
            <strong>普通列</strong>
            <br />
            xs={24} md={8}
          </div>
        </Col>
      </Row>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"响应式 - 对象形式（offset + push/pull）",...S.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>卡片布局（12 列）</h3>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <div style={{
          border: '1px solid #e5e6eb',
          borderRadius: '8px',
          padding: '20px',
          background: 'white'
        }}>
            <h4 style={{
            marginTop: 0
          }}>卡片 1</h4>
            <p>这是第一张卡片的内容</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <div style={{
          border: '1px solid #e5e6eb',
          borderRadius: '8px',
          padding: '20px',
          background: 'white'
        }}>
            <h4 style={{
            marginTop: 0
          }}>卡片 2</h4>
            <p>这是第二张卡片的内容</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <div style={{
          border: '1px solid #e5e6eb',
          borderRadius: '8px',
          padding: '20px',
          background: 'white'
        }}>
            <h4 style={{
            marginTop: 0
          }}>卡片 3</h4>
            <p>这是第三张卡片的内容</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <div style={{
          border: '1px solid #e5e6eb',
          borderRadius: '8px',
          padding: '20px',
          background: 'white'
        }}>
            <h4 style={{
            marginTop: 0
          }}>卡片 4</h4>
            <p>这是第四张卡片的内容</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <div style={{
          border: '1px solid #e5e6eb',
          borderRadius: '8px',
          padding: '20px',
          background: 'white'
        }}>
            <h4 style={{
            marginTop: 0
          }}>卡片 5</h4>
            <p>这是第五张卡片的内容</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <div style={{
          border: '1px solid #e5e6eb',
          borderRadius: '8px',
          padding: '20px',
          background: 'white'
        }}>
            <h4 style={{
            marginTop: 0
          }}>卡片 6</h4>
            <p>这是第六张卡片的内容</p>
          </div>
        </Col>
      </Row>
    </div>
}`,...k.parameters?.docs?.source},description:{story:"卡片布局 - 经典的 12 列布局",...k.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>表单布局</h3>

      <div style={{
      maxWidth: '600px'
    }}>
        <Row gutter={16} style={{
        marginBottom: '16px'
      }} align="middle">
          <Col xs={6}>
            <div style={{
            textAlign: 'right',
            fontWeight: 'bold'
          }}>用户名：</div>
          </Col>
          <Col xs={18}>
            <input type="text" placeholder="请输入用户名" style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }} />
          </Col>
        </Row>

        <Row gutter={16} style={{
        marginBottom: '16px'
      }} align="middle">
          <Col xs={6}>
            <div style={{
            textAlign: 'right',
            fontWeight: 'bold'
          }}>邮箱：</div>
          </Col>
          <Col xs={18}>
            <input type="email" placeholder="请输入邮箱" style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }} />
          </Col>
        </Row>

        <Row gutter={16} align="middle">
          <Col xs={6}>
            <div style={{
            textAlign: 'right',
            fontWeight: 'bold'
          }}>备注：</div>
          </Col>
          <Col xs={18}>
            <textarea placeholder="请输入备注" rows={3} style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }} />
          </Col>
        </Row>
      </div>
    </div>
}`,...B.parameters?.docs?.source},description:{story:"表单布局 - 左侧标签，右侧输入框",...B.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>页面头部布局</h3>

      <Row gutter={16} style={{
      marginBottom: '16px'
    }} align="middle">
        <Col xs={12}>
          <h2 style={{
          margin: 0
        }}>用户管理</h2>
        </Col>
        <Col xs={12}>
          <div style={{
          textAlign: 'right'
        }}>
            <button style={{
            padding: '8px 16px',
            background: '#165dff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
              新增用户
            </button>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24}>
          <div style={{
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '4px'
        }}>
            这里是页面内容区域
          </div>
        </Col>
      </Row>
    </div>
}`,...q.parameters?.docs?.source},description:{story:"页面头部 - 左侧标题，右侧操作",...q.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3>侧边栏布局</h3>
      <p style={{
      color: '#666',
      marginBottom: '16px'
    }}>
        sm 断点（576px）以上显示左右布局，以下显示上下布局
      </p>

      <Row gutter={16}>
        <Col xs={24} sm={6}>
          <div style={{
          background: '#001529',
          color: 'white',
          padding: '20px',
          minHeight: '300px',
          borderRadius: '4px'
        }}>
            <h4 style={{
            color: 'white',
            marginTop: 0
          }}>侧边栏</h4>
            <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
              <li style={{
              padding: '8px 0'
            }}>菜单 1</li>
              <li style={{
              padding: '8px 0'
            }}>菜单 2</li>
              <li style={{
              padding: '8px 0'
            }}>菜单 3</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={18}>
          <div style={{
          background: 'white',
          padding: '20px',
          minHeight: '300px',
          border: '1px solid #e5e6eb',
          borderRadius: '4px'
        }}>
            <h4 style={{
            marginTop: 0
          }}>主内容区</h4>
            <p>这里是主要内容区域</p>
          </div>
        </Col>
      </Row>
    </div>
}`,...T.parameters?.docs?.source},description:{story:"不等分布局 - 常见的侧边栏 + 主内容",...T.parameters?.docs?.description}}};const K=["Basic","Gutter","Align","Justify","Offset","PushPull","ResponsiveSimple","ResponsiveMultiBreakpoints","ResponsiveObject","CardLayout","FormLayout","PageHeader","SidebarLayout"];export{j as Align,y as Basic,k as CardLayout,B as FormLayout,v as Gutter,b as Justify,f as Offset,q as PageHeader,C as PushPull,R as ResponsiveMultiBreakpoints,S as ResponsiveObject,w as ResponsiveSimple,T as SidebarLayout,K as __namedExportsOrder,D as default};
