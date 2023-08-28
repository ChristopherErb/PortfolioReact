import { Route, Routes} from 'react-router-dom'
import ContactMe from './contactMe'
import AboutMe from './aboutMe'
import Projects from './projects'
import MyResume from './resume'


const MainComponent = () =>
{

    return (


           
        <div className='routeContainer'>
        <Routes>
        <Route path='/contactMe' element={<ContactMe/>} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<MyResume />} />
        </Routes>
        </div>

    )
}

export default MainComponent