import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form'
import TeamMembers from './Components/TeamMembers'

function App() {
  const [teamList, setTeamList] = useState([{
    name: 'Christian Arneson',
    email: 'carneson39@gmail.com',
    role: 'Front End Developer'
  }])

  const addTeamMember = newMember => {
    setTeamList([...teamList, newMember])
  }
  
  return (
    <div className="App">
      <Form addTeamMember={addTeamMember}/>
      <TeamMembers teamList={teamList}/>
    </div>
  );
}

export default App;
