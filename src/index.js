// index.js 是项目的入口，整个项目从这里开始运行
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'
import App from '../src/day_01/App.js'


// 渲染根组件#root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <Provider store={store}>
  //   <RouterProvider router={router} />
  // </Provider>
);