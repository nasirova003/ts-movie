import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/UseAppSelector";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {fetchingNowPlaying} from "../store/Reducer/ActionCreators";
import {NavLink} from "react-router-dom";

const NowPlaying = () => {
    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    const {mode,value} = useAppSelector(state => state.darkModeSlice)
    useEffect(() => {
        dispatch(fetchingNowPlaying)
    })
    return (
        <div id="popular" style={{
            background: mode ? "gray" : ""
        }}>
            <div className="container">
            <div className="popular">
                {
                    movie.map(el => (
                        <div key={el.id} className="p-8">
                            <div className=" popular-main p-5 rounded-md">
                                <NavLink to={`/detail/${el.id}`}>
                                    <img className="rounded" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/></NavLink>
                                <h5 style={{
                                    color: mode ? "white" : "black"
                                }} className="text-name">{el.original_title}</h5>
                                <p style={{
                                    color: mode ? "white" : "black"
                                }}className="text-name">{el.release_date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default NowPlaying;