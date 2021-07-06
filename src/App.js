import './App.css';
import BuildNavbar from './components/MyNavbar';
import BuildFooter from './components/MyFooter';
import BuildJumbotron from './components/MyJumbotron';

function App() {
  return (
    <div className="App">
     <BuildNavbar />
     <BuildJumbotron />
     <BuildFooter />
    </div>
  );
}

export default App;
