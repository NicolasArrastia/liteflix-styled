import React, {useState,useEffect} from 'react'

// Components
import Movie from '../Movie/Movie';

// Styles
import { ArrowIcon, CategoryNow, CategoryList, CategorySelector, ListCont, MovieListCont, CategoryItem, CheckIcon } from './styled';

const MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'

export default function MovieList() {
    const [movieList,setMovieList] = useState([]);
    const [myMovies, setMyMovies] = useState([]);
    const [category, setCategory] = useState(0);
    const categories = ['Populares','Mis películas']
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        fetch(MOVIES)
            .then(res=>res.json())
            .then(data=> {
                setMovieList(data.results.slice(0,4))
            })
            .catch(err=>console.log(err))
            loadLocal()
    }, [])

    const loadLocal = () =>{
        let list = localStorage.getItem('movies')
        if(list === null)
            console.log('es null')
        else
            setMyMovies(JSON.parse(list))
    }

    const toggle = () =>{
        // const selector = document.getElementById('category_list');
        // const arrowIcon = document.getElementById('category_arrow');
        setVisible(!visible)
    }

    const changeCategory = (a) =>{
        setCategory(a);
        loadLocal()
        toggle();
    }

    const handleList = () => {
        if(category===0){
            return <>
                    {movieList.map((data,i)=>{
                        return(
                            <li key={i}>
                                <Movie movieData={data}></Movie>
                            </li>
                        )
                    })}
                </>
        }
        else if (category===1){
            return <>
                    {
                    myMovies.map((data,i)=>{
                        return(
                            <li key={i}>
                                <Movie isLocal={1} movieData={data}></Movie>
                            </li>
                        )
                    })
                    }
                </>
        } else {
            return <p>Error</p>
        }
    }

    return (
        <MovieListCont>
            <CategorySelector onClick={() => toggle()}>
                    ver: 
                    <CategoryNow>{categories[category]}</CategoryNow>
                    <ArrowIcon id="category_arrow"/>
            </CategorySelector>

            <CategoryList visible={visible} id="category_list">
                {/* <div className="category-list__arrow"></div> */}
                {categories.map((data,i)=>{
                    return(
                        <CategoryItem key={i} onClick={(event)=>changeCategory(i)}>
                            {data}
                            {(i===category)?<CheckIcon/>:null}
                        </CategoryItem>
                    )
                })}
            </CategoryList>
            <ListCont>
                {handleList()}
            </ListCont>
        </MovieListCont>
    )
}
