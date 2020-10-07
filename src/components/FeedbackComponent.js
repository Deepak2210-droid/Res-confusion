import React, { useEffect } from 'react';
import {
  Form,
  FormGroup,
  Col,
  Input,
  Label,
  Button,
  FormFeedback,
} from 'reactstrap';

function FeedbackComponent() {
  useEffect(function () {
    console.log('hook');
  });
  return (
    <div className="row row-content">
      <div className="col-12">
        <h3>Send us your Feedback</h3>
      </div>
    </div>
  );
}

export default FeedbackComponent;
