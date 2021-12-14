import './App.scss';
import PaymentWrapper from './component/PaymentWrapper/PaymentWrapper.component';
import Sidebar from './component/Sidebar/Sidebar.component';
import TransWrapper from './component/TransWrapper/TransWrapper.component';

function App() {
  return (
    <div className="App w-100 row">
      <Sidebar />
      <PaymentWrapper />
      <TransWrapper />
    </div>
  );
}

export default App;
