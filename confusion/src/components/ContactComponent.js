import React, {Component} from 'react'
import {Breadcrumb, BreadcrumbItem, FormGroup, Form, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

class ContactComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
        // prevent opening the next page
    }

    render() {
        return (
            <div className="container">
    
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>  
                </div>
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
    
                <div className="row row-content">

                    <div className="col-12 my-3">
                        <h1>Send us Your Feedback</h1>
                    </div>
    
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" sm={12} md={2} xl={2} lg={2} >First Name</Label>
                                <div className="col" sm={12} md={10} xl={10} lg={10}>
                                    <Input type="text" id="firstname" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleInputChange} />
                                </div>
                            </FormGroup> 
    
                            <FormGroup row>
                                <Label htmlFor="lastname" sm={12} md={2} xl={2} lg={2} >Last Name</Label>
                                <div className="col" sm={12} md={10} xl={10} lg={10}>
                                    <Input type="text" id="lastname" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleInputChange}/>
                                </div>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" sm={12} md={2} xl={2} lg={2} >Contact Tel.</Label>
                                <div className="col" sm={12} md={10} xl={10} lg={10}>
                                    <Input type="tel" id="telnum" placeholder="Tel. Number" name="telnum" value={this.state.telnum} onChange={this.handleInputChange}></Input>
                                </div>
                            </FormGroup> 

                            <FormGroup row>
                                <Label htmlFor="email" sm={12} md={2} xl={2} lg={2} >Email</Label>
                                <div className="col" sm={12} md={10} xl={10} lg={10}>
                                    <Input type="email" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange}></Input>
                                </div>
                            </FormGroup>

                            <FormGroup row>
                                <div className="col" md={{size: 6, offset:3}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange}/>
                                            {' '}<strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </div>
                                <div className="col" md={{size: 3, offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" sm={12} md={2} xl={2} lg={2} >Your Feedback</Label>
                                <div className="col" sm={12} md={10} xl={10} lg={10}>
                                    <Input rows="12" type="textarea" id="message" name="message" value={this.state.message} onChange={this.handleInputChange}></Input>
                                </div>
                            </FormGroup>

                            <FormGroup row>
                                <div className="col" md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </div>
                            </FormGroup>
                        </Form>
                    </div>

                </div>

            </div>
        );
    
    }
}

export default ContactComponent;