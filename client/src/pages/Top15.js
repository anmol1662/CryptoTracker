import React, { useState , useEffect } from "react";
import Cards from "../components/Cards";
import DummyUI from "../components/DummyUI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Top15 = function() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    
    useEffect(() => {
      if (user === "") {
        navigate("/");
      } else {
        // API fetch logic
        const url = "https://api.coingecko.com/api/v3/search/trending/?precision=3";
        fetch(url).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log(data);
          setData(data);
        }).catch((error) => {
          console.log(error);
        });
      }
    }, [user]);

    return ((data.length === 0) ? <DummyUI/> : <div className="container w-full mx-auto"><Cards data={data.coins} checker={'top15'}/></div>)
};

export default Top15;
