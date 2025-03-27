
import './App.css'
import FeatureSection from './Components/FeatureSection'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Price from './Components/Price'
import Workflow from './Components/Workflow'

function App() {

  return (
    <>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero/>
        <FeatureSection/>
        <Workflow/>
        <Price/>
      </div>
    </>
  )
}

export default App
