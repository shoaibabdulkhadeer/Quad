import React, { useEffect, useState } from 'react'
import '../styles/BookLists.css'
import { RiVipCrownFill} from 'react-icons/ri';
import { RiShieldUserFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const BookLists = () => {


  const [books, setBooks] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
      const data = await response.json()
      setBooks(data)
    }
    fetchData()


  }, [])



  return (
    <div className='BookLists'>
         
      {books.map((book) => {
        return (
          
          <div className='book' key={book.show.id}>

            <div className='hidehover'>            
                  <div className='stickerpara'> 
                  <p>
                  <RiVipCrownFill size={30} style={{margin:"5px"}}/>  {book.show.name}
                    </p> 
                  </div>
            </div>
            
           <Link className='readmorebtn' to={`/bookPage/${book.show.id}`}> 
                 BOOK NOW
          </Link>

           <img  src={book.show.image?.original } alt="❌ MOVIE LOGO ❌"  />
            <div className='Details'>
              
            <h3 className='booktitle' style={{display:"flex",alignItems:"center",gap:"5px"}}><RiShieldUserFill /> {book.show.name}</h3>
        
            <div className='bookpagesyear'>

              <p>Language - {book.show.language}</p>
              <p> Year - {book.show.premiered}</p>
              <p style={{display:"flex",alignItems:"center"}}>Rating - {book.show.rating?.average > 0 ?  (book.show.rating?.average) : <p>❌</p>}</p>
              
              </div>

            </div>
            
           
            </div>
           

      
      
        )
      })}

    </div>
  )
}

export default BookLists