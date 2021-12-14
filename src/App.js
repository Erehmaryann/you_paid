import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './component/Sidebar/Sidebar.component';
import Dashboard from './pages/Dashboard.component';
import ProfilePage from './pages/ProfilePage.component';

function App() {
  return (
    <div className="App w-100 row m-0">
      <Sidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
