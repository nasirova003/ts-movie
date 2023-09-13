import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/UseAppSelector";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {fetchingPopular} from "../store/Reducer/ActionCreators";
import {NavLink} from "react-router-dom";
import {BsFillBookmarkFill} from "react-icons/bs";

const Popular = ({el}:any) => {
    const {movie} = useAppSelector(state => state.movieSlice)
    const [fav,setFav]=useState(true)
    const {mode,value} = useAppSelector(state => state.darkModeSlice)

    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(fetchingPopular)
    },[])
    console.log(movie)

    return (
        <div id="popular" style={{
            background: mode ? "gray" : ""
        }}>
            {
                // el.title.includes(value) &&
                <div className='container flex '>
                    <div className="popular p-10 ">
                        {
                            movie.map(el => (
                                <div key={el.id} className="p-8">
                                    <div className=" popular-main p-5 rounded-md">
                                        <NavLink to={`/detail/${el.id}`}>
                                            <img className="rounded" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                        alt=""/></NavLink>
                                        <h5 style={{
                                          color: mode ? "" : "white"
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
            }

        </div>
    );
};

export default Popular;