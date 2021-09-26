import styled from "styled-components";

export const TopoSearch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 15px;
    margin-bottom: 15px;
    background: #1f2a48;
    border-radius: 15px;
`

export const Input = styled.input`
    border: none;
    background: none;
    outline: none;
    padding: 0;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
    width: 100%;

    &::placeholder{
        color: #fff;
    }
`

export const Btn = styled.button`
    background: #1a75ff;
    color: #fff;
    width: 90px;
    height: 45px;
    border-radius: 15px;
    transition: 0.5s;
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: bold;

    &:hover{
        background: #2a78cb;
    }
`

export const Box = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    background: #1f2a48;
    border-radius: 15px;

   @media(max-width: 500px) {
    width: 100%;
    display:flex;
    flex-direction: column;
    position: relative;
    text-align: center;
  }   
    
`

export const Img = styled.img`
    margin: 2rem;
    margin-bottom: 10rem;
    width: 100px;
    heigth: 100px;
    border-radius: 50%;

    @media(max-width: 500px) {
        margin-bottom: 0;
  } 
`

export const Infor = styled.div`
    font-family: sans-serif;

     @media(max-width: 500px) {
         padding: 20px;
        width: 80%;
        align-items:center;
  } 
`

export const SubTitle = styled.h2`
    letter-spacing: .1rem;
    color: #fff;
    margin-bottom: .8rem;
`
export const Bio = styled.p`
    color: #bfbfbf;
    width: 80%;
    font-size: .7rem;
    margin-top: 0;
    margin-bottom: 20px;

    @media(max-width: 500px) {
        width:100%;
  } 
`
export const BoxInfo = styled.div`
    width: 85%;
    height: 60px;
    padding-top: .5rem;
    border-radius: 15px;
    background: #141c2f;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 500px) {
        width: 100%;
  } 
`
export const Span = styled.span`
    font-size: 10px;
    color: #fff;
`
export const Number = styled.p`
    color: #fff;
    font-size: 18px;
    margin-top: .1rem;
    font-weight: bold;
`