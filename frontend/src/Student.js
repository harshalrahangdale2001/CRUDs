import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Student() {
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setStudent(res.data))
            .catch(err => console.log(err))
    },[])


    const handleDelete = async (id) => {
        try{
            await axios.delete('http://localhost:8081/product/'+id)
            window.location.reload();
        }catch(err){
            console.log(err);
        }

    }
    return (
        <div className='d-flex vh=100 bg=primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <Link to="/create" className=' btn btn-success'>
                    ADD+
                </Link >
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        {data.Name}
                                    </td>
                                    <td>
                                        {data.Price}
                                    </td>
                                    <td>
                                        {data.Quantity}
                                    </td>
                                    <td>
                                        <Link to={`update/${data.ID}`} className='btn btn-primary'>UPDATE</Link>
                                        <button className='btn btn-danger ms-3' onClick={e => handleDelete(data.ID)}>DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Student