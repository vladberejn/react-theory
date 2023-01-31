import React from "react";
// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const Car = () => <h2>This is car component</h2>

export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: "block",
        padding: '10px'
    }}>
        {/*Возвращаю хтмл код с полученными из Апп пропами и значениями */}
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" name="" id="" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)