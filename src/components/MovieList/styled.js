import styled, { keyframes } from 'styled-components'

export const MovieListCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 300px;
    height: 75vh;
    align-self: center;

    @media (max-width:576px){
        min-height: 400px;
        width: 100%;
    }
`;

export const ListCont = styled.ul`
    position: relative;
    width: 250px;
    height: 660px;
    padding-bottom: 40px;
    margin-bottom: 20px;
    /* border: 1px solid green; */
    
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        border: 1px solid #000;
        padding: 2px 0;
        background-color: #404040;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #737272;
        border: 1px solid #000;
    }

    @media (max-width:576px){
        width: 80%;
    }
`;

export const CategorySelector = styled.span`
    cursor: pointer;
    display: flex;
    width: 70%;
    align-items: center;
    font-size: 2rem;
    color: white;
    letter-spacing:0.3rem;
`;

export const CategoryNow = styled.span`
    font-weight: 700;
`;

export const ArrowIcon = styled.div`
    display: inline-block;
    margin-left: auto;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    transform: rotate(225deg) translate(-5%,-5%);
    transition: .2s ease-in;
    &::before,&::after{
        content: '';
        display: block;
        position: absolute;
        background-color: white;
        top: 40%;
        left: 40%;
    }
    &::before{
        width: 50%;
        height: 2px;
    }
    &::after{
        width: 2px;
        height: 50%;
    }
`;
const color = '#242424';
const Appear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
export const CategoryList = styled.ul`
    position: relative;
    display: ${({visible}) => visible?'block':'none'};
    margin: 15px 0;
    padding: 10px;
    width: 70%;
    background-color: ${color};

    z-index: 8000;
    animation: ${Appear} 0.3s ease-out;
    &::before{
        content: '';
        display: block;

        bottom: 100%;
        right: 13px;

        width: 15px;
        height: 15px;
        
        background-color: ${color};
        transform: rotate(45deg) translate(10px,2px);
        z-index: 6000;
        position: absolute;
        @media (max-width: 576px){
            display: none;
        }
    }


`;

export const CategoryItem = styled.li`
    cursor: pointer;
    font-size: 1.6rem;
    margin: 5px 5px 0;
    color: white;
    display: flex;
    justify-content: space-between;
`;

export const CheckIcon = styled.div`
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    /* border: 1px solid grey; */
    transform: rotate(225deg) translateY(-50%);
    &::before, &::after{
        content:'';
        position: absolute;
        top: 25%;
        left: 25%;
        display: block;
        width: 5px;
        height: 5px;
        background-color: white;
    }
    &::before{
        width: 60%;
        height: 2px;
    }
    &::after{
        width: 2px;
        height: 100%;
    }
`;