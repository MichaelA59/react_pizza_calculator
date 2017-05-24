import React from 'react';
import Pizzas from './Pizzas';

class App extends React.Component{
  render() {
    return(
      <div>
        <img width="60px" src="http://vignette2.wikia.nocookie.net/gravityfalls/images/4/44/Pizza_Guy_appearance.png/revision/latest?cb=20140807025202"></img>
        <h5>How many guests are coming to your LAME party?</h5>
        <Pizzas />
      </div>
    )
  }
}

export default App
