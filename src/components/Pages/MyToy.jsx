import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToy = () => {
    const{user}=useContext(AuthContext);
    const[mytoy,setMyToy]=useState([])
    const url=`http://localhost:5000/myToys?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json()).then(data=>setMyToy(data))
    },[url])
    
    return (
        <div>
           <h1>this is my toy{mytoy.length}</h1> 
        </div>
    );
};

export default MyToy;