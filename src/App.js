import './App.css';
import BuildNavbar from './components/MyNavbar';
import BuildFooter from './components/MyFooter';
import BuildJumbotron from './components/MyJumbotron';
import BuildCards from './components/MyCards';
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <BuildNavbar />
      <Container>
        <BuildJumbotron />
        <BuildCards initial={0} end={4} />
        <BuildCards initial={4} end={8} />
      </Container>
      <BuildFooter />
    </div>
  );
}

export default App;
