const arr = [
  { id: '01', name: '张1', pid: '', job: '项目经理' },
  { id: '02', name: '小亮', pid: '01', job: '产品leader' },
  { id: '03', name: '小美', pid: '01', job: 'UIleader' },
  { id: '04', name: '老马', pid: '01', job: '技术leader' },
  { id: '05', name: '老王', pid: '01', job: '测试leader' },
  { id: '06', name: '老李', pid: '01', job: '运维leader' },
  { id: '07', name: '小丽', pid: '02', job: '产品经理' },
  { id: '08', name: '大光', pid: '02', job: '产品经理' },
  { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
  { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
  { id: '11', name: '小华', pid: '04', job: '后端工程师' },
  { id: '12', name: '小李', pid: '04', job: '后端工程师' },
  { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
  { id: '14', name: '小强', pid: '05', job: '测试工程师' },
  { id: '15', name: '小涛', pid: '06', job: '运维工程师' },
]

function toTree(arr, parId) {
  let len = arr.length

  // 定义递归函数：作用是“找出 pid 为 parId 的所有孩子”
  function loop(parId) {
    let res = []

    // 遍历整个数组（性能杀手 性能很差）
    for (let i = 0; i < len; i++) {
      // 如果发现某个人的 pid 等于当前我要找的 parId
      if (arr[i].pid === parId) {
        // 【核心递归】：既然arr[i]是我的孩子，那arr[i]有没有孩子呢？
        arr[i].children = loop(arr[i].id)
        // 把找好的arr[i]（包含它的后代）放入结果
        res.push(arr[i])
      }
    }
    // 这个return有两个去处
    // 一个是给母亲的children（就是arr[i].children = loop(arr[i].id);）
    // 另一个是交给最外层的return,给出最终结果
    return res
  }
  return loop(parId)
}

let ans = toTree(arr, '')
console.log(ans)

function toTreeHash(list) {
  const res = []
  const map = {}

  // 1. 建立映射 O(n)
  // 遍历一遍数组，把id作为key,对象作为value存入map
  for (const item of list) {
    // 做解构{...item}，浅拷贝防止污染原数据
    // 同时给每个节点装上children
    map[item.id] = { ...item, children: [] }
  }

  // 2. 组装树 O(n)
  // 再次遍历数组
  for (const item of list) {
    // 从 map 中拿出当前节点（引用对象）
    const node = map[item.id]

    if (item.pid) {
      // 如果有父节点，去 map 里找爸爸
      const parent = map[item.pid]

      if (parent) {
        // 核心：因为 map 里的对象是引用类型
        // 这里把 node push 进 parent.children
        // map[item.pid] 指向的对象也就自动拥有了这个孩子
        parent.children.push(node)
      }
    } else {
      // 如果没有 pid，说明是根节点，直接放入结果集
      res.push(node)
    }
  }
  return res
}

const tree = toTreeHash(arr)
console.log(tree)
