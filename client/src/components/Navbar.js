import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";

function Navbar() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="flex border shadow-xl justify-between items-center px-4">
      <Link to={"/"}>
        {" "}
        <h1 className="text-[40px] font-black cursor-pointer">Crypto<span className="text-blue-800">Tracker </span></h1>
      </Link>
      {user === "logged in" && (<div className="flex font-bold text-[25px] gap-6">
        <Link to={"/top15"}>
          {" "}
          <p className="cursor-pointer hover:text-blue-600">Top15</p>
        </Link>
        <Link to={"/trending"}>
          {" "} 
          <p className="cursor-pointer hover:text-blue-600">Trending</p>
        </Link>
        <Link to={"/watchlist"}>
          {" "}
          <p className="cursor-pointer hover:text-blue-600">Watchlist</p>
        </Link>
      </div>)}
      <div className="flex gap-4">
        {user === "logged in" ? (
          <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">Log out</button>
          ) : ( 
            <> 
              <Link to={"/login"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">Log in</button>
              </Link>
              <Link to={"/signup"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">Sign up</button>
              </Link>
            </> 
          )
        }
      </div>
    </div>
  );
}

export default Navbar;