import styled from 'styled-components'

export const PlusIcon = styled.div`
    width: 100%;
    height: 100%;
    transform: ${({scale}) => `scale(${scale})` || 'scale(1)'};
    transform: scale(${({scale}) => `${scale}` || '1'});
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