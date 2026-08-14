import React, { useState } from 'react'

const EmployeeComponent = () => {

    const[firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')



    function handleFirstName



    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee First Name</label>
                               <input
                               type='text'
                               placeholder='Enter Employee First Name'
                               name='firstName'
                               value={firstName}
                               className='form-control'
                               onChange={handleFirstName}
                               >
                               </input>

                            </div>
                        </form>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default EmployeeComponent