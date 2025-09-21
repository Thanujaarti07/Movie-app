import {useState,useEffect} from 'react'

function Cerousel() {
     
  const [movies,setMovies]=useState([]);
  
  useEffect(()=>{
     fetch('http://localhost:3001/moviecerosel')
     .then(res=>{return res.json()})
     .then(data=>setMovies(data))
     .catch(err=>console.log(err))
  },[movies])

  if(!movies.length===0){
    return null;
  }

  return (
    <div className=' container d-flex justify-content-center'>
      <div id="movieCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{width:"75%"}}>
      <div className='carousel-inner'>
        {movies.map((movie,index)=>(
           <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={movie.id}>
                <img src={movie.imageUrl} className='d-block w-100' alt={movie.title} style={{ height: "600px", objectFit: "cover" }}/>
                <div className='carousel-caption custom-cap ms-auto'>
                  <h4>{movie.title}</h4>
                  <p>{movie.description}</p>
                </div>
           </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>


    </div>
    </div>
    
  )
}

export default Cerousel