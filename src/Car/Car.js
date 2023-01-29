import React from "react";
// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const Car = () => <h2>This is car component</h2>

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        {props.children}
    </div>
)