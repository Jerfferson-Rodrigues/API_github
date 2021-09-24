import styled from "styled-components";



export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const Box = styled.div`
    width: 600px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f2a48;
    border-radius: 15px
`

export const Img = styled.img`
    width: 100px;
    heigth: 100px;
    border-radius: 50%;
`
export const Btn = styled.button`
    background: #418ad8;
    color: #fff;
    width: 90px;
    height: 40px;
    border-radius: 15px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: bold;

    &:hover{
        background: #2a78cb;
    }
`