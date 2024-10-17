import React, { useContext } from 'react'
import userContext from './contextapi'

function Form() {
    const {name, setName, product} = useContext(userContext)
  return (
    
    <div>
        {product.slice(0,5).map((value, index)=>{
            return (
                <div key={index}>
                {value.id}
                <br />
                {value.title}
                <br />
                <img src={value.images} alt="" />
                </div>
            )
        })}
        my name is {name};
    </div>
  )
}

export default Form