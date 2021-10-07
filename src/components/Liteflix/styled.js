import styled, {keyframes} from 'styled-components'

export const LiteflixStyled = styled.a`
    color: aqua;
    text-decoration: none;
    font-size: 3.8rem;
`;

const LiteflixAnim = (y) => keyframes`
    0%{
        opacity:0;
        transform: translateY(${y});
    }
    100%{
        opacity:1;
        transform: translateY(0);
    }
`;

const yMovement = '15px'
const timeAnim = '1s'

export const Lite = styled.span`
    font-weight: 700;
    display: inline-block;
    animation: ${props => LiteflixAnim(yMovement)} ${timeAnim} ease-out;
`;
export const Flix = styled.span`
    font-weight: 400;
    display: inline-block;
    animation: ${props => LiteflixAnim(`-${yMovement}`)} ${timeAnim} ease-out;
`;

