import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'React components',
        showCars: false,
    }

    onChangeName (name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        car[index] = car // doing nothing, make be commented
        this.setState({cars})
    }

    toggleCarsHandler = () => {

        this.setState({ // setState позволяет вносить изменения в state
            showCars: !this.state.showCars
        })
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }
  render() {
    const divStyle = {textAlign: 'center'}
    let cars = null
    if (this.state.showCars){
        cars = this.state.cars.map((car, index)=>{
            return (
                <Car
                    key={index}
                    name={car.name} // пропы, которые я передаю в КАР.ЖС и их значения
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event=>this.onChangeName(event.target.value, index)}
                />
            )
        })
    }

    return (
      <div style={divStyle} className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
          <div style={{
              width: 400,
              margin: 'auto',
              paddingTop: '20px'
          }}>
              { cars }
          </div>
      </div>
    );
  }
}

export default App;
