import styled,{css} from 'styled-components'


export const ButtonCont = styled.button`
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;

    margin: 0 15px 15px 0;
    padding: 10px 5%;
    background-color: #242424;
    border: none;
    > :nth-child(1){
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
    :hover{
        background-color: #353535;
    }
    ${({secondary})=>secondary && css`
        border: 1px solid white;
        background-color: #24242480;
        :hover{
            background-color: #35353580;
        }
    `}
`;

export const BtnImgCont = styled.div`
    position: relative;
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;

export const BtnText = styled.span`
    color: white;
`;