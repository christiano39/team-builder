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
  const [memberToEdit, setMemberToEdit] = useState(null)

  const edit = member => {
    setMemberToEdit(member)
  }
  
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

  const populateForm = member => {
    const { name, email, role } = member
    setFormData({
      name,
      email,
      role,
    })
  }

  const removeTeamMember = member => {
    const newTeamList = teamMembers.filter(person => person.id !== member.id)
    setTeamMembers([...newTeamList])
  }

  return (
    <div className='container'>
      <header><h1>Team Members</h1></header>
      <span className='error'>{error}</span>
      <MemberForm 
        formData={formData}
        memberToEdit={memberToEdit}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        populateForm={populateForm}
        removeTeamMember={removeTeamMember}
      />

      {
        teamMembers.map(member => {
          return <TeamMember key={member.id} details={member} edit={edit} removeTeamMember={removeTeamMember}/>
        })
      }
    </div>
  )
}

export default App;
