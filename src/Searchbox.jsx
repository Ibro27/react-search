import React, {useState, useEffect} from 'react'
import  './Searchbox.css'

const Searchbox = () => {
    const [search, setSearch] = useState('')
    const [data,   setData] = useState([])

    useEffect(() => {
        fetch("'https://fakestoreapi.com/products'")
          .then((response) => response.json())
          .then((data) => {
            setData(data)
          })
      }, [])

      
       
    

  return (
    <div>
    <div>
    <h1>Search box</h1>
<input type='text' name='src' placeholder='search products here' value={search} onChange={(e) => {setSearch(e.target.value)}} />

    </div>
    </div>
    { data.filter((row)=> {
            if(search==""){
                return row;
            }
            if           
                 (row.title.toLowerCase().includes(search.toLowerCase()))
                 {
                    
                    return row;
                }
            }
        })
    
        .map((row, i)=> {
            return (
                <div className='card' key={i}>
                <div className='image' >
                <img src={row.image} alt={row.image} />
                </div>
                <div className='title'>
                <h2>{row.title.substring(0, 20)}</h2>
                <p>${row.price}</p>
    
                </div>
                </div>
            )
        })
    }
   
  )
}

export default Searchbox
