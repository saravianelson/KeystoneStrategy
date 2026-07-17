import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/home'
import { AboutMe } from './Pages/About/about'
import { Contact } from './shared/Contact/contact'
import { Footer } from './shared/Footer/footer'
import { Portfolio } from './Pages/Portfolio/portfolio'
import { Skills } from './Pages/Skills/skills'
import Bank  from './Pages/Portfolio/Proyects/Data/Churn/Bank/bank'
import Page404 from './Pages/404'

function App() {
  
  return (
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/' element={<AboutMe/>}></Route>
      <Route path='/' element={<Contact/>}></Route>
      <Route path='/' element={<Footer/>}></Route>
      <Route path='/' element={<Portfolio/>}></Route>
      <Route path='/bankPage' element={<Bank/>}></Route>
      <Route path='/' element={<Skills/>}></Route>
      <Route path="/*" element={<Page404 />}></Route>

    </Routes>
  )
}

export default App
