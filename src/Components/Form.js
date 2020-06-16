import React, { useState } from 'react'

export default function Form({ addTeamMember }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    })

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            role: ''
        })
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        addTeamMember(formData)
        resetForm()
    }
    
    return (
        <form onSubmit={onSubmit}>
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