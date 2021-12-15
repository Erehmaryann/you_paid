import { Routes, Route } from "react-router-dom";
import "./App.scss";
// import Sidebar from "./component/Sidebar/Sidebar.component";
import Dashboard from "./pages/Dashboard.component";
import ProfilePage from "./pages/ProfilePage.component";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/signUpPage/SignUp";

function App() {
  return (
    <div className='App w-100 row'>
      {/* <Sidebar /> */}
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
