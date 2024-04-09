// import orgApi from './api/org'
// import userApi from './api/user'
// import './style.css'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <h1>Hixtrip FE Online Quiz</h1>
//     <h2>Users:<h2>
//     <p class="read-the-docs" id="user">
//     </p>
//     <h2>Orgs:<h2>
//     <p class="read-the-docs" id="org">
//     </p>
//   </div>
// `

// userApi.query({}).then((users) => {
//   document.getElementById('user')!.innerHTML = JSON.stringify(users)
// })

// orgApi.query('1').then((users) => {
//   document.getElementById('org')!.innerHTML = JSON.stringify(users)
// })



import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');





// 如何将如下的JSON正确解析成 Object
// JSON.parse
// 前端需要稳定每隔1s向服务端请求API, 请问如何实现？ 
// function reqHeartbeat() {
//   setTimeout(()=> {
//     // 请求
//     reqHeartbeat();
//   }, 1000);
// }
// 什么情况下，你会为你的项目引入状态管理库，比如Redux, Pinia, 可以简述一下起到了什么作用么？
// 当多个组件共享数据时，  1.状态管理 2.结构清晰 3.类型安全
// 为什么ESM与CJS不能兼容？
// ESM支持导入和导出命名的模块成员、默认导出和命名空间导入，而CJS则只支持整个模块的导入和导出,ESM在静态阶段就编译并分析模块的依赖关系，而CJS则是在运行时解析和执行
