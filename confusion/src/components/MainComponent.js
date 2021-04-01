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
import {addComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators'
import {actions} from 'react-redux-form'

const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders
    }       
}

const mapDispatchToProps = (dispatch) => ({
    addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes : () => {dispatch(fetchDishes())},
    resetFeedbackForm : () => {dispatch(actions.reset('feedback'))},
    fetchComments : () => {dispatch(fetchComments())},
    fetchPromos : () => {dispatch(fetchPromos())},
    fetchLeaders : () => dispatch(fetchLeaders())
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render(){

        const HomePage = ()=>{
            return(
                <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesError={this.props.dishes.error}
                promotion={this.props.promotions.promotions.filter((promo)=> promo.featured)[0]}
                promotionsLoading={this.props.promotions.isLoading}
                promotionsError={this.props.promotions.error}
                leader={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersError={this.props.leaders.error}
                />
            );
        }

        const DishWithId =({match}) =>{
          return(
            <DishDetail 
            dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesError={this.props.dishes.error}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))} 
            commentsError={this.props.comments.error}
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
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders.leaders}/>}/>
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                    <Redirect to="/home" />
                </Switch>

                <Footer/>

            </div>
            );
        }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

