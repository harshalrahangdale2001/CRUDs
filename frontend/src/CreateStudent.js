import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateStudent() {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [quantity,setQuantity]=useState('')
    const navigate=useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name,price,quantity})
        .then(res=>{
            console.log(res)
            navigate('/')
        }).catch(err=>console.log(err))
    }
    return (
        <div className='d-flex vh=100 bg=primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <form onSubmit={handleSubmit}>
                    <h2>ADD PRODUCT</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='enter name' className='form-control'
                        onChange={e=>setName(e.target.value)}>

                        </input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Price</label>
                        <input type='text' placeholder='enter price' className='form-control'
                        onChange={e=>setPrice(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Quantity</label>
                        <input type='text' placeholder='enter quantity' className='form-control'
                        onChange={e=>setQuantity(e.target.value)}></input>
                    </div>
                    <button className='btn btn-success'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent