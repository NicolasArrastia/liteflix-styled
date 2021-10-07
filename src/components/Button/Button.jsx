import React from 'react'


// Styled
import { ButtonCont, BtnImgCont, BtnText } from './styled';
import { PlusIcon } from '../globalStyled';

export default function Button(props) {
    const text = props.text;
    const img = props.img;

    const handleImg = () => {
        if (img===0){
            return <></>
        }else if (img===1){
            return <img src="./img/play.svg" alt="play"/>
        }else
            return <PlusIcon/>
    }

    return (
        <ButtonCont {...props}>
            <BtnImgCont>
                {handleImg()}
            </BtnImgCont>
            <BtnText>{text}</BtnText>
        </ButtonCont>
    )
}
