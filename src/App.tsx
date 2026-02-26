// // import { useState } from 'react'
// import './App.css'
// // import Test from './test.tsx'
// import Button from './components/Button/index.tsx'

// function App() {
//   return (
//     <>
//       <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//         {/* <Button size="mini" type="primary">Mini</Button>
//         <Button size="small" type="primary">Small</Button>
//         <Button size="default" type="primary">Default</Button>
//         <Button size="large" type="primary">Large</Button>     */}
//         <Button loading>提交中...</Button>
//         <Button>提交</Button>
//         <Button disabled>不可点击</Button>
//         <Button>可以点击</Button>
//         {/* 1. 字符串图标 */}
//         <Button icon="★">收藏</Button>

//         {/* 2. React 组件图标
//         import { Icon } from '@arco-design/web-react';
//         <Button icon={<IconStar />}>收藏</Button> */}

//         {/* 3. emoji */}
//         <Button icon="⭐">评分</Button>

//         {/* 4. 只有图标（没有文字） */}
//         <Button icon="★" />

//         {/* 5. loading 优先级更高 */}
//         <Button icon="★" loading>
//           提交中...
//         </Button>

//         <Button href="https://baidu.com">百度</Button>

//         <Button as="a">测试</Button>

//         <Button loading>提交订单到服务器 {/* loading 时宽度变小 */}</Button>

//         <Button loading loadingFixedWidth>
//           提交订单到服务器 {/* loading 时宽度不变 */}
//         </Button>
//       </div>
//     </>
//   )
// }

// export default App

// import './components/Grid/grid.responsive.css';
// import Row from './components/Grid/Row';
// import Col from './components/Grid/Col';

// function App() {
//   return (
//     <div style={{ padding: '40px' }}>
//       <h1>Grid 组件测试</h1>

