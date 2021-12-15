import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";
import Dashboard from "./pages/Dashboard.component";
import Fee from "./pages/Fee.component";
import History from "./pages/History.component";
import ProfilePage from "./pages/ProfilePage.component";
import Receipt from "./pages/Receipt.component";
import Report from "./pages/Report.component";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUp';
import MainWrapper from "./pages/Main/MainWrapper.jsx";

function App() {
  return (
    <>
      <div className='App w-100 row m-0' style={{ overflowX: "hidden" }}>
        <Routes>
          <Route path='/' element={<HomePage />} />


          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUp />} />

          <Route path="main" element={<MainWrapper />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='payment' element={<Fee />} />
            <Route path='receipt' element={<Receipt />} />
            <Route path='report' element={<Report />} />
            <Route path='history' element={<History />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
