import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function Peoplefavinfo() {
    
    const {id} =useParams();
    const [movie, setMovie]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3001/peoplefavorite/${id}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>setMovie(data))
        .catch(err=>console.log(err))
    },[id])

    if(!movie){
        return <p>Loading...</p>
    }

    return (
    <div>
        <Link to='/'><i className="bi bi-chevron-double-left fs-5"></i></Link> 
        <div className="container">
        <div className="d-flex justify-content-center ">
           <img src={movie.imageUrl} alt="picture" style={{height:"500px", width:"500px"}}/>
           <div className="p-5">
               <h1 className="display-1">{movie.title}</h1>
               <p>{movie.description}</p>
                <h5 className="display-6">CAST OF THE FILM ⭐:</h5>
                <h6 className="display-6">{movie.cast.join(", ")}</h6>
                <button className="btn btn-color mt-2 p-3 text-light">WATCH NOW</button>
           </div>
        </div>
        <div className="container p-3">
            <h2 className="mb-4">TRAILER🎬</h2>
            <iframe src={movie.trailerUrl}  allowFullScreen width="100%" height="500"></iframe>
        </div>
       </div>
        

    </div>
  )
}

export default Peoplefavinfo