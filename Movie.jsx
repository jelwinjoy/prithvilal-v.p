import React from 'react'

const Movie = (props) => {
    var[movie,setmoviename]=useState(props.data)
    console.log("add page props"+props.data)
    const handlechange=(e)=>{
        const{director,value}=e.target 
        setmoviename({...Movie,[director]:value})
        console.log(movie)
    }
    const inputhand=()=>
    }
  return (
    <div>
      
    </div>
  )
}

export default Movie
