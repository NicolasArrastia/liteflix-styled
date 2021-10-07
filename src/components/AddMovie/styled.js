import styled from "styled-components";

export const AddCont = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const AppIconSize = '20px'
export const AppIcon = styled.div`
    width: ${AppIconSize};
    height: ${AppIconSize};
    position: relative;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 50%;
    @media (max-width: 576px){
        border-color: white;
        width: 30px;
        height: 30px;
        margin: 0;
    }
`;

export const PlusIcon = styled.div`
    width: 100%;
    height: 100%;
    transform: ${({scale}) => `scale(${scale})` || 'scale(1)'};
    &::before,&::after{
        content: '';
        display: block;
        position: absolute;
        background-color: #fff;
    }
    &::before{
        width: 100%;
        height: 1px;
        top: 50%;
    }
    &::after{
        width: 1px;
        height: 100%;
        left: 50%;
    }
`;

export const AppText = styled.span`
    color: white;
    font-size: 2rem;
    @media (max-width: 576px){
        display: none;
    }
`;