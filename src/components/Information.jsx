import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { IoLocationOutline } from "react-icons/io5";


export default function Information() {
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
    <>
      <div><h1>Dev-Jerff</h1></div>

      <S.TopoSearch>
        <S.Input type="text" placeholder="Search GitHub username...." onChange={handleSearch} />
        <S.Btn onClick={handleButton}>Search</S.Btn>
      </S.TopoSearch>
       
      <S.Box>
        <div className="Box">
          <S.Img src={user?.avatar_url} />
        </div>

        <S.Infor>
            <S.SubTitle>{user?.name}</S.SubTitle>
                <S.Bio>{user?.bio}</S.Bio>
                    <S.BoxInfo>
                        <div>
                            <S.Span>Repositório</S.Span>
                            <S.Number> {user?.public_repos} </S.Number>  
                        </div>
                      
                        <div>
                            <S.Span>Followers</S.Span>
                            <S.Number>{user?.followers} </S.Number>
                        </div>
                      
                        <div>
                            <S.Span>Following</S.Span>
                            <S.Number>{user?.following} </S.Number>
                        </div>
                    
                    </S.BoxInfo>
                    <p><IoLocationOutline/> {user?.location}</p>
                    <S.Btn><a href={user?.html_url} target="_blank" rel='noreferrer'>Ver Perfil</a></S.Btn>
                </S.Infor>
      </S.Box>
      
    </>
  );
}

