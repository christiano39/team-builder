import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import TeamMember from './TeamMember'
import MemberForm from './MemberForm'
import './App.css';

const initialMemberList = [
  {
    id: uuid(),
    name: 'Christian Arneson',
    email: 'carneson39@gmail.com',
    role: 'Front End Developer'
  },
]

const initialFormData = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMemberList)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState(initialFormData)

  const onInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = e => {
    const { name, email, role } = formData
    e.preventDefault()

    if (!name || !email || !role) {
      setError('All fields are required')
      return
    }

    const newMember = {...formData, id: uuid()}
    setTeamMembers(members => [newMember, ...members])

    setFormData(initialFormData)
  }

  return (
    <div className='container'>
      <header><h1>Team Members</h1></header>
      <span className='error'>{error}</span>
      <MemberForm 
        formData={formData}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {
        teamMembers.map(member => {
          return <TeamMember key={member.id} details={member} />
        })
      }
    </div>
  )
}

export default App;
