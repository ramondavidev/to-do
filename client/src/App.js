import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.compont';

import Home from './pages/home/home.component';
import ToDo from './pages/to-do/to-do.component';
import Edit from './pages/edit/edit.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/to-do" component={ToDo} />
        <Route path="/:id" component={Edit} />
        
      </Switch>
    </div>
  );
}

export default App;
