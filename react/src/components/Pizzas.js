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
    return(
      <div>
      <form>
        <input type="text" placeholder="Number of People" value={this.state.people} onChange={this.handleChange} ></input>
      </form>
      <h2>You need {this.state.pizzas} pizzas</h2>
      </div>
    )
  }
}

export default Pizzas;
