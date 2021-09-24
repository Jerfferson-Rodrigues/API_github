import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as S from './styled';
import './App.css';


function App() {
  const [user, setUser] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    axios.get("https://api.github.com/users/octocat").then(res=> setUser(res.data))
  }, [])

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }


  const handleButton = () => {
    axios.get(`https://api.github.com/users/${userInput}`).then(res => setUser(res.data))
  
  }

  return (
    <S.Container>
      <div><h1>Dev-Jerff</h1></div>

      <div className="topo">
        <input type="text" placeholder="Search GitHub username...." onChange={handleSearch} />
        <S.Btn onClick={handleButton}>Search</S.Btn>
      </div>
       
      <S.Box>
        <div className="Box">
          <S.Img src={user?.avatar_url} />

          
        </div>

        <div>
          <h2>{user?.name}</h2>
          <p>{user?.bio}</p>
          <p>{user?.location}</p>
          <p>{user?.followers} followers</p>
          <p>{user?.public_repos} repositório</p>
          <p>{user?.following} following</p>
          <button><a href={user?.html_url} target="_blank" rel='noreferrer'>Ver Perfil</a></button>
        </div>
      </S.Box>
      
    </S.Container>
  );
}

export default App;
