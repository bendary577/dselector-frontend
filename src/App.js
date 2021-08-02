import './App.css';
import Home from '../src/screens/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
      <BrowserRouter>
          <Switch>
              <Route exact path={["/", "/home"]}>
                  <Home />
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
