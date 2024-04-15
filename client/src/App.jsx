import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import AssignWork from './components/AssignWork'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp />
      <Profile/>
      <AssignWork/>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
