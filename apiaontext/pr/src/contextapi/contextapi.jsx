import React, { createContext, useEffect, useState } from "react";
 const userContext = createContext();
 export default userContext;

 let getproduct = async (setProduct)=>{
    let response = await fetch ("https://api.escuelajs.co/api/v1/products");
    let getdata = await response.json();
    console.log(getdata);
    setProduct(getdata);
}
export const Contextprovider =({children})=>{
    useEffect(()=>{
        getproduct(setProduct);
    },[])
    const [product,setProduct] = useState([]); 

    const [name, setName] = useState("Pukar Hero")
    return(
        <userContext.Provider value={{name ,setName, product}} >
{children}
        </userContext.Provider>
    )
}

