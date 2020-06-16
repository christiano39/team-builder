import React from 'react'

export default function TeamMember(props) {
    const { details, edit, removeTeamMember } = props

    if (!details) {
        return <h3>Fetching Team Member...</h3>
    }

    return (
        <div className='team-member-container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
            <button onClick={() => edit(details)}>Edit</button>&nbsp;
            <button onClick={() => removeTeamMember(details)}>Remove</button>
        </div>
    )
}