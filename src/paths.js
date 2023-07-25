
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import Search from 'pages/Search';


const Paths = () => {
    return( 
        <>
            <BrowserRouter route>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/search" element={<Search />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        
        </>
    )
}

export default Paths;