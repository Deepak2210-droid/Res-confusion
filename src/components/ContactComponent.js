import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  Col,
  FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';
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
      message: '',
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    console.log('con');
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name + ' ' + value + ' ' + this.state.agree);
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    console.log('current state is' + JSON.stringify(this.state));
    alert('current state is' + JSON.stringify(this.state));
    event.preventDefault();
  }
  handleBlur = (field) => (evt) => {
    //console.log(field);
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate(firstname, lastname, telnum, email) {
    const error = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
    };
    if (this.state.touched.firstname && firstname.length < 3) {
      error.firstname = 'First Name  should be grester than 3 characters';
    } else if (this.state.touched.firstname && firstname.length > 15) {
      error.firstname = 'First Name should be less than 15 charcter';
    }

    if (this.state.touched.lastname && lastname.length < 3) {
      error.lastname = 'Last Name  should be grester than 3 characters';
    } else if (this.state.touched.lastname && lastname.length > 15) {
      error.lastname = 'Last Name should be less than 15 charcter';
    }

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum)) {
      error.telnum = 'Tel num contains only Numbers';
    }

    if (
      this.state.touched.email &&
      email.split('').filter((x) => x === '@').length !== 1 &&
      email.split('').filter((x) => x === '.').length !== 1
    ) {
      error.email = 'Email should contain @ sign';
    }
    return error;
  }
  render() {
    console.log('render');
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{' '}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
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
                    valid={errors.firstname == ''}
                    invalid={errors.firstname !== ''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('firstname')}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
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
                    valid={errors.lastname === ''}
                    invalid={errors.lastname !== ''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('lastname')}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
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
                    valid={errors.telnum === ''}
                    invalid={errors.telnum !== ''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('telnum')}
                  />
                  <FormFeedback>{errors.telnum}</FormFeedback>
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
                    valid={errors.email === ''}
                    invalid={errors.email !== ''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('email')}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
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
      </div>
    );
  }
}

export default ContactComponent;
