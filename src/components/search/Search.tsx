import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {fetchingSearch, fetchingSearchError, fetchingSearchSuccess} from "../../store/Reducer/search/SearchReducer";
import axios from "axios";
import {APIKEY} from "../../Apikey/APIKEY";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {RiLoader3Fill} from "react-icons/ri";

export const Search = () => {

    const {searchId} = useParams()
    const {search, error, loader} = useAppSelector(state => state.searchSlice)
    const dispatch = useAppDispatch()

    const fetchingSearchPage = async () => {
        try {
            dispatch(fetchingSearch())
            const responsive = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchId}`)
            dispatch(fetchingSearchSuccess(responsive.data.results))
        } catch (e: any) {
            dispatch(fetchingSearchError(e.massage))
        }
    }

    useEffect(() => {
        dispatch(fetchingSearchPage)
    },[])

    if (loader) {
        return <div>
            <div className="section">
                <RiLoader3Fill className="loader"/>
                Loading...
            </div>
        </div>
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <div className="search">
                {
                    search.map(el => (
                        el.poster_path &&
                        <div key={el.id}>
                            <div>
                                <Link to={`/detail/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                         alt=""/></Link>
                                    <h5>{el.original_title}</h5>
                                    <h4>({el.release_date})</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Search;