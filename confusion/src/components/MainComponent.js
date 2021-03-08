import React, {Component} from 'react'
import Menu from './MenuComponent'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {dishes} from '../shared/dishes'
import {Route, Switch, Redirect} from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : dishes,
    };

  }

    render(){

        const HomePage = ()=>{
            return(
                <Home/>
            );
        }

        return (
            <div>
                
                <Header/>

                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
                    <Redirect to="/home" />
                </Switch>

                <Footer/>

            </div>
            );
        }

}

export default Main;

// Main Component - Container Component
// Menu and Dish Detail Components changed from Container and Class -> Presentational Component and Fucntional
