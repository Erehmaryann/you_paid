import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './component/Sidebar/Sidebar.component';
import Dashboard from './pages/Dashboard.component';
import Fee from './pages/Fee.component';
import ProfilePage from './pages/ProfilePage.component';
import Receipt from './pages/Receipt.component';
import Report from './pages/Report.component';

function App() {
  return (
    <div className="App w-100 row m-0" style={{ overflowX: 'hidden' }}>
      <Sidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="payment" element={<Fee />} />
        <Route path="receipt" element={<Receipt />} />
        <Route path="report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