//       {/* ========== 测试 1：基础 span ========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>1. 基础用法 - span（等分）</h2>
//         <Row gutter={16} style={{ border: '2px solid red', padding: '10px' }}>
//           <Col span={12} style={{ background: 'lightblue', padding: '20px' }}>
//             占一半 (span=12)
//           </Col>
//           <Col span={12} style={{ background: 'lightgreen', padding: '20px' }}>
//             占一半 (span=12)
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 2：不同宽度 ========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>2. 不同宽度</h2>
//         <Row gutter={16} style={{ border: '2px solid blue', padding: '10px' }}>
//           <Col span={6} style={{ background: 'lightcoral', padding: '20px' }}>
//             占 1/4 (span=6)
//           </Col>
//           <Col span={18} style={{ background: 'lightyellow', padding: '20px' }}>
//             占 3/4 (span=18)
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 3：offset（偏移）========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>3. offset（偏移）</h2>
//         <Row gutter={16} style={{ border: '2px solid green', padding: '10px' }}>
//           <Col span={6} style={{ background: 'lightpink', padding: '20px' }}>
//             A (span=6)
//           </Col>
//           <Col span={6} offset={12} style={{ background: 'lavender', padding: '20px' }}>
//             B (span=6, offset=12)
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 4：自动换行 ========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>4. 自动换行</h2>
//         <Row gutter={16} style={{ border: '2px solid orange', padding: '10px' }}>
//           <Col span={8} style={{ background: 'lightblue', padding: '20px' }}>
//             列 1 (span=8)
//           </Col>
//           <Col span={8} style={{ background: 'lightgreen', padding: '20px' }}>
//             列 2 (span=8)
//           </Col>
//           <Col span={8} style={{ background: 'lightyellow', padding: '20px' }}>
//             列 3 (span=8)
//           </Col>
//           <Col span={8} style={{ background: 'lightcoral', padding: '20px' }}>
//             列 4 (span=8，自动换行)
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 5：align（垂直对齐）========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>5. align（垂直对齐）</h2>
//         <Row gutter={16} align="middle" style={{ border: '2px solid purple', height: '150px', padding: '10px' }}>
//           <Col span={8} style={{ background: 'lightblue', padding: '40px' }}>
//             短内容
//           </Col>
//           <Col span={8} style={{ background: 'lightgreen', padding: '10px' }}>
//             中间内容
//           </Col>
//           <Col span={8} style={{ background: 'lightyellow', padding: '80px' }}>
//             长内容
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 6：justify（水平排列）========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>6. justify（水平排列）</h2>
//         <Row gutter={16} justify="center" style={{ border: '2px solid brown', padding: '10px' }}>
//           <Col span={6} style={{ background: 'lightblue', padding: '20px' }}>
//             A
//           </Col>
//           <Col span={6} style={{ background: 'lightgreen', padding: '20px' }}>
//             B
//           </Col>
//           <Col span={6} style={{ background: 'lightyellow', padding: '20px' }}>
//             C
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 7：响应式 - 简单形式 ========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>7. 响应式 - 简单形式（xs/md）</h2>
//         <p style={{ color: '#666', marginBottom: '10px' }}>
//           调整浏览器宽度测试：&lt;576px 单列，≥768px 双列
//         </p>
//         <Row gutter={16} style={{ border: '2px solid #1890ff', padding: '10px' }}>
//           <Col xs={24} md={12} style={{ background: '#91d5ff', padding: '20px', marginBottom: '10px' }}>
//             <strong>手机全宽，电脑半宽</strong>
//             <br />xs={24} md={12}
//           </Col>
//           <Col xs={24} md={12} style={{ background: '#69c0ff', padding: '20px', marginBottom: '10px' }}>
//             <strong>手机全宽，电脑半宽</strong>
//             <br />xs={24} md={12}
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 8：响应式 - 多断点 ========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>8. 响应式 - 多断点（xs/sm/md/lg/xl）</h2>
//         <p style={{ color: '#666', marginBottom: '10px' }}>
//           测试不同屏幕宽度下的布局变化
//         </p>
//         <Row gutter={16} style={{ border: '2px solid #52c41a', padding: '10px' }}>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#95de64', padding: '20px', marginBottom: '10px' }}>
//             列 1<br />xs=24 sm=12 md=8 lg=6 xl=4
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#b7eb8f', padding: '20px', marginBottom: '10px' }}>
//             列 2<br />xs=24 sm=12 md=8 lg=6 xl=4
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#95de64', padding: '20px', marginBottom: '10px' }}>
//             列 3<br />xs=24 sm=12 md=8 lg=6 xl=4
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#b7eb8f', padding: '20px', marginBottom: '10px' }}>
//             列 4<br />xs=24 sm=12 md=8 lg=6 xl=4
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#95de64', padding: '20px', marginBottom: '10px' }}>
//             列 5<br />xs=24 sm=12 md=8 lg=6 xl=4
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ background: '#b7eb8f', padding: '20px', marginBottom: '10px' }}>
//             列 6<br />xs=24 sm=12 md=8 lg=6 xl=4
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 9：响应式 + offset（对象形 式）========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>9. 响应式 + offset（对象形式）</h2>
//         <p style={{ color: '#666', marginBottom: '10px' }}>
//           手机不偏移，电脑偏移
//         </p>
//         <Row gutter={16} style={{ border: '2px solid #faad14', padding: '10px' }}>
//           <Col xs={24} md={{ span: 8, offset: 4 }} style={{ background: '#ffe58f', padding: '20px', marginBottom: '10px' }}>
//             <strong>偏移列</strong>
//             <br />{'xs={24} md={{ span: 8, push: 4 }}'}
//           </Col>
//           <Col xs={24} md={8} style={{ background: '#ffd666', padding: '20px', marginBottom: '10px' }}>
//             <strong>普通列</strong>
//             <br />xs={24} md={8}
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 10：响应式 + push/pull（排 序）========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>10. 响应式 + push/pull（排序）</h2>
//         <p style={{ color: '#666', marginBottom: '10px' }}>
//           在不同屏幕上改变列的顺序
//         </p>
//         <Row gutter={16} style={{ border: '2px solid #f5222d', padding: '10px' }}>
//           <Col xs={24} md={{ span: 12, push: 12 }} style={{ background: '#ffadd2', padding: '20px', marginBottom: '10px' }}>
//             <strong>第一列（电脑上被推到右边）</strong>
//             <br />{'xs={24} md={{ span: 12, push: 12 }}'}
//           </Col>
//           <Col xs={24} md={{ span: 12, pull: 12 }} style={{ background: '#ffadd2', padding: '20px', marginBottom: '10px' }}>
//             <strong>第二列（电脑上被拉到左边）</strong>
//             <br />{'xs={24} md={{ span: 12, push: 12 }}'}
//           </Col>
//         </Row>
//       </section>

