import { Component } from "react";
import { Card } from "react-bootstrap";
import Comments from "./CommentArea";

class DisplayCard extends Component {
  state = {
    showComments: false,
  };

  displayComments = () => {
    this.setState({
      showComments: true,
    });
  };

  render() {
    return (
      <Card className="w-100" style={{ width: "18rem" }}>
        <Card.Img
          className="card-height w-100"
          variant="top"
          src={this.props.cardBuild.img}
        />
        <Card.Body>
          <Card.Title className="card-title">
            {this.props.cardBuild.title}
          </Card.Title>
          <Card.Text onClick={this.displayComments} className="show-comments">
            Show Comments
            {this.state.showComments && (
              <Comments book={this.props.cardBuild} />
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default DisplayCard;
