import './App.css';
import WeekTable from './table_display/week_table.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {WeekTable()}
      </header>
    </div>
  );
}

export default App;
