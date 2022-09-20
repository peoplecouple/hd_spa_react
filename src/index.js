import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// npm i react-router-dom@6 깔고
// https://reactrouter.com/en/main/start/tutorial

// App 을 BrowserRouter로 감쌈
// App.js에서 page들을 Routes로 감쌈 path, element값 주기
// a 태그 대신 Link를 단다, path를 Routes의 path와 똑같이 준다.
// Link는 <BrowserRouter> 내에 감싸져있어야 한다. 그래서 App 밖에 <BrowserRouter>를 씌워줌


//https://codingapple.com/unit/react-build-deploy-github-pages/ 읽어보기
//deploy해서 배포하면 그림 경로가 안맞게 된다. 그래서 <BrowserRouter basename={process.env.PUBLIC_URL}> basename추가해야함
