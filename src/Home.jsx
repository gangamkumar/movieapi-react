import React, { useEffect, useState } from 'react'
import './home.css'

const Home = () => {

const [data, setData] = useState([]);

useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    try {
        let apiResponse = await fetch('https://api.tvmaze.com/shows')
        apiResponse = await apiResponse.json()
        setData(apiResponse)

    } catch (error) {
        console.log(error)
        alert("API Call Failed")
    }          
  }

  console.log(data)

  return (
    <div>
    
      <nav className="navbar">
        <h2>ShowFlix</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#shows">Shows</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p>TV SHOW COLLECTION</p>

        <h1>Discover Amazing Shows</h1>

        <span>
          Explore popular television shows and discover your next
          favorite series.
        </span>

        <a href="#shows" className="btn">
          Explore Shows
        </a>
      </section>

    
      <section className="shows-section" id="shows">
        <div className="heading">
          <p>OUR COLLECTION</p>
          <h2>Featured Shows</h2>
          <span>
            Browse television shows powered by the TVMaze API.
          </span>
        </div>

        <div className="show-container">
          {data.map((show) => (
            <div className="show-card" key={show.id}>
              
              <div className="image-box">
                <img
                  src={
                    show.image
                      ? show.image.medium
                      : "https://via.placeholder.com/210x295"
                  }
                  alt={show.name}
                />
              </div>

              <div className="show-content">
                <h3>{show.name}</h3>

                <p className="genre">
                  {show.genres.length > 0
                    ? show.genres.join(" • ")
                    : "Genre unavailable"}
                </p>

                <p>
                  <strong>Language:</strong>{" "}
                  {show.language || "N/A"}
                </p>

                <p>
                  <strong>Rating:</strong>{" "}
                  ⭐ {show.rating.average || "N/A"}
                </p>

                <p>
                  <strong>Premiered:</strong>{" "}
                  {show.premiered || "N/A"}
                </p>

                <div
                  className="summary"
                  dangerouslySetInnerHTML={{
                    __html: show.summary || "No description available.",
                  }}
                ></div>

                <a
                  href={show.url}
                  target="_blank"
                  rel="noreferrer"
                  className="details-btn"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section className="about" id="about">
        <p>ABOUT</p>

        <h2>Explore the World of Television</h2>

        <span>
          ShowFlix uses the TVMaze API to fetch television show
          information and present it in a clean and user-friendly
          interface.
        </span>
      </section>

      
      <footer>
        <h3>ShowFlix</h3>
        <p>Discover. Explore. Watch.</p>
        <small>© 2026 ShowFlix</small>
      </footer>
    </div>
  )
}

export default Home