import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const usercontext = createContext();

export default usercontext;

let getproduct = async (setItem)=>{
let response = await fetch ("https://api.escuelajs.co/api/v1/products");
let data = await response.json();
console.log(data);
setItem(data);

}



export const Usercontextprovider=({children})=>{

    useEffect(()=>{
        getproduct(setItem);
    },[])

    const [item , setItem] = useState([]);
    const [user, setUser] = useState(null);
    return(
        <usercontext.Provider value={{user, item, setItem}}>
{children}
</usercontext.Provider>
    )


}