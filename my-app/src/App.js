import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const changeToggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode is enabled', 'success')
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode is enabled', 'success')
    }
  }

  const showAlert = (message, alertType) => {
    setAlert({
      message: message,
      alertType: alertType
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
          <NavBar title="TextUtils" menu1="Home" menu2="About" modeType={mode} toggleMode={changeToggleMode}/>
          <Alert alert={alert} />
          <div className='container my-3'>
            <Routes>
              <Route exact path="/" element={<TextForm heading="Enter your text to analyze" modeType={mode} showAlert={showAlert}/>}/>
              <Route exact path="/about" element={<About modeType={mode}/>}/>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
