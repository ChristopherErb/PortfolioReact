const Projects = () =>{
    return (
      <div  className="textColor">
        <h1>Projects!</h1>
        <div class="card">
        <a href="http://fureverhome.surge.sh/">
          <img src="/FureverHome.png" alt="FureverHome" class="card-image" />
          <div class="card-body">
            <h3 className="card-text">Furever home</h3>
            <p>A responsive front-end application using the Petfinder API, 
              facilitating pet adoption by allowing users to search for animals across multiple 
              shelters. Designed an intuitive user interface with JavaScript, 
              HTML, and CSS, streamlining the adoption process and improving usability.
            </p>
          </div>
          </a>
        </div>
        <div class="card">
        <a href="https://nebula-nav.vercel.app/">
          <img src="/nebulaNav.png" alt="NebulaNav" class="card-image" />
          <div class="card-body">
            <h3>Nebula Nav</h3>
            <p>An immersive, educational three-dimensional model of the solar system.
               Leveraged the power of the MERN stack and Three.js to develop a RESTful API and MongoDB database.
                The interactive model showcases detailed information about planets and their major
                 moons, enhancing users' understanding of celestial bodies.
            </p>
          </div>
          </a>
        </div>
        <div class="card">
        <a href="https://voluble-donut-49330f.netlify.app">
          <img src="/SipSage.png" alt="SipSage" class="card-image" />
          <div class="card-body">
            <h4>Sipsage</h4>
            <p>An engaging front-end application that taps into the Food and Drink
               API to offer a diverse collection of cocktail and main course recipes.
            </p>
          </div>
          </a>
        </div>
      </div>
    );

}

export default Projects