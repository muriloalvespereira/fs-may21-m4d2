import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Textarea from "./Textarea";

class Comments extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item>{this.props.book.category}</ListGroup.Item>
        </ListGroup>
        <Textarea />
      </>
    );
  }
}

export default Comments;
