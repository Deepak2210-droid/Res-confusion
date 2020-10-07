import React from 'react';
import {
  Card,
  cardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg,
  CarouselIndicators,
} from 'reactstrap';
function RenderCard({ item }) {
  if (item != null) {
    return (
      <Card>
        <CardImg width="50" src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>
            <strong>{item.name}</strong>
          </CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  } else
    return (
      <div>
        <strong>NO DATA AVAILABLE</strong>
      </div>
    );
}

function HomeComponent(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;
