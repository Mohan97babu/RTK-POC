
import './App.css';
import Project from './page/Project';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Posts from './page/Posts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Schools from './page/Schools.jsx';
import Sidebar from './layout/SideBar.jsx';
import Data from './page/Data.jsx';
import NavBar from './layout/NavBar.jsx';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Login from './page/Login.jsx';
import LoginTemplate from './Templates/LoginTemplate.jsx';
import MainTemplate from './Templates/MainTemplate.jsx';
import PrivateRoutes from './routes/PrivateRoutes.js';
function App() {

  const [page, setPage] = useState(false);
  console.log(page + " in app");
  console.log(window.location.pathname, "locate");


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginTemplate />} >
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/*" element={<MainTemplate />} >
              <Route path="bill" element={<Project />} />
              <Route path="posts" element={<Posts />} />
              <Route path="schools" element={<Schools />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
