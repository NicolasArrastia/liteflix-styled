import styled, { keyframes } from "styled-components";

const ProfAnim = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const ProfSize = '35px';
export const ProfileCont = styled.div`
    cursor: pointer;
    width: ${ProfSize};
    height: ${ProfSize};
    border-radius: 50%;
    overflow: hidden;
    animation: ${ProfAnim} 2s;
`;

export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;