//       {/* ========== 测试 11：综合卡片布局 ========== */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2>11. 综合卡片布局</h2>
//         <p style={{ color: '#666', marginBottom: '10px' }}>
//           模拟真实的响应式卡片布局
//         </p>
//         <Row gutter={16} style={{ border: '2px solid #722ed1', padding: '10px' }}>
//           <Col xs={24} sm={12} lg={8} xl={6}>
//             <div style={{ background: '#d3adf7', padding: '20px', height: '100%', borderRadius: '8px' }}>
//               <h3>卡片 1</h3>
//               <p>xs=24 sm=12 lg=8 xl=6</p>
//             </div>
//           </Col>
//           <Col xs={24} sm={12} lg={8} xl={6}>
//             <div style={{ background: '#efdbff', padding: '20px', height: '100%', borderRadius: '8px' }}>
//               <h3>卡片 2</h3>
//               <p>xs=24 sm=12 lg=8 xl=6</p>
//             </div>
//           </Col>
//           <Col xs={24} sm={12} lg={8} xl={6}>
//             <div style={{ background: '#d3adf7', padding: '20px', height: '100%', borderRadius: '8px' }}>
//               <h3>卡片 3</h3>
//               <p>xs=24 sm=12 lg=8 xl=6</p>
//             </div>
//           </Col>
//           <Col xs={24} sm={12} lg={8} xl={6}>
//             <div style={{ background: '#efdbff', padding: '20px', height: '100%', borderRadius: '8px' }}>
//               <h3>卡片 4</h3>
//               <p>xs=24 sm=12 lg=8 xl=6</p>
//             </div>
//           </Col>
//         </Row>
//       </section>

//     </div>
//   );
// }

// export default App;

// import Input from './components/Input';

// function App() {
//     return (
//         <div style={{ padding: '40px' }}>
//         <h1>Input 组件测试</h1>

//         {/* 测试 1：基础用法 */}
//         <section style={{ marginBottom: '20px' }}>
//             <h2>1. 基础用法</h2>
//             <Input placeholder="请输入内容" />
//         </section>

//         {/* 测试 2：带前缀和后缀 */}
//         <section style={{ marginBottom: '20px' }}>
//             <h2>2. 带装饰器</h2>
//             <Input
//             prefix="🔍"
//             suffix="📌"
//             placeholder="搜索"
//             />
//         </section>

//         {/* 测试 3：不同尺寸 */}
//         <section style={{ marginBottom: '20px' }}>
//             <h2>3. 不同尺寸</h2>
//             <Input size="mini" placeholder="Mini" style={{ marginBottom: '8px' }} />
//             <Input size="small" placeholder="Small" style={{ marginBottom: '8px' }} />
//             <Input size="default" placeholder="Default" style={{ marginBottom: '8px' }} />
//             <Input size="large" placeholder="Large" />
//         </section>

//         {/* 测试 4：错误状态 */}
//         <section style={{ marginBottom: '20px' }}>
//             <h2>4. 错误状态</h2>
//             <Input error placeholder="输入有误" />
//         </section>

