import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/BookMoviePage.css'


const BookMoviePage = () => {
 
    const [movie,setMovie] = useState({})
    const [name,setName] = useState("")
    const [language,setLanguage] = useState("")
    

const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
        const data = await response.json()
        setMovie(data)
      }
      fetchData()
  },[movie,params.id])

const submit = (event) => {
     event.preventDefault()
    //  axios.post("backed URL" , {
    //     name:name,
    //     language:language
    //  }).then((response) => {
    //     alert("Ticket Booked Successfully")
    //  })
     alert("Ticket Booked Successfully")
}
 

  return (
    <div className='BookPage'>
        <h1 className='title'>{movie.name}</h1>
        <div className='imgDet'>
        <img src={movie.image?.medium}  alt="❌ MOVIE LOGO ❌"  width={250} height={300} />
        <div  className='details'>
        <p>{movie.language}</p>
        <p>Status: {movie.status}</p>
        <p>Average Runtime : {movie.averageRuntime}</p>
        <p>Country : {movie.network?.country.name}</p>
        </div>
         
         <form action="" onSubmit={submit} className='formmovie'>
            <p>BOOK TICKET NOW!!</p>
           <input type="text" value={movie.name} onChange={(e) => setName(e.target.value)}/>
           <input type="text" value={movie.language} onChange={(e) => setLanguage(e.target)} />
           <button className='bookbtn'>BOOK TICKET</button>
         </form>
    
        </div>
       
        <h1>Summary</h1>
        <p  className='summary'>{ movie.summary}</p>
    


    </div>
  )
}

export default BookMoviePage