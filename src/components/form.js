import React, { useState } from 'react'
import "../styles/form-style.css"

const Data = () => {
    const [test, setTest] = useState({
        name:"",
        phone:"",
        email:""
    })

    const handlChange = (e) => {
        const { name, value } = e.target

        setTest(prevTest => {
            return {
                ...prevTest,
                [name]:value
            }
        })
    }

    return (
        <form>
            <div className="general">
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handlChange}
                    name="name"
                    value={test.name}
                />
                <label htmlFor='phone'>Phone Number</label>
                <input
                    onChange={handlChange}
                    name="phone"
                    value={test.phone}
                />
                <label htmlFor='email'>Email</label>
                <input
                    onChange={handlChange}
                    name="email"
                    value={test.email}
                />
            </div>
            
        </form>
    )
}

export default Data
