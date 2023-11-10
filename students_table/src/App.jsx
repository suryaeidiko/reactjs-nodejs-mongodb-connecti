import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import AllStudents from './components/AllStudents'
import {BrowserRouter, Route,Routes} from "react-router-dom";
import AddStudents from './components/AddStudents';
import EdtStudent from './components/EdtStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element = {<AllStudents />} />
        <Route path='/addstudents' element = {<AddStudents />} />
        <Route path='/editStudent/:id' element = {<EdtStudent />} />
        <Route path='/viewStudent/:id' element = {<ViewStudent />} />
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
