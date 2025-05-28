import './style/App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboardoverview from './DashboardMainContent/Dashboardoverview';

function App() {
  return (
    <div className='app'>
      {/* Left Sidebar */}
      <div className="left-column">
        <Sidebar />
      </div>

      {/* Middle Content */}
      <div className="middle-column">
        <Dashboardoverview/>
      </div>

    </div>
  );
}

export default App;