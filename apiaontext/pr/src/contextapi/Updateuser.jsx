import React, { useContext, useState } from 'react'
import userContext from './contextapi'

function Updateuser() {
const {name, setName} = useContext(userContext);

    const changename=()=>{
    setName ("Atuulya");
    }

    

  return (
    <>
    <button onClick={changename}> Update user </button>
    </>
  )
}

export default Updateuser