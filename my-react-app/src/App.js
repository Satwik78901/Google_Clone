import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">Login page</Route>
          <Route path="/">Hello World</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
