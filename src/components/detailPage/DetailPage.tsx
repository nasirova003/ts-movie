import React from 'react';
import MovieDetailPage from "./movieDetail/MovieDetailPage";
import ActorsDetailPage from "../actorsPage/ActorsDetailPage";
import TrailerDetailPage from "../trailerPage/TrailerDetailPage";
import {useAppSelector} from "../../hooks/UseAppSelector";

const DetailPage = () => {
    const {mode,value} = useAppSelector(state => state.darkModeSlice)

    return (
        <div style={{
        background: mode ? "black" : "grey"
    }}>
            <MovieDetailPage/>
            <ActorsDetailPage/>
            <TrailerDetailPage/>
        </div>
    );
};

export default DetailPage;