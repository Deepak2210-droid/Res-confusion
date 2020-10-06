import React from 'react';
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
  return (
    <div className="row row-content">
      <div className="col-12">
        <h3>Send us your Feedback</h3>
      </div>
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlfor="firstname" md={2}>
              First Name
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.handleInputChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlfor="lasttname" md={2}>
              Last Name
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.handleInputChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlfor="telnum" md={2}>
              Contact Tel.
            </Label>
            <Col md={10}>
              <Input
                type="tel"
                id="telnum"
                name="telnum"
                placeholder="Tel. Number"
                value={this.state.telnum}
                onChange={this.handleInputChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlfor="email" md={2}>
              Email
            </Label>
            <Col md={10}>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="agree"
                    checked={this.state.agree}
                    onChange={this.handleInputChange}
                    required
                  />{' '}
                  <strong>May We contact you?</strong>
                </Label>
              </FormGroup>
            </Col>
            <Col ms={{ size: 6, offset: 1 }}>
              <Input
                type="select"
                name="contactType"
                value={this.state.ContactType}
                onChange={this.handleInputChange}
                required
              >
                <option>tel.</option>
                <option>Email</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlfor="message" md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Input
                type="textarea"
                id="message"
                name="message"
                rows="12"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 2, offset: 2 }}>
              <Button type="submit" color="success">
                Send Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default FeedbackComponent;
