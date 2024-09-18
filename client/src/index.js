import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Top15 from './pages/Top15';
import Trending from './pages/Trending';
import Watchlist from './pages/Watchlist';
import ErrorElement from './pages/ErrorElement';
import Footer from './components/Footer';
import CoinByID from './pages/CoinByID';
import { createContext } from 'react';
// import watchlistSlice from './store/watchlistSlice';
import { appStore } from './store/appStore';
import { Provider } from 'react-redux';
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

export const Data = createContext();

const AppLayout = function(){
    return(
        <Provider store={appStore}>
            <Data.Provider value={"Anmol"} >
                <div>      
                    <Navbar/>
                    <Outlet/>
                    <Footer/>  
                </div>
            </Data.Provider>
        </Provider>  
    )
}

const appRouter = createBrowserRouter([{
    element: (<AppLayout/>),
    children: [{path: '/', element: <Home/>}, 
        {path: '/top15', element: <Top15/>}, 
        {path: '/trending', element: <Trending/>}, 
        {path: '/watchlist', element: <Watchlist/>},
        {path: '/coin/:id', element: <CoinByID/>},
        {path: "/signup", element: <SignUp/> },
        {path: "/login", element: <LogIn/> },
        {path: "*", element: <ErrorElement/> },
    ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
