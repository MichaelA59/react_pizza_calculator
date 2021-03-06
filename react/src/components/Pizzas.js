import React from 'react';

class Pizzas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null,
      pizzas: null
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
    let statefulbackground;
    if (this.state.pizzas > 1000) {
      statefulbackground = 'gifback';
      amountPizza = <img src='http://www.reactiongifs.com/wp-content/uploads/2013/12/please.gif'></img>
    }
    else if (this.state.pizzas > 500) {
      statefulbackground = '';
      amountPizza = <img src='https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif'></img>
    }
    else if (this.state.pizzas > 400) {
      statefulbackground = '';
      amountPizza = 'My Suggestion? Salad man, lots of it!';
    }
    else if (this.state.pizzas > 150) {
      statefulbackground = '';
      amountPizza = 'Ok, actually you need help...';
    }
    else if (this.state.pizzas > 50) {
      statefulbackground = '';
      amountPizza = 'To open your own pizza shoppe!';
    }
    else if (this.state.pizzas == null) {
      statefulbackground = '';
      amountPizza = '';
    }
    else {
      statefulbackground = '';
      amountPizza = `${this.state.pizzas} pizzas`
    }

    return(
      <div className={statefulbackground}>
      <form>
        <input type="text" placeholder="Number of People" value={this.state.people} onChange={this.handleChange} ></input>
      </form>
      <h2>You Need</h2>
      <h2>{amountPizza}</h2>
      </div>
    )
  }
}

export default Pizzas;
