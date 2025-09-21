import { useParams , Link } from "react-router-dom"
import {useState, useEffect} from 'react'


function Trendmovinfo() {

  const {id} =useParams();
  
  const [movies, setMovies]=useState(null);

  useEffect(()=>{
    fetch(`http://localhost:3001/trendingnow/${id}`)
    .then(res=>{
        return res.json();
    })
    .then(data=>setMovies(data))
    .catch(err=>console.log(err))

  },[id])


  if(!movies){
    return <p>Wait a Minute...</p>
  }
  return (
    <div>
        <Link to='/'><i className="bi bi-chevron-double-left fs-5"></i></Link> 
        <div className="container">
        <div className="d-flex justify-content-center ">
           <img src={movies.imageUrl} alt="picture" style={{height:"500px", width:"500px"}}/>
           <div className="p-5">
               <h1 className="display-1">{movies.title}</h1>
               <p>{movies.description}</p>
                <h5 className="display-6">CAST OF THE FILM ⭐:</h5>
                <h6 className="display-6">{movies.cast.join(", ")}</h6>
                <button className="btn btn-color mt-2 p-3 text-light">WATCH NOW</button>
           </div>
        </div>
        <div className="container p-3">
            <h2 className="mb-4">TRAILER🎬</h2>
            <iframe src={movies.trailerUrl}  allowFullScreen width="100%" height="500"></iframe>
        </div>
       </div>
    </div>
    
    
  )
}

export default Trendmovinfo