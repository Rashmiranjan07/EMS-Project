import React, { useState } from 'react'

const EmployeeComponent = () => {

    const[firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')



    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee First Name</label>

                            </div>
                        </form>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default EmployeeComponent