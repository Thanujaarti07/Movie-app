import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Peoplefav() {
 
    const[movies, setMovies]=useState([]);
    const [favorites,setFavorites]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/peoplefavorite')
        .then(res=>{
            return res.json()
        })
        .then(data=>setMovies(data))
        .catch(err=>console.log(err))

    },[movies])


    const handlefav=async(movie)=>{
      axios.post('http://localhost:3001/myfavorites',{...movie, source:'peoplefav'})
      .then(()=>{
        alert("Added to Favorite list");
        setFavorites(prev =>
          prev.includes(movie.id)
            ? prev.filter(id => id !== movie.id)
            : [...prev, movie.id] 
        );

      })
      .catch(err=>console.log(err))

    }

    if(movies.length===0){
        return null;
    }
   
    return (
    <div>
        <div className='container'>
        <h3 >PEOPLE FAVORITE 💖✨</h3>

        <div className='row g-4 mt-3'>
          {movies.map((movie)=>(
          <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={movie.id}>
            <div className='card h-100 bg-dark text-white' style={{width:"300px"}}>
            <img src={movie.imageUrl} alt={movie.title}  className='card-img-top' style={{ height: "450px", objectFit: "cover" }}/>
            <div className='card-body'>
              <h5 className='card-title'>{movie.title}</h5>
              <p className='card-text'>{movie.description}</p>
              <Link className='btn btn-color text-white text-decoration-none' to={`/peoplefav/${movie.id}`}>Watch Now</Link>
              <i className={`bi ${favorites.includes(movie.id)? 'bi-suit-heart-fill': 'bi-suit-heart'} fs-4 likes`} 
              onClick={()=>{handlefav(movie)}}  
              style={{color: favorites.includes(movie.id) ? 'darkviolet' : 'white',cursor: 'pointer'}} ></i>
            </div>

            </div>
          </div>
           ))}

        </div>
       
        
      </div>

    </div>
  )
}

export default Peoplefav