import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <Router>
      <div id="dom-container">
        <Header />
        <div id="main-content">
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>



          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
