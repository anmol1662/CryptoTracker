import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";

const Watchlist = function() {
    const watchlistData = useSelector((store) => store.watchlist);
    console.log(watchlistData);

    return (watchlistData.length === 0) ? (<div className="text-3xl flex h-screen items-center justify-center">No data in watchlist</div>) : ( 
    <div className="h-screen">
        <Cards data={watchlistData}/>
    </div>);
};

export default Watchlist;