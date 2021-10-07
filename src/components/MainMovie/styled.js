import styled from "styled-components";

export const MainCont = styled.div`
    padding-bottom: 20vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 576px){
        align-items: center;
        padding-bottom: 50px;
    }
`;

export const OriginalText = styled.div`
    font-size: 2.5rem;
    color: white;
    >span{
        font-weight: 700;
    }
`;

export const MovieTitle = styled.div`
    font-size: 8rem;
    color: aqua;
    font-weight: 700;
    letter-spacing: 0.7rem;
    text-align: center;
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: auto;
    @media (max-width: 576px){
        justify-content: center;
    }
`;