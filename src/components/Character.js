// Write your Character component here
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import Films from "./Films";

const Info = styled.span`
padding: 2px;
margin: 0px 20px;

${props => (props.vis === 'y' ? `display: block;` : `display: none;`)}
`
const Expand = styled.button`
padding: 6px 10px;
margin: 5px;
border: none;
border-radius: 3px;
color: white;
background: #2196f3;

`


export default function Character(props) {
    const {char} = props;
    const [home, setHome] = useState("");
    const [visibility, setVisibility] = useState("n")
    const controller = new AbortController();
    
    const visToggle = () => {
        {visibility === "n" ? setVisibility("y") : setVisibility("n")}
    }

    
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
        <div key={char.idx}>
            <h1>{char.name}</h1>
            <Expand onClick={visToggle}>
                {visibility === "n" ? "+" : "-"}
            </Expand>
            <Info vis={visibility}>
                <h3>Birth year: {char.birth_year}</h3>
                <p>Height: {char.height}</p>
                <p>Weight: {char.mass}</p>
            </Info>

        </div>
    )

}



// Brian made me do it. Hope it works.


