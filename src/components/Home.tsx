import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/UseAppSelector";
import {fetchingPopular} from "../store/Reducer/ActionCreators";
import {APIKEY} from "../Apikey/APIKEY";
import {useAppDispatch} from "../hooks/UseAppDispatch";

const Home = ({el}: any) => {
    const {movie} = useAppSelector(state => state.movieSlice)
    console.log(movie)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchingPopular(APIKEY))
    }, [])

    return (
        <div id="home">
            {
                movie.filter((e, id) => id === Math.round(Math.random() * 19)).slice(0, 1).map(el => (
                    <div>
                        <div className="home ">
                            <div className="back">
                                <img className=" image absolute box-border"
                                     src={`https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${el.poster_path}`}
                                     alt=""/>

                            </div>
                            <button className="hi text-5xl text-white bg-gray-700 p-2 rounded-md">Добро пожаловать!</button>
                            <button className="hi2 text-4xl text-white  bg-gray-700 p-2 rounded-md"> Миллионы фильмов, сериалов и людей. Исследуйте
                                сейчас . . .</button>
                        </div>
                    </div>

                ))


            }


        </div>
    );
};

export default Home;