import React from 'react';
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {HiSearch} from "react-icons/hi";
import {useAppSelector} from "../hooks/UseAppSelector";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import { toggleDarkMode} from "../store/Reducer/detailReducer/DarkModeSlice";
import search from "./search/Search";
import {FaMoon} from "react-icons/fa";



const Header = ({el}:any) => {
    const navigate = useNavigate()
    const dispatch =useAppDispatch()
    const {mode,value} = useAppSelector(state => state.darkModeSlice)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
navigate(`/search/:${e}`)
    }
    return (
        <div id="header"style={{
            background: mode ? "darkslategray" : "grey"
        }}>
            <div className="container">
                <div className="header text-white">
                    <NavLink to={'/home'}><img src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`} width="150px" height="95px" alt=""/></NavLink>

                    <div className="header--nav ">
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/now-playing'}>Now-Playing</NavLink>
                        <NavLink to={'/top-rated'}>Top-Rated</NavLink>
                    </div>
                    <div >
                        <button  style={{color:mode ? 'yellow': 'black'}} onClick={()=> dispatch(toggleDarkMode(el))} className="text-white text-2xl" ><FaMoon/></button>
                    </div>
                </div>
                {
                    <div className="p-5 ml-40">
                        < input onChange={handleChange}    className="input"
                                placeholder="Найти фильм, сериал . . ."/>
                        <button className="btn"><HiSearch/></button>
                    </div>

                }
            </div>
        </div>
    );
};

export default Header;
