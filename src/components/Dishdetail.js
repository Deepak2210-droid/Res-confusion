import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments(props) {
  return props.comments.map((comment) => {
    return (
      <CardText>
        <ul key={comment.id} className="list-unstyled">
          <li>{comment.comment}</li>
          <li>
            --{comment.author},{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }).format(new Date(Date.parse(comment.date)))}
          </li>
        </ul>
      </CardText>
    );
  });
}

const DishDetail = (props) => {
  console.log('Dishdetail render invoked');
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        {props.dish != null ? (
          <Card>
            <CardTitle>
              <h4>Comments</h4>
            </CardTitle>
            <CardBody>
              <RenderComments comments={props.dish.comments} />
            </CardBody>
          </Card>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default DishDetail;
