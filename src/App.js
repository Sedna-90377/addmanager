import AddressList from './components/AddressList';
import Overview from './components/Overview';
import './App.css';
import { personen } from './Data';
import PersonContextProvider from './contexts/PersonContext';


function App() {
  return (
    <PersonContextProvider>
      <div className="App">
        <Overview />
        <AddressList />
      
      </div>
    </PersonContextProvider>
    
  );
}

export default App;
