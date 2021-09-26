import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: 500px) {
        position: initial;
        top: initial;
        left: initial;
        transform: none;
        max-width: 99%;
        margin: 5%;
    }
`
