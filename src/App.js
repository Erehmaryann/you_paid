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
      </Routes>
    </div>
  );
}

export default App;
