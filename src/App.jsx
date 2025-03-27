
import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero/>
      </div>
    </>
  )
}

export default App
