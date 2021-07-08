import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Textarea extends Component {
  render() {
    return (
      <>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Add your comment here!"/>
          </Form.Group>
          <Button variant="primary">Post</Button>
      </>
    );
  }
}

export default Textarea;
