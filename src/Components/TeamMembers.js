import React from 'react'
import TeamMember from './TeamMember'

export default function TeamMembers({teamList}) {
    return (
        <div className='team-members'>
        {
            teamList.map(member => {
                return <TeamMember member={member} key={member.name}/>
            })
        }
        </div>
    )
}