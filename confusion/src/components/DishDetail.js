import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap'
    
function RenderComments(props){
        if(props.comments!=null){

            const list = props.comments.map(comment =>{
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

export const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width='100%' src = {props.dish.image} alt={props.dish.name}/>

                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card> 
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>

        </div>
        
    )
}

export default DishDetail;
