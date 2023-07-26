import axios from 'axios';
import MovieCard from '../../components/movieDB/MovieCard';
import React, { useEffect, useState } from 'react';
import MyVerticallyCenteredModal from '../../components/movieDB/MovieModal';

function MovieDB() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [info, setInfo] = useState('');
    const api_url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=dc87a02c19a2ee8e75320a2718f06ee0&page=';

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = () => {
        axios.get(`${api_url}${page}`).then((response) => {
            setMovies([...movies, ...response.data.results]);
        });
    };

    const modalHide = () => {
        setModalShow((prev) => !prev);
    };

    const modalHandler = (item) => {
        setInfo(item);
        setModalShow(true);
    };
    
    return (
        <div className='text-center'>
            <h1 className='text-primary fw-bolder m-3'>The MovieDB</h1>
            <div className='d-flex justify-content-center flex-wrap'>
                {movies.map((item, index) => (
                    <div onClick={()=>{modalHandler(item)}} key={index}>
                        <MovieCard item={item} />
                    </div>
                ))}
            </div>
            <MyVerticallyCenteredModal show={modalShow} info={info} onHide={modalHide} />
            <button
                className='btn btn-lg btn-primary m-5'
                onClick={() => {
                    setPage(page + 1);
                }}
            >
                Load more...
            </button>
        </div>
    );
}
export default MovieDB;
