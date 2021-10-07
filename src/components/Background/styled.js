import styled from "styled-components";

export const BackgroundCont = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    /* bottom: 0; */
    width: 100%;
    height: 100%;
    box-shadow: inset 0 100px 60px -40px black;
`;

export const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: -1000;
    /* opacity: 0.5; */
`;

export const BackgroundShadow = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    /* box-shadow: none; */
    @media (max-width: 576px){
        box-shadow: 0 0 30px 50px #242424;
    }
`;