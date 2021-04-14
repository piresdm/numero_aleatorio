import './App.css';
import Intervalo from './intervalo';
import Painel from './Painel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <div className="App">

        <Switch>
          <Route path="/painel">
            <Painel lista = {[]}/>
          </Route>
          <Route path="/">
            <Intervalo num = {0}/>
          </Route>    
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
