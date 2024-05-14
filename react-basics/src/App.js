import { useState } from 'react';
import './App.css';
import Image1 from './assets/images/a.jpg'
import FirstFuncomp from './components/01day/FirstFuncomp';
import PropsDemoinFun from './components/01day/PropsDemoinFun';
import CounterApp from './components/02day/CounterApp';
import Eventdemoinfun from './components/02day/Eventdemoinfun';
import Statedemoinfun from './components/02day/Statedemoinfun';
import PropsDemo from './components/03day/PropsDemo';
import RegisterForm from './components/03day/RegisterForm';
import Form1 from './components/03day/Form1';
import Form2 from './components/03day/Form2';

function App() {
  let a="hello"
  let [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className='container'>
      {/* <label htmlFor="">enter </label> */}
      <h1 className="success" id="2323" name="rwetw">Hello React</h1>
      {/* <FirstFuncomp></FirstFuncomp>
      <FirstFuncomp/> <hr/>
      <h1>{a}</h1>
      <img src={Image1} height="200px" width={200} style={{border:'2px solid black',borderRadius:'10px'}}></img> <br/>
      <img src={require('./assets/images/a.jpg')}></img> */}
  
    {/* <PropsDemoinFun username="Ram" address="Pune"/> */}

    {/* <Eventdemoinfun/>
    <hr/>
    <Statedemoinfun uname="Ram"/> 

    <CounterApp/> */}

    {/* <PropsDemo  logging={isLoggedIn}>
        <h1>heading </h1>
        <CounterApp/>
        <span>span tag</span>
    </PropsDemo>
    <hr/>
    <PropsDemo vara={true}/> */}

    {/* <RegisterForm/> */}

      {/* <Form1/> */}
      <Form2/>
    </div>
  );
}

export default App;
