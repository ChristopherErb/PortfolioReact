const Projects = () =>{
    return (
      <div>
        <h1>Projects!</h1>
        <div class="card">
          <img src="/FureverHome.png" alt="FureverHome" class="card-image" />
          <div class="card-description">
            <p>Furever home</p>
            <a href="http://fureverhome.surge.sh/">See it live!</a>
          </div>
        </div>
        <div class="card">
          <img src="/nebulaNav.png" alt="NebulaNav" class="card-image" />
          <div class="card-description">
            <p>Nebula Nav</p>
            <a href="https://nebula-nav.vercel.app/">See it live!</a>
          </div>
        </div>
      </div>
    );
}

export default Projects