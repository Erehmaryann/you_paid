<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./component/Pages/HomePage/HomePage";
import LoginPage from "./component/Pages/LoginPage/LoginPage";
import Sidebar from "./component/Sidebar/Sidebar.component";

function App() {
  return (
    <div className='App d-flex flex-column '>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/sidebar' element={<Sidebar />}></Route>
        <Route exact path='/login' element={<LoginPage />}></Route>
=======
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './component/Sidebar/Sidebar.component';
import Dashboard from './pages/Dashboard.component';
import ProfilePage from './pages/ProfilePage.component';

function App() {
  return (
    <div className="App w-100 row">
      <Sidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
>>>>>>> b258f50ca9168357274d346f334bfb8ecb1fb682
      </Routes>
    </div>
  );
}

export default App;
