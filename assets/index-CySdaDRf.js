import{r,j as n}from"./iframe-BrsRkbZt.js";const S=({children:l,src:o,icon:m,shape:h="circle",size:a="default",alt:x,onError:u,className:p,style:d})=>{const[E,f]=r.useState(!1),i=r.useRef(null),[q,T]=r.useState(1),j=()=>{if(!i.current)return;const e=i.current,c=e.parentElement;if(!c)return;const v=e.scrollWidth,y=c.offsetWidth;if(v&&y){const g=(y-4)/v;T(g<1?g:1)}};r.useEffect(()=>{const e=setTimeout(()=>{j()},0);return()=>clearTimeout(e)},[l]);const N=e=>{u?u(e)!==!1&&f(!0):f(!0)},t=["my-avatar"];h==="square"?t.push("my-avatar-square"):t.push("my-avatar-circle"),typeof a=="string"&&t.push(`my-avatar-${a}`),p&&t.push(p);const s=r.useMemo(()=>{const e={...d};return typeof a=="number"&&(e.width=`${a}px`,e.height=`${a}px`,e.lineHeight=`${a}px`,e.fontSize=`${a/2}px`),e},[a,d]);return o&&!E?n.jsx("span",{className:t.join(" "),style:s,children:n.jsx("img",{src:o,alt:x,onError:N,className:"my-avatar-image"})}):m?n.jsx("span",{className:t.join(" "),style:s,children:m}):l?n.jsx("span",{className:t.join(" "),style:s,children:n.jsx("span",{ref:i,className:"my-avatar-string",style:{transform:`scale(${q})`,transformOrigin:"center center"},children:l})}):n.jsx("span",{className:t.join(" "),style:s})};S.__docgenInfo={description:`Avatar 头像组件

用于展示用户头像、图标或文字。支持图片加载失败回退、自适应文字缩放。

@example
\`\`\`tsx
// 图片头像
<Avatar src="https://example.com/avatar.png" />

// 文字头像（自动缩放）
<Avatar>张三</Avatar>

// 图标头像
<Avatar icon={<UserIcon />} />

// 形状和尺寸
<Avatar shape="square" size="large" />

// 加载失败回退
<Avatar src="invalid.png" alt="默认头像">备</Avatar>
\`\`\``,methods:[],displayName:"Avatar",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"文字内容"},src:{required:!1,tsType:{name:"string"},description:"图片地址"},icon:{required:!1,tsType:{name:"ReactNode"},description:"图标元素"},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:`形状
@default 'circle'`,defaultValue:{value:"'circle'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"},{name:"number"}]},description:`尺寸
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"图片 alt 属性"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean | void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement, Event>",elements:[{name:"HTMLImageElement"},{name:"Event"}]},name:"event"}],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:`图片加载失败时的回调
@return 返回 false 会阻止默认的 fallback 行为`},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"}}};export{S as A};
