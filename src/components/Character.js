// Write your Character component here
import React from "react";


export default function Character(props) {
    const {char} = props;
    // const [home, setHome] = useState("");
    // const [visibility, setVisibility] = useState("n")
    // const controller = new AbortController();
    
    // const visToggle = () => {
    //     {visibility === "n" ? setVisibility("y") : setVisibility("n")}
    // }

    
    // const getHome = (homeQuery)=> {
    //     axios.get(homeQuery)
    //         .then(res=>{setHome(res.data.name) })
    //         .catch(res=> console.log(`Error!! ${res}`))
    // }
    // useEffect(()=>{getHome(char.homeworld)
    //     controller.abort()
    // },[visibility])
    // <h3>Homeworld: {home}</h3> 
    // <Films films={char.films} /> 
    
    return(
        <div>
            {char.name}
        </div>
    )

}



// Brian made me do it. Hope it works.
