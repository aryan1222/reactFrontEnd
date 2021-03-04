import React, {Component} from 'react'
import Menu from './MenuComponent'
import Header from './Header'
import Footer from './Footer'
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
                <Footer/>

            </div>
        );
    }
}

export default Main;

// Main Component - Container Component
// Menu and Dish Detail Components changed from Container and Class -> Presentational Component and Fucntional
