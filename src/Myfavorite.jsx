import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Myfavorite() {
     
   const [favmovie, setFavmovie]=useState([]);

   useEffect(()=>{
        axios.get('http://localhost:3001/myfavorites')
        .then(res=>setFavmovie(res.data))
        .catch(err=>console.log(err))
   },[])


   if(favmovie.length===0){
    return <p className='display-6 ms-4'>NO FAVORITES YET 🙃❤️</p>
   }

    return (
    <div className="container">
        <h3 className='display-6'>MY FAVORITES ❤️</h3>
        <div className='row g-4 mt-3'>
          {favmovie.map((movie)=>(
          <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={movie.id}>
            <div className='card h-100 bg-dark text-white' style={{width:"300px"}}>
            <img src={movie.imageUrl} alt={movie.title}  className='card-img-top' style={{ height: "450px", objectFit: "cover" }}/>
            <div className='card-body'>
              <h5 className='card-title'>{movie.title}</h5>
              <p className='card-text'>{movie.description}</p>
              <Link className='btn btn-color text-white text-decoration-none' to={`/${movie.source}/${movie.id}`}>Watch Now</Link>
            </div>
            </div>
          </div>
           ))}

        </div>
       
    </div>
  )
}

export default Myfavorite