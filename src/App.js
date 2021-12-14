import './App.scss';
import PaymentWrapper from './component/PaymentWrapper/PaymentWrapper.component';
import Sidebar from './component/Sidebar/Sidebar.component';

function App() {
  return (
    <div className="App d-lg-flex">
      <Sidebar />
      <PaymentWrapper />
    </div>
  );
}

export default App;
