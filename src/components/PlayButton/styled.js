import styled from 'styled-components'


export const PlayCont = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;

    border-radius: 50%;
    padding: 8px;

    &:hover{
        border-color: black;
        background-color: aqua;
        transition: background-color .4s ease;
        &>svg{
            fill: black;
            stroke: black;
        }
    }
    >svg{
        position: relative;
        stroke-width: 2px;
        fill: transparent;
        stroke: white;
        left: 1px;
    }
    @media (max-width: 576px){
        transform: scale(1.5);
    }
`;