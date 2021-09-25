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
    width: 400px;

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
    width: 600px;
    height: 320px;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    background: #1f2a48;
    border-radius: 15px
`

export const Img = styled.img`
    margin: 2rem;
    margin-bottom: 10rem;
    width: 100px;
    heigth: 100px;
    border-radius: 50%;
`

export const Infor = styled.div`
    font-family: sans-serif;
`

export const SubTitle = styled.h2`
    letter-spacing: .1rem;
    color: #fff;
    margin-bottom: .8rem;
`
export const Bio = styled.p`
    color: #bfbfbf;
    width: 300px;
    font-size: .7rem;
    margin-top: 0;
    margin-bottom: 20px;
`
export const BoxInfo = styled.div`
    width: 390px;
    height: 60px;
    padding-top: .5rem;
    border-radius: 15px;
    background: #141c2f;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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