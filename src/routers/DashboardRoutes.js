import React from 'react'
import { Routes, Route } from "react-router-dom";

import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ul/Navbar'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>       
                        <Route path="marvel" element={<MarvelScreen/>} /> 
                        <Route path="dc" element={<DcScreen/>} /> 

                        <Route path="search" element={<SearchScreen />} />
                        <Route path="heroe/:heroeId" element={<HeroScreen/>} /> 
                      
                        <Route path="/" element={<MarvelScreen />} />
                        {/* <Redirect to="/marvel"/> */}
                </Routes>
            </div>
        </>
    )
}