//         {/* 测试 5：禁用状态 */}
//         <section style={{ marginBottom: '20px' }}>
//             <h2>5. 禁用状态</h2>
//             <Input disabled placeholder="禁用的输入框" />
//         </section>
//         </div>
//     );
// }

// export default App;

// import { useState } from 'react';
// import Input from './components/Input';

// function App() {
// const [text, setText] = useState('');
// const [password, setPassword] = useState('');

// return (
//     <div style={{ padding: '40px' }}>
//     <h1>Input 组件测试 - 第二阶段</h1>

//     {/* 测试 1：受控组件 */}
//     <section style={{ marginBottom: '20px' }}>
//         <h2>1. 受控组件</h2>
//         <Input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="请输入内容"
//         />
//         <p>当前值：{text}</p>
//     </section>

//     {/* 测试 2：带清除按钮 */}
//     <section style={{ marginBottom: '20px' }}>
//         <h2>2. 带清除按钮</h2>
//         <Input
//         allowClear
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="输入内容后会出现清除按钮"
//         />
//     </section>

//     {/* 测试 3：字数统计 */}
//     <section style={{ marginBottom: '20px' }}>
//         <h2>3. 字数统计</h2>
//         <Input
//         showCount
//         maxLength={100}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="最多输入 100 字"
//         />
//     </section>

//     {/* 测试 4：密码框 + 显隐切换 */}
//     <section style={{ marginBottom: '20px' }}>
//         <h2>4. 密码框 + 显隐切换</h2>
//         <Input
//         type="password"
//         visibilityToggle
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="请输入密码"
//         />
//     </section>

//     {/* 测试 5：组合使用（前缀 + 清除 + 字数统计） */}
//     <section style={{ marginBottom: '20px' }}>
//         <h2>5. 组合使用</h2>
//         <Input
//         prefix="🔍"
//         allowClear
//         showCount
//         maxLength={50}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="搜索内容（最多50字）"
//         />
//     </section>

//     {/* 测试 6：非受控组件 */}
//     <section style={{ marginBottom: '20px' }}>
//         <h2>6. 非受控组件（defaultValue）</h2>
//         <Input
//         defaultValue="初始值"
//         allowClear
//         placeholder="非受控组件"
//         />
//     </section>
//     </div>
// );
// }

// export default App;

// import { useState } from 'react';
// import { Input } from './components/Input';

// function App() {
//     // const [text, setText] = useState('');
//     const [intro, setIntro] = useState('');

//     return (
//         <div style={{ padding: '40px' }}>
//         <h1>Input 组件测试 - 第三阶段</h1>

//         {/* ========== TextArea 测试 ========== */}
//         <section style={{ marginBottom: '40px' }}>
//             <h2>1. TextArea - 基础用法</h2>
//             <Input.TextArea
//             placeholder="请输入自我介绍"
//             style={{ width: '400px' }}
//             />
//         </section>

//         <section style={{ marginBottom: '40px' }}>
//             <h2>2. TextArea - 自适应高度</h2>
//             <Input.TextArea
//             autoSize={{ minRows: 2, maxRows: 6 }}
//             placeholder="输入内容会自动调整高度（2-6行）"
//             style={{ width: '400px' }}
//             />
//         </section>

//         <section style={{ marginBottom: '40px' }}>
//             <h2>3. TextArea - 受控组件 + 字数统计</h2>
//             <Input.TextArea
//             value={intro}
//             onChange={(e) => setIntro(e.target.value)}
//             showCount
//             maxLength={200}
//             placeholder="最多输入 200 字"
//             style={{ width: '400px' }}
//             />
//             <p>当前值：{intro}</p>
//         </section>

//         {/* ========== Group 测试 ========== */}
//         <section style={{ marginBottom: '40px' }}>
//             <h2>4. Input.Group - 基础用法</h2>
//             <Input.Group>
//             <Input defaultValue="https://" style={{ width: '100px' }} />
//             <Input defaultValue="example.com" style={{ width: '200px' }} />
//             </Input.Group>
//         </section>

