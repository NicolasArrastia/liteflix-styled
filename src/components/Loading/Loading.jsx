import React, {useEffect, useState} from 'react'

// Styles
import {LoadCont,LoadBar, LoadProgress, LoadingText, StatusText, StatusCont} from './styled'

export default function Loading(props) {
    const [counter, setCounter] = useState (0);
    const [finished,setFinished] = useState (0);
    const isErr = props.isError;
    
    useEffect(() => {
        const timeout = setTimeout(()=>{
            setCounter( counter + 1 );
        },5)
        if(counter>99){
            setFinished(1)
            clearTimeout(timeout)
        }
    },[counter])

    return (
        <LoadCont>
            <LoadingText>Cargando %{counter}</LoadingText>
            <LoadBar>
                <LoadProgress style={{width:`${counter}%`}}/>
            </LoadBar>
            <StatusCont>
                {(finished)?
                <>{(isErr)?<StatusText error >Reintentar</StatusText>:<StatusText success >¡Listo!</StatusText>}</>
                :
                <StatusText>cancelar</StatusText>
                }
            </StatusCont>
        </LoadCont>
    )
}
