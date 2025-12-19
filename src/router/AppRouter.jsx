// src/router/AppRouter.jsx
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { routes } from './routing';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


export const AppRouter = () => {

    return (
        <Router>
            <div className='relative flex min-h-screen w-full flex-col group/design-root'>
                <ScrollToTop />
                <Navbar/>
                <Routes>
                    {routes.map((route) => {
                        return(
                            <Route 
                                key={route.path} 
                                path={route.path} 
                                element={route.element} 
                            />
                        )
                    })}
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

function ScrollToTop() {
    const { key, pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [key, pathname]);
    return null;
}