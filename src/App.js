import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Emre Öztürk",
      email: "emre@emicrosoft.com",
      role: "Full Stack Developer",
    },
    {
      name: "Yasemin Öztürk",
      email: "yase@microsoft.com",
      role: "Frontend Developer",
    },
    {
      name: "Ömer",
      email: "omer@microsoft.com",
      role: "Backend Developer",
    },
  ]);

  const addTeamMember = (member) => {
    if (duzenlenecekUye !== null) {
      // Eğer düzenlenen bir üye varsa, güncelle
      setTeamMembers(
        teamMembers.map((m) => {
          if (m === duzenlenecekUye) {
            return member;
          } else {
            return m;
          }
        })
      );
      setDuzenlenecekUye(null);
    } else {
      // Aksi takdirde yeni bir üye ekle
      setTeamMembers([...teamMembers, member]);
    }
  };

  const [duzenlenecekUye, setDuzenlenecekUye] = useState(null);

  const duzenle = (member) => {
    setDuzenlenecekUye(member);
  };

  return (
    <div className="container">
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.email} - {member.role}
            <button onClick={() => duzenle(member)}>Edit</button>
          </li>
        ))}
      </ul>
      <Form addTeamMember={addTeamMember} duzenlenecekUye={duzenlenecekUye} />
    </div>
  );
}

export default App;