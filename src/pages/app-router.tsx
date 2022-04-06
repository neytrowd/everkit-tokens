import React from 'react';
import {Route, Routes} from 'react-router-dom';
import TokenList from "./token-list";
import TokenInfo from "./token-info";
import SearchToken from "./search-token";
import Navbar from "../components/navbar";

const AppRouter = () => {
    return (
        <div className='app'>
            <Navbar/>
            <div className="tokens">
                <Routes>
                    <Route path='/' element={<TokenList/>}/>
                    <Route path='/tokenInfo/:id' element={<TokenInfo/>}/>
                    <Route path='/searchToken' element={<SearchToken/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default AppRouter;