import './App.css';

import { MusicPlayer } from './components/screens/MusicPlayer';
import {Signin} from './components/screens/Signin'
import { Signup } from './components/screens/Signup';
import{BrowserRouter,Route, Switch, useHistory} from 'react-router-dom'

const Routing=()=>{
  return(
    <Switch>
      <Route exact path="/">
        <MusicPlayer/>
      </Route>

      <Route path="/signin">
        <Signin/>  
      </Route>
      
      <Route path="/signup">
        <Signup/>
      </Route>


    </Switch>
  )
}


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routing/>
    </div>
    </BrowserRouter>

  );
}

export default App;