//         <section style={{ marginBottom: '40px' }}>
//             <h2>5. Input.Group - 紧凑模式</h2>
//             <Input.Group compact>
//             <Input defaultValue="0571" style={{ width: '80px' }} />
//             <Input defaultValue="88888888" style={{ width: '150px' }} />
//             <Input defaultValue="#" style={{ width: '40px' }} />
//             </Input.Group>
//         </section>

//         <section style={{ marginBottom: '40px' }}>
//             <h2>6. Input.Group - 前后缀组合</h2>
//             <Input.Group compact>
//             <Input prefix="🔍" placeholder="搜索" style={{ width: '200px' }} />
//             <Input suffix="📌" placeholder="标记" style={{ width: '200px' }} />
//             </Input.Group>
//         </section>
//         </div>
//     );
// }

// export default App;

// import React,{useState} from 'react';
// import Table from './components/Table';
// import Button from './components/Button/index';
// import Input from './components/Input/index';
// import Modal from './components/Modal/index';

// function App() {
//     const userData = [
//         { name: '张三', age: 25, city: '北京' },
//         { name: '李四', age: 30, city: '上海' },
//         { name: '王五', age: 28, city: '广州' },
//     ];

//     const emptyData = [];

//     const studentData = [
//       { key: '1', name: '张三', age: 18, score: 85, grade: 'A' },
//       { key: '2', name: '李四', age: 19, score: 92, grade: 'A' },
//       { key: '3', name: '王五', age: 20, score: 78, grade: 'B' },
//       { key: '4', name: '赵六', age: 18, score: 65, grade: 'C' },
//       { key: '5', name: '钱七', age: 21, score: 88, grade: 'A' },
//       { key: '6', name: '孙八', age: 19, score: 72, grade: 'B' },
//       { key: '7', name: '周九', age: 20, score: 95, grade: 'A' },
//       { key: '8', name: '吴十', age: 18, score: 58, grade: 'D' },
//       { key: '9', name: '郑十一', age: 22, score: 81, grade: 'B' },
//       { key: '10', name: '王小二', age: 19, score: 76, grade: 'B' },
//       { key: '11', name: '李小三', age: 20, score: 89, grade: 'A' },
//       { key: '12', name: '张小四', age: 21, score: 67, grade: 'C' },
//       { key: '13', name: '陈小五', age: 18, score: 91, grade: 'A' },
//       { key: '14', name: '刘小六', age: 19, score: 83, grade: 'B' },
//       { key: '15', name: '杨小七', age: 22, score: 74, grade: 'B' },
//     ];

//     const studentColumns = [
//       {
//           title: '姓名',  // 列标题
//           key: 'name',    // 对应数据中的字段名
//       },
//       {
//           title: '年龄',
//           key: 'age',
//       },
//       {
//           title: '分数',
//           key: 'score',
//       },
//       {
//           title: '等级',
//           key: 'grade',
//       },
//     ];

//     const columns = [
//       { title: '姓名', key: 'name' },
//       { title: '年龄', key: 'age' },
//       { title: '城市', key: 'city' },
//     ];

//     // 管理分页的当前页码
//       const [currentPage, setCurrentPage] = useState(1);

//       // 处理页码变化
//       const handlePageChange = (page: number, pageSize: number) => {
//           console.log(`切换到第 ${page} 页，每页 ${pageSize} 条`);
//           setCurrentPage(page);
//       };

//     return (
//         <div style={{ padding:'40px' }}>
//             <h1>Table组件测试</h1>

//             <section style={{marginBottom: '40px'}}>
//                 <h2>1.基础用法</h2>
//                 <Table
//                     columns={columns}
//                     dataSource={userData}
//                 />
//                 <h3>测试 1：基础表格（无排序、无筛选、无分页）</h3>
//                 <Table
//                     columns={studentColumns}
//                     dataSource={studentData}
//                 />
//             </section>

