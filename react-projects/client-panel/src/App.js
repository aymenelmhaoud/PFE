import React, {Component} from 'react';
import Addlogin from './components/login/Addlogin';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component{
render (){
  return (
    <div className="App">
      
      <Navbar title="ADMIN "/>
      <Addlogin/>
    
    </div>
  );
}
}
export default App;
