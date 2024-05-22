import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

// Components
import Loading from '../Loading/Loading';
import Liteflix from '../Liteflix/Liteflix'
import Profile from '../Profile/Profile'

// Styles
import { CrossIcon, DropzoneCont, Header, UploadCont, Window, WinBtn, WinInput, WinTitle, CloseWinIcon } from './styled'

export default function MyDropzone(props) {
    const [image, setImage] = useState('');
    const [loadingBar, setLoading] = useState(false);
    const [isError, setIsError] = useState(0);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            setLoading(false)
            setLoading(true);
            const reader = new FileReader()
            reader.onabort = () => {
                setIsError(1)
            }
            reader.onerror = () => {
                setIsError(1)
            }
            reader.onload = () => {
                /* covert image to base 64 so we can save it on localStorage */
                const base64Image = reader.result
                setImage(base64Image)
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const sendMovie = () => {
        const movieTitle = document.getElementById('movie_title').value;
        let movieList;
        let data = localStorage.getItem('movies');

        if (isError) {
            alert('hubo un error en la carga del archivo')
        } else {
            if (image === '' || movieTitle === '') {
                alert('debe ingresar título e imagen')
            }
            else {
                let movie = {
                    'title': movieTitle,
                    'image': image
                }
                data === null ? movieList = [] : movieList = JSON.parse(data);
                movieList.push(movie);
                localStorage.setItem('movies', JSON.stringify(movieList))
                alert('pelicula subida con éxito')
                closeWindow()
            }
        }
    }

    function closeWindow() {
        const el = document.getElementById('upload_movie')
        el.style.visibility = 'hidden'
        const main = document.getElementById('main')
        main.style.overflow = 'visible'

        // Because the user is closing the window and don't want to save a movie
        setImage('');
        setLoading(0)
    }

    return (
        <UploadCont id="upload_movie">
            <Window>
                <Header>
                    <Liteflix></Liteflix>
                    <Profile></Profile>
                </Header>
                <CloseWinIcon onClick={() => closeWindow()}>
                    <CrossIcon scale="0.7" />
                </CloseWinIcon>
                <WinTitle>Agregar película</WinTitle>
                {
                    (loadingBar) ?
                        <Loading isError={isError} />
                        :
                        <DropzoneCont id="dropzone" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img src="./img/clip.svg" alt="clip" />
                            <p><span style={{ fontWeight: '700' }}>Agrega un archivo</span> o arrastralo y soltalo aquí</p>
                        </DropzoneCont>
                }
                <WinInput id="movie_title" type="text" placeholder="título"></WinInput>
                <WinBtn onClick={sendMovie}>Subir película</WinBtn>
                <WinBtn onlyPhone onClick={() => closeWindow()}>Salir</WinBtn>
            </Window>
        </UploadCont>
    )
}