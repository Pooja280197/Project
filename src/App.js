import React from 'react'
import { Provider } from 'react-redux'
import store from '../src/redux/Store'
import Home from '../src/components/home/Home.jsx'
import Form from './components/form/Form.jsx'
import Header from './components/header/Header.jsx'
import '../src/App.css'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

import Features from './components/features/Features.jsx'
import Alltemplates from './pages/all-templates/Alltemplates.jsx'
import Show_resume from './pages/show_resume/Show_resume.jsx'


function App() {
  return (
    
      <Provider store={store}>
       <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/Form' element={<Form />}></Route>
        {/* <Route exact path='/feature' element={<Features />}></Route> */}
       <Route exact path='/alltemplates' element={<Alltemplates/>}/>
       <Route exact path='/Resume' element={<Show_resume/>}/>
        
      </Routes>
      </Router>

        
       
      </Provider>
      
    
  )
}

export default App
