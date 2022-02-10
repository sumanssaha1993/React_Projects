import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export default function App() {

  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setStateProgress] = useState(0)

  const setProgress = (progress) => {
    setStateProgress(progress)
  }

  return (
    <>
      <Router>
        <NavBar/>
        <LoadingBar
          height= {3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey}  key='business' country={'in'} category={'business'} pageSize={12}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key='entertainment' country={'in'} category={'entertainment'} pageSize={12}/>}/>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey}  key='general' country={'in'} category={'general'} pageSize={12}/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey}  key='health' country={'in'} category={'health'} pageSize={12}/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey}  key='science' country={'in'} category={'science'} pageSize={12}/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key='sports' country={'in'} category={'sports'} pageSize={12}/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey}  key='technology' country={'in'} category={'technology'} pageSize={12}/>}/>
        </Routes>
      </Router>
    </>
  )
}