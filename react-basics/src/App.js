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
import ConditionalRendering from './components/04day/ConditionalRendering';
import Listrendering from './components/05day/Listrendering';
import ProductRenderning from './components/05day/ProductRenderning';
import ProductList from './components/05day/ProductList';
import FormValidations from './components/06day/FormValidations';
import CSSinReact from './components/06day/CSSinReact';
import ReactBootstrapDemo from './components/07day/ReactBootstrapDemo';
import { MyButton, TextBox } from './components/07day/styledcomponents';
import ReactHookFormValidations from './components/07day/ReactHookFormValidations';
import Counter from './components/08day/Counter';
import PasswordGenerator from './components/09day/PasswordGenerator';
import Refdemo from './components/09day/Refdemo';
import ClassCompDemo from './components/10day/ClassCompDemo';
import ClassCompDemo1 from './components/10day/ClassCompDemo1';

function App() {
  let a="hello"
  let [isLoggedIn,setIsLoggedIn]=useState(true)
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
      {/* <Form2/> */}

      {/* <button type="button" class="btn btn-primary"  onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      
      <ConditionalRendering isLoggedIn={isLoggedIn} username="Happy"/> */}

      {/* <Listrendering/> */}

      {/* <ProductRenderning/> */}

      {/* <ProductList/> */}
      
      {/* <FormValidations/> */}
      {/* <CSSinReact/> */}

      {/* <ReactBootstrapDemo/> */}

      {/* <MyButton>Click Me</MyButton>
      <TextBox type="datetime-local"></TextBox> */}
      {/* <ReactHookFormValidations/> */}

      {/* <Counter/> */}

      {/* <PasswordGenerator/>
      <hr/>
      <Refdemo/> */}

      {/* <ClassCompDemo username="Happy" address="Pune">
          <PasswordGenerator/>
          <h2>heading2</h2>
      </ClassCompDemo> */}

      <ClassCompDemo1/>
      
    </div>
  );
}

export default App;
