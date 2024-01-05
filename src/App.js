import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className='main-box'>
      <div><Sidebar /></div>
      <Main />
    </div>
  );
}

export default App;
