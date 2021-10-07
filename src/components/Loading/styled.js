import styled, {css} from 'styled-components'

export const LoadCont = styled.div`
    /* width: 250px; */
    /* height: 2px; */
    /* background-color: #aaa; */
    width: 90%;
    display: flex;
    width: clamp(250px,100%,500px);
    flex-direction: column;
    margin: 0 auto 20px;
`;

export const LoadBar = styled.div`
    position: relative;
    width: 100%;
    height: 4px;
    background-color: grey;
    margin: 15px 0;
`;

export const LoadProgress = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 12px;
    background-color: aqua;
`;

export const LoadingText = styled.span`
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
    color: white;
`;

export const StatusCont = styled.span`
    align-self: flex-end;
`;

export const StatusText = styled.span`
    color: white;
    font-size: 1.6rem;
    align-self: flex-end;
    letter-spacing: 0.3rem;
    ${({success})=> success && css`
        color: aqua;
    `}
    ${({error}) => error && css`
        color: red;
    `}
`;