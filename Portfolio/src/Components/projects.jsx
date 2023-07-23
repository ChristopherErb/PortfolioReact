const Projects = () =>{
    return (
      <div  className="textColor">
        <h1>Projects!</h1>
        <div class="card">
        <a href="http://fureverhome.surge.sh/">
          <img src="/FureverHome.png" alt="FureverHome" class="card-image" />
          <div class="card-description">
            <h3>Furever home</h3>
            <p>A front end website that allows users to put in pet requirements and searches
                local shelters for a potential match. 
            </p>
          </div>
          </a>
        </div>
        <div class="card">
        <a href="https://nebula-nav.vercel.app/">
          <img src="/nebulaNav.png" alt="NebulaNav" class="card-image" />
          <div class="card-description">
            <h3>Nebula Nav</h3>
            <p>A full-stack educational website that shows 3d models of our solar system. 
            Each model is interactable and shows information about the planet, and it's major moons.
            </p>
          </div>
          </a>
        </div>
        <div class="card">
        <a href="https://voluble-donut-49330f.netlify.app">
          <img src="/SipSage.png" alt="SipSage" class="card-image" />
          <div class="card-description">
            <h4>Sipsage</h4>
            <p>A front end app that utilizes the Food and Drink APIs to provide
                recipes for coctails as well as main courses. 
            </p>
          </div>
          </a>
        </div>
      </div>
    );

}

export default Projects