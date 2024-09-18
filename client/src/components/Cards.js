import React from "react";
import Card from "../components/Card";

// // Using the concept of props
// const Cards = function(props) {
//     // console.log(props.value);
//     const {a, b, c, d, e} = props;
//     console.log(a, b, c, d, e);
//     return (
//         <div>Cards</div>
//     )
// };

// const Cards = function({a, b, c, d, e}) {
//     console.log(a, b, c, d, e);
//     return (
//         <div>Cards</div>
//     )
// };

// const Cards = function(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
//     return (
//         <div>Cards</div>
//     )
// };

// const Cards = function({a, b, c, d, e}) {
//     // console.log(a, b, c, d, e);
//     return (
//         <div>
//             <Card a={a} b={b} c={c} d={d} e={e}/>
//         </div>
//     )
// };

const Cards = ({ data, checker }) => {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {data.map((elementOfArray) => {
          // return <Card key={elementOfArray.id} item={elementOfArray} />;
          return <Card key={elementOfArray.id} item={checker === 'top15' ? elementOfArray.item : elementOfArray} checker={checker} />;
        })}
      </div>
    );
};

export default Cards;