//             <section style={{ marginBottom: '40px' }}>
//                 <h2>2. 带边框（bordered）</h2>
//                 <Table
//                     columns={columns}
//                     dataSource={userData}
//                     bordered={true}
//                 />
//                 <h3>测试 2：按分数降序排序</h3>
//                 <Table
//                     columns={studentColumns}
//                     dataSource={studentData}
//                     sortBy="score"        // 按 score 字段排序
//                     sortOrder="desc"      // 降序（大到小）
//                 />
//             </section>

//             <section style={{ marginBottom: '40px' }}>
//                 <h2>3. 小尺寸表格</h2>
//                 <Table
//                     columns={columns}
//                     dataSource={userData}
//                     size="small"
//                 />
//                 <h3>测试 3：筛选年龄大于等于 20 的学生</h3>
//                 <Table
//                     columns={studentColumns}
//                     dataSource={studentData}
//                     filterBy="age"
//                     filterValue={(age) => age >= 20}  // 筛选函数
//                 />
//             </section>

//             <section style={{ marginBottom: '40px' }}>
//                 <h2>4. 空数据状态</h2>
//                 <Table
//                     columns={columns}
//                     dataSource={emptyData}
//                 />
//                 <h3>测试 4：分页显示（每页 5 条，显示第 1 页）</h3>
//                 <Table
//                     columns={studentColumns}
//                     dataSource={studentData}
//                     pagination={{
//                         current: 1,      // 第 1 页
//                         pageSize: 5,     // 每页 5 条
//                     }}
//                 />
//                 <div style={{ marginBottom: '40px' }}>
//                     <h3>测试 4：分页显示（可点击切换页码）</h3>

//                     <Table
//                         columns={studentColumns}
//                         dataSource={studentData}
//                         pagination={{
//                             current: currentPage,        // 使用状态中的当前页
//                             pageSize: 5,
//                             onChange: handlePageChange,  // 使用回调函数
//                         }}
//                     />
//                 </div>
//             </section>

//             {/* ========== 测试 5：组合排序 + 筛选 + 分页 ========== */}
//             <div style={{ marginBottom: '40px' }}>
//                 <h3>测试 5：排序 + 筛选 + 分页（第 2 页）</h3>
//                 <Table
//                     columns={studentColumns}
//                     dataSource={studentData}
//                     sortBy="age"             // 按年龄排序
//                     sortOrder="asc"          // 升序（小到大）
//                     filterBy="grade"         // 按等级筛选
//                     filterValue="A"          // 只要等级为 A 的
//                     pagination={{
//                         current: 2,          // 第 2 页
//                         pageSize: 3,         // 每页 3 条
//                     }}
//                 />
//             </div>

//             {/* ========== Modal 测试 ========== */}
//             <div>
//                 <h3>Modal 测试</h3>
//                 <Modal
//                     visible={true}
//                     title="测试弹窗"
//                     onOk={() => console.log('确定')}
//                     onCancel={() => console.log('取消')}
//                 >
//                     <p>这是一个测试弹窗</p>
//                 </Modal>
//             </div>
//         </div>
//     )
// }

// export default App;

// import React, { useState } from 'react'
// import Button from './components/Button/index'
// import Input from './components/Input/index'
// import Table from './components/Table/index'
// import Modal from './components/Modal/index'

// const TestPage = () => {
//   // // 1. 创建一个状态来控制显示/隐藏 控制基础弹窗
//   // const [isModalVisible, setIsModalVisible] = useState(false);

//   // 控制基础弹窗的显示/隐藏
//   const [modalVisible, setModalVisible] = useState(false)

//   // 控制自定义弹窗的显示/隐藏
//   const [customModalVisible, setCustomModalVisible] = useState(false)

//   // 控制禁止点击遮罩关闭的弹窗
//   const [strictModalVisible, setStrictModalVisible] = useState(false)

//   // 控制复杂内容弹窗
//   const [complexModalVisible, setComplexModalVisible] = useState(false)

//   // // 打开弹窗的方法
//   // const showModal = () => {
//   //     setIsModalVisible(true);
//   // };

