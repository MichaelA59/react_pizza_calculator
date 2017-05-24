import React from 'react';

class Pizzas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: 0,
      pizzas: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      people: event.target.value,
      pizzas: Math.ceil(event.target.value/4)
    });
    console.log(this.state.pizzas)
  }

  render() {
    let amountPizza;
    if (this.state.pizzas > 50) {
      amountPizza = 'To open your own pizza shoppe!';
    }
    else {
      amountPizza = `${this.state.pizzas} pizzas`
    }
    
    return(
      <div>
      <form>
        <input type="text" placeholder="Number of People" value={this.state.people} onChange={this.handleChange} ></input>
      </form>
      <h2>You need </h2>
      <h2>{amountPizza}</h2>
      </div>
    )
  }
}

export default Pizzas;
