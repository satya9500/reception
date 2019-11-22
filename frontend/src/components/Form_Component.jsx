import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Form_Component extends Component {
  state = {
    cls: "form-control btn btn-",
    count: 0
  };

  addClass = () => {
    this.state.cls += "primary";
    this.setState({});
  };
  render() {
    return (
      <div className="container">
        <center>
          <h1>Check-in Form</h1>
        </center>

        <Form action="http://localhost:3001" method="POST">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Full Name"
                  required
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter Your Phone Number"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
              required
            />
          </FormGroup>
          <input type="checkbox" onClick={this.addClass} />
          &nbsp; Agree
          <br></br>
          <br></br>
          <button
            className={this.state.cls}
            onClick={this.addClass}
            type="submit"
          >
            CheckIn
          </button>
        </Form>
      </div>
    );
  }
}

export default Form_Component;
