import React, { useState } from 'react'
import "../styles/form-style.css"

const Data = () => {
    const [test, setTest] = useState({
        submitted:false,
        name:"",
        phone:"",
        school:"",
        major:"",
        startedu:"",
        endedu:"",
        company:"",
        title:"",
        tasks:"",
        startexp:"",
        endexp:"",
    })

    console.log(test)

    const handlChange = (e) => {
        const { name, value } = e.target

        setTest(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    const handleSubmit = (e) => {
        console.log('test')
        e.preventDefault();
        setTest(prevData => {
            return {
                ...prevData,
                submitted:true
            }
        });
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
                    type="phone"
                    onChange={handlChange}
                    name="phone"
                    value={test.phone}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    onChange={handlChange}
                    name="email"
                    value={test.email}
                />
            </div>
            <div className="education">
                <h3>Education</h3>
                <label htmlFor='school'>School Name</label>
                    <input
                        onChange={handlChange}
                        name="school"
                        value={test.school}
                    />
                    <label htmlFor='major'>Major</label>
                    <input
                        onChange={handlChange}
                        name="major"
                        value={test.major}
                    />
                    <label htmlFor='startedu'>Date Started</label>
                    <input
                        type="date"
                        onChange={handlChange}
                        name="startedu"
                        value={test.startedu}
                    />
                    <label htmlFor='endedu'>Date Finished</label>
                    <input
                        type="date"
                        onChange={handlChange}
                        name="endedu"
                        value={test.endedu}
                    />
            </div>
            <div className="experience">
                <h3>Work Experience</h3>
                <label htmlFor='company'>Company Name</label>
                <input
                    onChange={handlChange}
                    name="company"
                    value={test.company}
                />
                <label htmlFor='title'>Job title</label>
                <input
                    onChange={handlChange}
                    name="title"
                    value={test.title}
                />
                <label htmlFor='tasks'>Job tasks</label>
                <input
                    onChange={handlChange}
                    name="tasks"
                    value={test.tasks}
                />
                <label htmlFor='startexp'>Date Started</label>
                <input
                    type="date"
                onChange={handlChange}
                name="startexp"
                value={test.startexp}
                />
                <label htmlFor='endexp'>Date Finished</label>
                <input
                    type="date"
                    onChange={handlChange}
                    name="endexp"
                    value={test.endexp}
                />
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
            {test.submitted && <div className='display'>
                <h2>Name: {test.name}</h2>
                <h2>Phone: {test.phone}</h2>
                <h2>Email: {test.email}</h2>
                
            </div>}
        </form>
    )
}

export default Data