//   // // 关闭弹窗的方法
//   // const handleCancel = () => {
//   //     console.log('用户点击了取消或关闭图标');
//   //     // 2. 核心：这里一定要把状态设为 false
//   //     setIsModalVisible(false);
//   // };

//   // const handleOk = () => {
//   //     console.log('用户点击了确定');
//   //     // 通常点击确定后也会关闭弹窗
//   //     setIsModalVisible(false);
//   // };

//   // 打开基础弹窗
//   const handleOpenBaseModal = () => {
//     setModalVisible(true)
//   }

//   // 关闭基础弹窗
//   const handleCloseBaseModal = () => {
//     setModalVisible(false)
//   }

//   // 打开自定义弹窗
//   const handleOpenCustomModal = () => {
//     setCustomModalVisible(true)
//   }

//   // 关闭自定义弹窗
//   const handleCloseCustomModal = () => {
//     setCustomModalVisible(false)
//   }

//   // 打开禁止点击遮罩的弹窗
//   const handleOpenStrictModal = () => {
//     setStrictModalVisible(true)
//   }

//   // 关闭禁止点击遮罩的弹窗
//   const handleCloseStrictModal = () => {
//     setStrictModalVisible(false)
//   }

//   // 打开复杂内容弹窗
//   const handleOpenComplexModal = () => {
//     setComplexModalVisible(true)
//   }

//   // 关闭复杂内容弹窗
//   const handleCloseComplexModal = () => {
//     setComplexModalVisible(false)
//   }

//   // 基础弹窗的确认回调
//   const handleBaseOk = () => {
//     console.log('基础弹窗：点击了确定')
//     setModalVisible(false)
//   }

//   // 基础弹窗的取消回调
//   const handleBaseCancel = () => {
//     console.log('基础弹窗：点击了取消')
//     setModalVisible(false)
//   }

//   return (
//     <div
//       style={{
//         padding: '20px',
//         marginTop: '40px',
//         border: '1px solid #d9d9d9',
//         borderRadius: '8px',
//       }}
//     >
//       <h2
//         style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}
//       >
//         Modal 弹窗组件测试
//       </h2>

//       {/* 测试按钮区域 */}
//       <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
//         {/* 场景 1：基础弹窗 */}
//         <Button onClick={handleOpenBaseModal}>打开基础弹窗</Button>

//         {/* 场景 2：自定义弹窗 */}
//         <Button onClick={handleOpenCustomModal}>打开自定义弹窗</Button>

//         {/* 场景 3：禁止点击遮罩关闭 */}
//         <Button onClick={handleOpenStrictModal}>
//           打开严格弹窗（禁止点击遮罩）
//         </Button>

//         {/* 场景 4：复杂内容弹窗 */}
//         <Button onClick={handleOpenComplexModal}>打开复杂内容弹窗</Button>
//       </div>

//       {/* ========== 场景 1：基础弹窗 ========== */}
//       <Modal
//         visible={modalVisible}
//         title="基础弹窗"
//         onOk={handleBaseOk}
//         onCancel={handleBaseCancel}
//       >
//         <p>这是一个基础的 Modal 弹窗。</p>
//         <p>你可以：</p>
//         <ul style={{ paddingLeft: '20px' }}>
//           <li>点击遮罩层关闭</li>
//           <li>按 ESC 键关闭</li>
//           <li>点击"确定"或"取消"按钮关闭</li>
//         </ul>
//       </Modal>

//       {/* ========== 场景 2：自定义弹窗 ========== */}
//       <Modal
//         visible={customModalVisible}
//         title="自定义弹窗"
//         width={600}
//         onOk={() => {
//           console.log('自定义弹窗：点击了确定')
//           setCustomModalVisible(false)
//         }}
//         onCancel={() => {
//           console.log('自定义弹窗：点击了取消')
//           setCustomModalVisible(false)
//         }}
//       >
//         <p>这个弹窗有以下自定义配置：</p>
//         <ul style={{ paddingLeft: '20px' }}>
//           <li>宽度：600px（默认是 520px）</li>
//           <li>自定义标题</li>
//           <li>自定义内容</li>
//         </ul>
//       </Modal>

