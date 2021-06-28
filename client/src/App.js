import './App.css';

import { MusicPlayer } from './components/screens/MusicPlayer';
import {Signin } from './components/screens/Signin'
import { Signup } from './components/screens/Signup';
import{BrowserRouter,Route, Switch, useHistory} from 'react-router-dom'
import { useEffect } from 'react';

const Routing=()=>{
  const history=useHistory()
  useEffect(() => {
    const lol=()=>{
    try{
      if(!localStorage.getItem('user') ||!localStorage.getItem('jwt')){
        history.push('/signin')
      }
    }
    catch(err){
      console.log(err)
    }
  }
  lol()
  }, [])

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
