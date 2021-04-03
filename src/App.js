import './App.css';
import { BrowserRouter as Router , Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <Navbar />
          <LandingPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
