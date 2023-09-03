import React from 'react'
import './App.css';
import Home from './Pages/Home';
import Tour from './Pages/Tour';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';

const App = () => {
    return (

        <>
            <SearchAppBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tour' element={<Tour />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App