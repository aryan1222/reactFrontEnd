import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

import {Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length > len);

class CommentForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleComment(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleComment(values)}>
                                
                                <div className="form-group">
                                    <Label htmlFor="rating">Rating</Label>

                                    <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Control.select>  
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            validators = {{
                                                required, 
                                                minLength : minLength(3),
                                                maxLength : maxLength(15)
                                            }}
                                    />
                                    <Errors className="text-danger" model=".name" show="touched"
                                                messages={{
                                                    required : 'Required',
                                                    minLength : 'Must be greater than 2 characters',
                                                    maxLength : 'Must be 15 characters or less'
                                                }}
                                    />    
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="message">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" 
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <Button className="mt-3" type="submit" value="submit" color="primary">Submit</Button>
                                </div>

                            </LocalForm>
                        </ModalBody>
                    </Modal>
            </div>
            
        )
    }
}



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
                    <CommentForm/>
                </ul>
            );
        }else{
            return(<div></div>);
        }
}

export const DishDetail = (props) => {
    return (
        <div className="container">

            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>  
            </div>

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
