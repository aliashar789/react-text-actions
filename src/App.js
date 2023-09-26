// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
   
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#25254c';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled", "success");
    }
  }
  
  
  
  return (
  <>
<BrowserRouter>
<Navbar title="TextChanger" about="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
    <Routes>
    <Route path="/about" element={<About />}> </Route>
      <Route path="/" element={<Form heading="Enter Your Text" showAlert={showAlert} mode={mode}/>}>
        </Route>
  

    </Routes>
</div>
  </BrowserRouter>



   </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Ali
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
