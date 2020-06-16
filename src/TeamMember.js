import React from 'react'

export default function TeamMember(props) {
    const { details } = props

    if (!details) {
        return <h3>Fetching Team Member...</h3>
    }

    return (
        <div className='team-member-container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}