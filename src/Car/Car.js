import React from "react";
import Radium from 'radium'
import './car.css'
// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const Car = () => <h2>This is car component</h2>
const Car = props => {
    const inputClasses = ['input']

    if (props.name !== ''){
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }
    if (props.name.length > 4){
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
        }
    }

    return (
        <div className="Car" style={style}>
            {/*Возвращаю хтмл код с полученными из Апп пропами и значениями */}
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                type="text" name="" id=""
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>)
}
export default Radium(Car)