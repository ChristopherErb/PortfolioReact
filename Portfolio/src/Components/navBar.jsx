import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
    <Link to="/"><span>Home</span></Link><br/>
    <Link to="/resume"><span>Resume</span></Link><br/>
    <Link to="/projects"><span>Projects</span></Link><br/>
    <Link to="/aboutMe"><span>About Me</span></Link><br/>
    <Link to="contactMe"><span>Contact</span></Link><br/>
    </div>
  )
}

export default NavBar
