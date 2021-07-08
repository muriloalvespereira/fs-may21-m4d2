import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Textarea from "./Textarea";

class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.item.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
        },
      }
    );
    let commentBooks = await response.json();
    this.setState({
      comments: commentBooks,
    });
  };

  render() {
    return (
      <>
        <ListGroup>
          {this.state.comments
            .map((comment) => <ListGroup.Item key={comment._id}> {comment.comment}</ListGroup.Item>)
            .slice(-3)}
        </ListGroup>
        <Textarea itemId={this.props.item.asin} />
      </>
    );
  }
}

export default Comments;