//       {/* ========== 场景 3：禁止点击遮罩关闭 ========== */}
//       <Modal
//         visible={strictModalVisible}
//         title="重要提示"
//         maskClosable={false} // 禁止点击遮罩关闭
//         onOk={() => {
//           console.log('严格弹窗：点击了确定')
//           setStrictModalVisible(false)
//         }}
//         onCancel={() => {
//           console.log('严格弹窗：点击了取消')
//           setStrictModalVisible(false)
//         }}
//       >
//         <p style={{ color: '#ff4d4f', fontWeight: 'bold' }}>
//           ⚠️ 这是一个重要的提示！
//         </p>
//         <p>你必须点击"确定"或"取消"按钮才能关闭此弹窗。</p>
//         <p>点击遮罩层（灰色背景）无效。</p>
//       </Modal>

//       {/* ========== 场景 4：复杂内容弹窗 ========== */}
//       <Modal
//         visible={complexModalVisible}
//         title="用户信息表单"
//         width={700}
//         onOk={() => {
//           console.log('复杂弹窗：提交表单')
//           setComplexModalVisible(false)
//         }}
//         onCancel={() => {
//           console.log('复杂弹窗：取消')
//           setComplexModalVisible(false)
//         }}
//         footer={
//           // 自定义底部按钮
//           <div
//             style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}
//           >
//             <Button onClick={() => setComplexModalVisible(false)}>
//               暂不保存
//             </Button>
//             <Button
//               onClick={() => {
//                 console.log('保存成功')
//                 setComplexModalVisible(false)
//               }}
//             >
//               保存
//             </Button>
//           </div>
//         }
//       >
//         <div>
//           <p style={{ marginBottom: '16px', fontWeight: 'bold' }}>
//             请输入用户信息：
//           </p>

//           {/* 模拟表单 */}
//           <div style={{ marginBottom: '12px' }}>
//             <label
//               style={{
//                 display: 'block',
//                 marginBottom: '4px',
//                 fontWeight: 'bold',
//               }}
//             >
//               用户名：
//             </label>
//             <Input placeholder="请输入用户名" style={{ width: '100%' }} />
//           </div>

//           <div style={{ marginBottom: '12px' }}>
//             <label
//               style={{
//                 display: 'block',
//                 marginBottom: '4px',
//                 fontWeight: 'bold',
//               }}
//             >
//               邮箱：
//             </label>
//             <Input placeholder="请输入邮箱地址" style={{ width: '100%' }} />
//           </div>

//           <div style={{ marginBottom: '12px' }}>
//             <label
//               style={{
//                 display: 'block',
//                 marginBottom: '4px',
//                 fontWeight: 'bold',
//               }}
//             >
//               个人简介：
//             </label>
//             <Input.TextArea
//               placeholder="请输入个人简介"
//               autoSize={{ minRows: 3, maxRows: 6 }}
//               style={{ width: '100%' }}
//             />
//           </div>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// export default TestPage

import { Form } from './components/Form'
import { FormItem } from './components/Form/FormItem'
import { Input } from './components/Input'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Form 校验测试</h2>

      <Form
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log('提交成功，数据:', values)
          alert('提交成功！查看控制台')
        }}
      >
        <FormItem name="username" label="用户名" required>
          <Input placeholder="请输入用户名" />
        </FormItem>

        <FormItem name="password" label="密码" required>
          <Input type="password" placeholder="请输入密码" />
        </FormItem>

        <FormItem name="email" label="邮箱">
          <Input type="email" placeholder="请输入邮箱（非必填）" />
        </FormItem>

        <button type="submit" style={{ marginTop: '16px' }}>
          提交
        </button>
      </Form>
    </div>
  )
}

export default App
