import React, {Component} from 'react'
import Menu from './components/MenuComponent'
import Header from './components/Header'
import {dishes} from './shared/dishes'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : dishes
    };

  }

  render(){
    return (
      <div className="App">
        
        <Header/>
        <Menu dishes = {this.state.dishes}/>     
  
      </div>
    );
  }
}

export default App;
