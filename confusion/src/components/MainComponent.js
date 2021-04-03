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
import {postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback} from '../redux/ActionCreators'
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders
    }       
}

const mapDispatchToProps = (dispatch) => ({
    postComment : (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback : (feedback) => dispatch(postFeedback(feedback)),
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
            dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesError={this.props.dishes.error}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))} 
            commentsError={this.props.comments.error}
            postComment={this.props.postComment}
            />
          );
        }

        return (
            <div>
                
                <Header/>

                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>

                        <Switch>
                            <Route path="/home" component={HomePage}></Route>
                            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} />
                            <Route path="/menu/:id" component={DishWithId}/>
                            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders.leaders}/>}/>
                            <Route exact path="/contactus" component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                            <Redirect to="/home" />
                        </Switch>

                    </CSSTransition>
                </TransitionGroup>
  
                <Footer/>

            </div>
            );
        }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

