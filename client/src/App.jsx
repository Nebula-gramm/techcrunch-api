
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Header from './components/myCompo/header'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Footer from './components/myCompo/Footer'

function App() {


  return (
    <>
      <Header/>
      <main className='pt-2'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/docs' element={<Docs/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
