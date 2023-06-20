import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Bar from './components/Navbar';
import Landingpage from './pages/landingpage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Bar />
      <Landingpage />
  </div>
  );
}

export default App;
