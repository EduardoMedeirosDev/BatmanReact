import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";

function Profile(){
    const {login} = useContext(userContext);
    const {data, setData} = useContext(userContext)
    const {produtos, produto} = useContext(userContext)
    


    return (
        <div>
            {login ?`Usuário: ${data.name} - Idade: ${data.age}`  :  'Faça o seu login para ter acesso às informações'}
        </div>
        
    )
}

export default Profile;