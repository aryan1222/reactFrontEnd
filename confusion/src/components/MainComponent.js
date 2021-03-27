import React, {Component} from 'react'
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import DishDetail from './DishDetail'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addComment} from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders
    }       
}

const mapDispatchToProps = (dispatch) => ({
    addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

class Main extends Component {

    render(){

        const HomePage = ()=>{
            return(
                <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
                promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
                leader={this.props.leaders.filter((leader)=> leader.featured)[0]}/>
            );
        }

        const DishWithId =({match}) =>{
          return(
            <DishDetail 
            dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))} 
            addComment={this.props.addComment}
            />
          );
        }

        return (
            <div>
                
                <Header/>

                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} />
                    <Route path="/menu/:id" component={DishWithId}/>
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to="/home" />
                </Switch>

                <Footer/>

            </div>
            );
        }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

