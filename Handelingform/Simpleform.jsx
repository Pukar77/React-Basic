import React, { useState } from 'react'

function Form1() {
    const [data , setData] = useState({
        name: "",
        email: ""
    })

const show =(e)=>{
   
    let name = e.target.name;
    let adata = e.target.value;

    setData((prev1)=>({
...prev1,
[name]: adata
    }));


}

const ui=(e)=>{
    e.preventDefault();
    console.log(data);
}
  return (
    <>
    
    <form onSubmit={ui}>
        <input type='text' placeholder='Enter your name here' name='name' value={data.username} onChange={show}></input>
        <br/>
        <input type='email' placeholder='Enter your email here' name='email' value={data.useremail} onChange={show}></input>
        <button type='submit'>Submit</button>
    </form>
    
    
    </>
  )
}

export default Form1
