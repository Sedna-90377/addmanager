import AddressList from './components/AddressList';
import Overview from './components/Overview';
import './App.css';
import { personen } from './Data';


function App() {
  return (
      <div className="App">
        <Overview />
        <AddressList list={personen}/>
      
      </div>

    
  );
}

export default App;
