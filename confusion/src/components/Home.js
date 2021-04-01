import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import LoadingComponent from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderCard({item, isLoading, error}){
    if(isLoading){
        return(
            <LoadingComponent/>
        );
    }else if(error){
        return (
            <h4>{error}</h4>
        )
    }else{
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>

                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} error={props.dishesError}/>
                </div>

                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotion} isLoading={props.promotionsLoading} error={props.promotionsError}/>
                </div>

                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} error={props.leadersError}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
