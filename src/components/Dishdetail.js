import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
function renderDish(dish) {
  if (dish != null) {
    const com = dish.comments.map((comm) => {
      return <CardText>{comm.comment}</CardText>;
    });
    return (
      <Card>
        <CardImg width="50%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
        <Card>
          <CardBody>
            <CardTitle>
              <h2>comments</h2>
            </CardTitle>
          </CardBody>
          {com}
        </Card>
      </Card>
    );
  } else return <div></div>;
}

export default renderDish;
