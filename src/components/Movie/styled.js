import styled, { keyframes } from "styled-components";

const Appear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const MovieContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px auto 20px;
    border-radius: 5px;

    padding-top: 50%;
    box-shadow: 0 0 5px 0px black;

    width: 90%;
    overflow: hidden;
    >*{
        z-index: 1000;
    }
    &:hover{
        /* MovieMain */
        >:nth-child(1){
            align-items: center;
            >:nth-child(1){
                position: absolute;
                left: 5%;
            }
            >:nth-child(2){
                position: relative;
                bottom: 0;
            }
            animation: ${Appear} 1s ease-in;
        }
        /* Movie details */
        >:nth-child(3){
            height: 100%;
            transition: 0.4s ease-out;
        }
    }
`;

export const MovieImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 50;
`;

export const MovieMain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    &>:nth-child(2){
        position: absolute;
        bottom: 5px;
    }
`;

export const MovieDetails = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    background-color: #0008;
    width: 100%;
    height: 0%;
    overflow: hidden;
    transition: 0.2s ease-out;
    &>:nth-child(1),&>:nth-child(2){
        position: absolute;
        bottom: 5px;
        color: white;
        font-size: 1.5rem;
    }
    &>:nth-child(1){
        left: 5px;
        img{
            width: 1.5rem;
            margin-right: 2px;
        }
    }
    &>:nth-child(2){
        right: 5px;
    }
`;

export const MovieTitle = styled.div`
    color: white;
    display: inline-block;
    font-size: 2rem;
    opacity: 1;
    max-width: 60%;
    /* border: 1px solid red; */
    transition: 0.5s ease-out;
    @media (max-width: 576px){
        font-size: 2.5rem;
    }
`;