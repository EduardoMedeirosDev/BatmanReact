import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Profile from "../../components/profile/profile";

function Detalhes(){
    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        
    }, [])

    return (
        <div> 
            Detalhes
        </div>
    )
}

export default Detalhes;