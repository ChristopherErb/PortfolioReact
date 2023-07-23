import './App.css'
import NavBar from './Components/navBar'
import AboutMe from './Components/aboutMe'
import ContactMe from './Components/contactMe'
import Projects from './Components/projects'
import MyResume from './Components/resume'
import Main from './Components/MainComponent'

function App() {


  return (
<div className='app'>
  

    <main className='appMain'>
  <NavBar />
  <Main />
    </main>
   </div>
  )
}

export default App
