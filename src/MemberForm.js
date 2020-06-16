import React from 'react'

export default function MemberForm(props) {
    const { formData, onInputChange, onSubmit } = props

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <label>Name:&nbsp;
                <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Email:&nbsp;
                <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Role:&nbsp;
                <select
                    name='role'
                    onChange={onInputChange}
                    value={formData.role}
                >
                    <option value=''>-- Select A Role --</option>
                    <option value='Front End Developer'>Front End</option>
                    <option value='Back End Developer'>Back End</option>
                    <option vlaue='Project Lead'>Project Lead</option>
                </select>
            </label>
            <br />
            <button>Add Team Member</button>
        </form>
    )
}