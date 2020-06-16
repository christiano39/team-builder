import React, { useState } from 'react'

export default function Form(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    })

    const onChange = e => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form>
            <label>
                Name: 
                <input name='name' type='text' value={formData.name} onChange={onChange} />
            </label>
            <br />
            <label>
                Email:
                <input name='email' type='text' value={formData.email} onChange={onChange} />
            </label>
            <br />
            <label>
                Role:
                <input name='role' type='text' value={formData.role} onChange={onChange} />
            </label>
            <br />
            <button>Add Team Member</button>
        </form>
    )
}