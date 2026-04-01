import{j as e,R as m}from"./iframe-BanNrfm3.js";import"./preload-helper-PPVm8Dsz.js";function u(r){const{columns:n,dataSource:a,rowKey:s="key",bordered:c=!1,size:H="default",style:Z,className:J,sortBy:G,sortOrder:ee,filterBy:Q,filterValue:I,pagination:L}=r;let f=[...a];G&&f.sort((t,l)=>{const d=t[G],K=l[G];return ee==="asc"?d<K?-1:d>K?1:0:d>K?-1:d<K?1:0}),Q&&I!==void 0&&(f=f.filter(t=>{const l=t[Q];return typeof I=="function"?I(l):l===I}));const p=L?.current??1,y=L?.pageSize??10,U=f.length,S=L?.onChange,X=(p-1)*y,re=X+y,Y=f.slice(X,re),M=Math.ceil(U/y),k=["my-table"];return c&&k.push("my-table-bordered"),H!=="default"&&k.push(`my-table-${H}`),J&&k.push(J),Y.length===0?e.jsx("div",{className:"my-table-wrapper",style:Z,children:e.jsx("table",{className:k.join(" "),children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:n.length,children:e.jsx("div",{className:"my-table-empty",children:"暂无数据"})})})})})}):e.jsxs("div",{className:"my-table-wrapper",children:[e.jsxs("table",{className:k.join(" "),children:[e.jsx("thead",{children:e.jsx("tr",{children:n.map(t=>e.jsx("th",{children:t.title},t.key))})}),e.jsx("tbody",{children:Y.map((t,l)=>e.jsx("tr",{children:n.map(d=>e.jsx("td",{children:d.render?d.render(t[d.key],t,l):t[d.key]},d.key))},t[s]||l))})]}),L&&e.jsxs("div",{className:"my-table-pagination",children:[e.jsx("button",{className:"my-table-pagination-prev",disabled:p===1,onClick:()=>{S&&S(p-1,y)},children:"< "}),e.jsx("div",{className:"my-table-pagination-pages",children:Array.from({length:M},(t,l)=>l+1).map(t=>e.jsx("button",{className:`my-table-pagination-page${t===p?"my-table-pagination-page-active":""}`,onClick:()=>{t!==p&&S&&S(t,y)},children:t},t))}),e.jsx("button",{className:"my-table-pagination-prev",disabled:p===M,onClick:()=>{S&&S(p+1,y)},children:">"}),e.jsxs("span",{className:"my-table-pagination-info",children:["第 ",p," / ",M," 页，共 ",U," 条"]})]})]})}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column"}],raw:"Column[]"},description:""},dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"string"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},sortBy:{required:!1,tsType:{name:"string"},description:""},sortOrder:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},description:""},filterBy:{required:!1,tsType:{name:"string"},description:""},filterValue:{required:!1,tsType:{name:"any"},description:""},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  //用对象包裹分页配置
  current?: number //当前页码 从1开始
  pageSize?: number //每页显示多少数据
  onChange?: (page: number, pageSize: number) => void //没有返回值
}`,signature:{properties:[{key:"current",value:{name:"number",required:!1}},{key:"pageSize",value:{name:"number",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(page: number, pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!1}}]}},description:""}}};const se={title:"数据展示/Table",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{bordered:{control:"boolean",description:"是否显示边框"},size:{control:"select",options:["small","default","large"],description:"表格尺寸"},rowKey:{control:"text",description:"行的唯一标识字段"},sortBy:{control:"text",description:"排序字段"},sortOrder:{control:"select",options:["asc","desc"],description:"排序方式"},filterBy:{control:"text",description:"筛选字段"}}},g=[{key:"1",name:"张三",age:25,city:"北京"},{key:"2",name:"李四",age:30,city:"上海"},{key:"3",name:"王五",age:28,city:"广州"},{key:"4",name:"赵六",age:22,city:"深圳"},{key:"5",name:"钱七",age:35,city:"杭州"}],E=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"城市",key:"city"}],o=[{key:"1",name:"张三",age:18,score:85,grade:"A"},{key:"2",name:"李四",age:19,score:92,grade:"A"},{key:"3",name:"王五",age:20,score:78,grade:"B"},{key:"4",name:"赵六",age:18,score:65,grade:"C"},{key:"5",name:"钱七",age:21,score:88,grade:"A"},{key:"6",name:"孙八",age:19,score:72,grade:"B"},{key:"7",name:"周九",age:20,score:95,grade:"A"},{key:"8",name:"吴十",age:18,score:58,grade:"D"},{key:"9",name:"郑十一",age:22,score:81,grade:"B"},{key:"10",name:"王小二",age:19,score:76,grade:"B"},{key:"11",name:"李小三",age:20,score:89,grade:"A"},{key:"12",name:"张小四",age:21,score:67,grade:"C"}],i=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"分数",key:"score"},{title:"等级",key:"grade"}],b={args:{columns:E,dataSource:g}},x={args:{columns:E,dataSource:g,bordered:!0}},h={args:{columns:E,dataSource:g,size:"small"}},C={args:{columns:E,dataSource:g,size:"large"}},P={args:{columns:[{title:"姓名",key:"name",render:r=>e.jsx("strong",{children:r})},{title:"年龄",key:"age",render:r=>e.jsx("span",{style:{color:r>25?"red":"green"},children:r})},{title:"城市",key:"city",render:r=>e.jsxs("span",{children:["📍 ",r]})}],dataSource:g}},j={args:{columns:[{title:"学生信息",key:"name",render:(r,n)=>e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold"},children:n.name}),e.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["学号: ",n.key]})]})},{title:"年龄",key:"age"},{title:"分数",key:"score"},{title:"等级",key:"grade"}],dataSource:o.slice(0,5)}},v={args:{columns:[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"城市",key:"city"},{title:"操作",key:"action",render:(r,n)=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:()=>alert(`编辑 ${n.name}`),children:"编辑"}),e.jsx("button",{onClick:()=>alert(`删除 ${n.name}`),children:"删除"})]})}],dataSource:g}},B={args:{columns:i,dataSource:o,sortBy:"age",sortOrder:"asc"}},D={args:{columns:i,dataSource:o,sortBy:"score",sortOrder:"desc"}},z={args:{columns:i,dataSource:o,filterBy:"age",filterValue:r=>r>=20}},A={args:{columns:i,dataSource:o,filterBy:"grade",filterValue:"A"}},T={args:{columns:i,dataSource:o,filterBy:"score",filterValue:r=>r>=80&&r<=90}},R={args:{columns:i,dataSource:o,sortBy:"age",sortOrder:"asc",filterBy:"grade",filterValue:"A"}},w={args:{columns:i,dataSource:o,bordered:!0,sortBy:"score",sortOrder:"desc"}},$={render:()=>{const[r,n]=m.useState(1);return e.jsx(u,{columns:i,dataSource:o,pagination:{current:r,pageSize:5,onChange:a=>n(a)}})}},_={render:()=>{const[r,n]=m.useState(2);return e.jsx(u,{columns:i,dataSource:o,pagination:{current:r,pageSize:5,onChange:a=>n(a)}})}},O={render:()=>{const[r,n]=m.useState(1);return e.jsx(u,{columns:i,dataSource:o,pagination:{current:r,pageSize:3,onChange:a=>n(a)}})}},q={render:()=>{const[r,n]=m.useState(1);return e.jsx(u,{columns:i,dataSource:o,sortBy:"age",sortOrder:"asc",filterBy:"grade",filterValue:"A",pagination:{current:r,pageSize:3,onChange:a=>n(a)}})}},N={args:{columns:E,dataSource:[]}},F={render:()=>{const[r,n]=m.useState(1),a=Array.from({length:100},(s,c)=>({key:`${c+1}`,id:c+1,name:`用户${c+1}`,email:`user${c+1}@example.com`,status:c%3===0?"活跃":"离线"}));return e.jsx(u,{columns:[{title:"ID",key:"id"},{title:"姓名",key:"name"},{title:"邮箱",key:"email"},{title:"状态",key:"status"}],dataSource:a,pagination:{current:r,pageSize:10,onChange:s=>n(s)}})}},V={render:()=>{const[r,n]=m.useState(1),a=[{title:"学生",key:"name",render:(s,c)=>e.jsxs("div",{children:[e.jsx("strong",{children:c.name}),e.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:[c.age," 岁"]})]})},{title:"分数",key:"score",render:s=>e.jsx("span",{style:{color:s>=90?"green":s>=60?"orange":"red",fontWeight:"bold"},children:s})},{title:"等级",key:"grade"},{title:"操作",key:"action",render:(s,c)=>e.jsx("button",{onClick:()=>alert(`查看 ${c.name} 的详细信息`),children:"查看详情"})}];return e.jsx(u,{columns:a,dataSource:o,bordered:!0,size:"default",sortBy:"score",sortOrder:"desc",pagination:{current:r,pageSize:5,onChange:s=>n(s)}})}},W={render:()=>{const[r,n]=m.useState(1);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{children:"用户管理表格"}),e.jsx(u,{columns:[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"城市",key:"city"},{title:"操作",key:"action",render:(a,s)=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"4px 12px",border:"1px solid #165dff",background:"#165dff",color:"white",borderRadius:"4px",cursor:"pointer"},onClick:()=>alert(`编辑 ${s.name}`),children:"编辑"}),e.jsx("button",{style:{padding:"4px 12px",border:"1px solid #ff4d4f",background:"#ff4d4f",color:"white",borderRadius:"4px",cursor:"pointer"},onClick:()=>alert(`删除 ${s.name}`),children:"删除"})]})}],dataSource:g,bordered:!0,pagination:{current:r,pageSize:10,onChange:a=>n(a)}})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    dataSource: userData
  }
}`,...b.parameters?.docs?.source},description:{story:"默认表格 - 最基础的用法",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    dataSource: userData,
    bordered: true
  }
}`,...x.parameters?.docs?.source},description:{story:"带边框 - 显示表格边框",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    dataSource: userData,
    size: 'small'
  }
}`,...h.parameters?.docs?.source},description:{story:"小尺寸表格 - 紧凑的样式",...h.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    dataSource: userData,
    size: 'large'
  }
}`,...C.parameters?.docs?.source},description:{story:"大尺寸表格 - 更大的行高",...C.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      title: '姓名',
      key: 'name',
      render: (text: string) => <strong>{text}</strong>
    }, {
      title: '年龄',
      key: 'age',
      render: (age: number) => <span style={{
        color: age > 25 ? 'red' : 'green'
      }}>{age}</span>
    }, {
      title: '城市',
      key: 'city',
      render: (city: string) => <span>📍 {city}</span>
    }],
    dataSource: userData
  }
}`,...P.parameters?.docs?.source},description:{story:"自定义单元格渲染 - 使用 render 函数",...P.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      title: '学生信息',
      key: 'name',
      render: (_: unknown, record: any) => <div>
            <div style={{
          fontWeight: 'bold'
        }}>{record.name}</div>
            <div style={{
          fontSize: '12px',
          color: '#999'
        }}>学号: {record.key}</div>
          </div>
    }, {
      title: '年龄',
      key: 'age'
    }, {
      title: '分数',
      key: 'score'
    }, {
      title: '等级',
      key: 'grade'
    }],
    dataSource: studentData.slice(0, 5)
  }
}`,...j.parameters?.docs?.source},description:{story:"自定义渲染 - 组合多个字段",...j.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      title: '姓名',
      key: 'name'
    }, {
      title: '年龄',
      key: 'age'
    }, {
      title: '城市',
      key: 'city'
    }, {
      title: '操作',
      key: 'action',
      render: (_: unknown, record: any) => <div style={{
        display: 'flex',
        gap: '8px'
      }}>
            <button onClick={() => alert(\`编辑 \${record.name}\`)}>编辑</button>
            <button onClick={() => alert(\`删除 \${record.name}\`)}>删除</button>
          </div>
    }],
    dataSource: userData
  }
}`,...v.parameters?.docs?.source},description:{story:"操作列 - 带按钮的操作列",...v.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    sortBy: 'age',
    sortOrder: 'asc'
  }
}`,...B.parameters?.docs?.source},description:{story:"按年龄升序排序",...B.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    sortBy: 'score',
    sortOrder: 'desc'
  }
}`,...D.parameters?.docs?.source},description:{story:"按分数降序排序",...D.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    filterBy: 'age',
    filterValue: (age: number) => age >= 20
  }
}`,...z.parameters?.docs?.source},description:{story:"筛选年龄大于等于 20 的学生",...z.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    filterBy: 'grade',
    filterValue: 'A'
  }
}`,...A.parameters?.docs?.source},description:{story:"筛选等级为 A 的学生",...A.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    filterBy: 'score',
    filterValue: (score: number) => score >= 80 && score <= 90
  }
}`,...T.parameters?.docs?.source},description:{story:"筛选分数在 80-90 之间的学生",...T.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    sortBy: 'age',
    sortOrder: 'asc',
    filterBy: 'grade',
    filterValue: 'A'
  }
}`,...R.parameters?.docs?.source},description:{story:"排序 + 筛选组合",...R.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns: studentColumns,
    dataSource: studentData,
    bordered: true,
    sortBy: 'score',
    sortOrder: 'desc'
  }
}`,...w.parameters?.docs?.source},description:{story:"带边框 + 排序",...w.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    return <Table columns={studentColumns} dataSource={studentData} pagination={{
      current: currentPage,
      pageSize: 5,
      onChange: page => setCurrentPage(page)
    }} />;
  }
}`,...$.parameters?.docs?.source},description:{story:"基础分页 - 每页 5 条（可点击翻页）",...$.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(2);
    return <Table columns={studentColumns} dataSource={studentData} pagination={{
      current: currentPage,
      pageSize: 5,
      onChange: page => setCurrentPage(page)
    }} />;
  }
}`,..._.parameters?.docs?.source},description:{story:"分页 - 显示第 2 页（可点击翻页）",..._.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    return <Table columns={studentColumns} dataSource={studentData} pagination={{
      current: currentPage,
      pageSize: 3,
      onChange: page => setCurrentPage(page)
    }} />;
  }
}`,...O.parameters?.docs?.source},description:{story:"分页 - 每页 3 条（可点击翻页）",...O.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    return <Table columns={studentColumns} dataSource={studentData} sortBy="age" sortOrder="asc" filterBy="grade" filterValue="A" pagination={{
      current: currentPage,
      pageSize: 3,
      onChange: page => setCurrentPage(page)
    }} />;
  }
}`,...q.parameters?.docs?.source},description:{story:"分页 + 排序 + 筛选组合（可点击翻页）",...q.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    columns: userColumns,
    dataSource: []
  }
}`,...N.parameters?.docs?.source},description:{story:"空数据 - 显示暂无数据",...N.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const largeData = Array.from({
      length: 100
    }, (_, i) => ({
      key: \`\${i + 1}\`,
      id: i + 1,
      name: \`用户\${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      status: i % 3 === 0 ? '活跃' : '离线'
    }));
    return <Table columns={[{
      title: 'ID',
      key: 'id'
    }, {
      title: '姓名',
      key: 'name'
    }, {
      title: '邮箱',
      key: 'email'
    }, {
      title: '状态',
      key: 'status'
    }]} dataSource={largeData} pagination={{
      current: currentPage,
      pageSize: 10,
      onChange: page => setCurrentPage(page)
    }} />;
  }
}`,...F.parameters?.docs?.source},description:{story:"大数据量 - 模拟真实场景（可点击翻页）",...F.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const columns = [{
      title: '学生',
      key: 'name',
      render: (_: unknown, record: any) => <div>
            <strong>{record.name}</strong>
            <div style={{
          fontSize: '12px',
          color: '#999'
        }}>{record.age} 岁</div>
          </div>
    }, {
      title: '分数',
      key: 'score',
      render: (score: number) => <span style={{
        color: score >= 90 ? 'green' : score >= 60 ? 'orange' : 'red',
        fontWeight: 'bold'
      }}>
            {score}
          </span>
    }, {
      title: '等级',
      key: 'grade'
    }, {
      title: '操作',
      key: 'action',
      render: (_: unknown, record: any) => <button onClick={() => alert(\`查看 \${record.name} 的详细信息\`)}>
            查看详情
          </button>
    }];
    return <Table columns={columns} dataSource={studentData} bordered size="default" sortBy="score" sortOrder="desc" pagination={{
      current: currentPage,
      pageSize: 5,
      onChange: page => setCurrentPage(page)
    }} />;
  }
}`,...V.parameters?.docs?.source},description:{story:"完整功能展示",...V.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    return <div style={{
      padding: '20px'
    }}>
        <h2>用户管理表格</h2>
        <Table columns={[{
        title: '姓名',
        key: 'name'
      }, {
        title: '年龄',
        key: 'age'
      }, {
        title: '城市',
        key: 'city'
      }, {
        title: '操作',
        key: 'action',
        render: (_: unknown, record: any) => <div style={{
          display: 'flex',
          gap: '8px'
        }}>
                  <button style={{
            padding: '4px 12px',
            border: '1px solid #165dff',
            background: '#165dff',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer'
          }} onClick={() => alert(\`编辑 \${record.name}\`)}>
                    编辑
                  </button>
                  <button style={{
            padding: '4px 12px',
            border: '1px solid #ff4d4f',
            background: '#ff4d4f',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer'
          }} onClick={() => alert(\`删除 \${record.name}\`)}>
                    删除
                  </button>
                </div>
      }]} dataSource={userData} bordered pagination={{
        current: currentPage,
        pageSize: 10,
        onChange: page => setCurrentPage(page)
      }} />
      </div>;
  }
}`,...W.parameters?.docs?.source},description:{story:"响应式表格示例",...W.parameters?.docs?.description}}};const oe=["Default","Bordered","Small","Large","CustomRender","RenderCombined","ActionColumn","SortByAgeAsc","SortByScoreDesc","FilterAge","FilterGrade","FilterScoreRange","SortAndFilter","BorderedWithSort","PaginationBasic","PaginationPage2","PaginationSmallSize","PaginationWithSortAndFilter","EmptyData","LargeData","FullFeatured","Responsive"];export{v as ActionColumn,x as Bordered,w as BorderedWithSort,P as CustomRender,b as Default,N as EmptyData,z as FilterAge,A as FilterGrade,T as FilterScoreRange,V as FullFeatured,C as Large,F as LargeData,$ as PaginationBasic,_ as PaginationPage2,O as PaginationSmallSize,q as PaginationWithSortAndFilter,j as RenderCombined,W as Responsive,h as Small,R as SortAndFilter,B as SortByAgeAsc,D as SortByScoreDesc,oe as __namedExportsOrder,se as default};
