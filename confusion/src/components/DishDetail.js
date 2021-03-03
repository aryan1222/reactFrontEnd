import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap'
class DishDetail extends Component {
    
    renderComments(comments){
        if(comments!=null){

            const list = comments.map(comment =>{
                return(
                    <li key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>--{comment.author},&nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}</p>
                    </li>
                );
            })
            
            return(
                <ul className='list-unstyled'>
                    {list}
                </ul>
            );
        }else{
            return(<div></div>);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width='100%' src = {this.props.dish.image} alt={this.props.dish.name}/>

                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card> 
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
            
        )
    }
}

export default DishDetail;
