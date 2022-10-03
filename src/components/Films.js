// Write your Character component here
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Films(props) {
    const [movies, setMovies] = useState(props.films);
    const [showing, setShowing] = useState([])
    const controller = new AbortController();



    const mapLoop = async () => {      
        const promises = movies.map(async prop => {
          const promise = await axios.get(prop)
          return promise
        })
      
        const films = await Promise.all(promises)
        return(films)
    }

    async function promiseRead(callback) {
        const arr = await callback
        await Promise.all(arr).then(res=>res.map(res=>{
            showing.push(res.data.title)
            setShowing([...showing])})
        )
    }

    useEffect(()=>{(mapLoop())
        controller.abort()
    },[])

    useEffect(()=>{promiseRead(mapLoop())
        controller.abort()
    },[])






    return(
        <h3>Films: {showing.join(", ")}</h3>
    )

}
