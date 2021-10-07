import styled, {css} from "styled-components";
import { ButtonCont } from "../Button/styled";
import { PlusIcon } from "../globalStyled"

export const UploadCont = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20000;
    width: 100%;
    height: 100%;
    display: flex;


    visibility: ${({visible}) => visible ? 'visible' : 'hidden' };


    justify-content: center;
    align-items: center;
    background-color: #000a;
`;

export const Window = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    width: clamp(400px, 75%, 800%);
    padding: 30px 5%;
    background-color: #242424;
    @media (max-width:576px){
        width: 100%;
        height: 100%;
    }
`;

export const Header = styled.header`
    position: relative;
    display: none;
    justify-content: center;
    align-items: center;
    >:nth-child(2){
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
    @media (max-width: 576px){
        display: flex;
    }
`;

export const WinTitle = styled.p`
    color: aqua;
    letter-spacing: 0.3rem;
    margin: 10px 0 30px;
    font-weight: 700;
    font-size: 2rem;
    align-self: center;
`;

export const DropzoneCont = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: white;
    padding: 40px 5%;
    border: 1px dashed white;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;

    margin: 0 auto 40px;

    /* background-color: #f003; */
    width: clamp(250px,100%,500px);
    >img{
        margin-right: 5px;
    }
`;

export const WinInput = styled.input`
    background-color: transparent;
    color: white;
    font-size: 2rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 40px;

    width: clamp(100px,50%,800px);
    padding: 0 15px 5px;
    margin: 0 auto;

    &:focus{
        outline: none;
    }
`;

export const WinBtn = styled(ButtonCont)`
    background-color: #888;
    margin: 20px auto 0;
    &:hover{
        background-color: #aaa;
    }

    ${({onlyPhone}) => onlyPhone && css`
        @media (min-width:576px){
            display: none;
        }
    `}
`;

export const CloseWinIcon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 5px;
    transition: 0.2s ease;
    &:hover{
        background-color: #f008;
        transition: 0.2s ease;
    }
    /* background-color: red; */
`;

export const CrossIcon = styled(PlusIcon)`
    transform: rotate(45deg);
    @media (max-width: 576px){
        display: none;
    }
`;