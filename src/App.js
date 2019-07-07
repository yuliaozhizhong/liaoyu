import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import MyLayout from './Componets/MyLayout'
import Home from './Page/Home'
import Mine from './Page/Mine'
import Cart from './Page/Cart'
class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <Route path='/Home' exact render={(props)=><MyLayout {...props}><Home/></MyLayout>}></Route>
        <Route path='/Cart' render={(props)=><MyLayout {...props}><Cart/></MyLayout>}></Route>
        <Route path='/Mine' render={(props)=><MyLayout {...props}><Mine/></MyLayout>}></Route>
        </Router>
      </div>
    )
  }
}



export default App;
