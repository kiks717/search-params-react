import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import FetchData from './components/fetch/FetchData'
import Layout from './Layout';
import Post from './components/posts/Post';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
   <Route path='/' element={<App/>}/>
   <Route path='posts' element={<FetchData/>}/>
   <Route 
   path='posts/:id' 
   element={<Layout>
    <Post/>
   </Layout>}/>
   </Routes> 
   </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
