import React, {Component} from 'react'
import Menu from './MenuComponent'
import Header from './Header'
import {dishes} from '../shared/dishes'
import DishDetail from './DishDetail';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : dishes,
      selectedDish : null
    };

  }

    onDishSelect(dishId){
        this.setState({
            selectedDish : dishId
        });
    }

    renderDish(dishId){
        if(dishId!=null){
            return <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === dishId)[0]}/>
        }else{
            return <div></div>;
        }
    }

    render(){
        return (
            <div>
                
                <Header/>
                <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>     
                <div className="container">{this.renderDish(this.state.selectedDish)}</div>
                
            </div>
        );
    }
}

export default Main;

// Main Component - Container Component
// Menu Component changed from Container -> Presentational Component
// Dish Detail Component - Container Component
