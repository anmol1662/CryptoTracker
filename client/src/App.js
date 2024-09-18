import Navbar from "./components/Navbar";
import { useState } from "react"; // comes through naming export

function App() {
  const [likes, setLikes] = useState(0)

  function increaseLikes(){
    setLikes(likes + 1);
    // console.log(likes);
  }

  return (
    <div>
      <Navbar></Navbar>
      <button onClick={increaseLikes} className="w-[150px] ml-5 bg-yellow-200">Like</button>
      <div><h2>{likes}</h2></div>
    </div>
  );
}

export default App;

