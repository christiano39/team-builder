import React from 'react'

export default function TeamMember({member}) {
    return (
        <div className="team-member">
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
        </div>
    )
}