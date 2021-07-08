import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import items from "../data/horror.json";
import DisplayCard from "./Card";

class BuildCards extends Component {
  render() {
    return (
      <Row>
        {items
          .map((item) => (
            <Col key={item.asin} className="mb-3">
              <DisplayCard cardBuild={item}/>
            </Col>
          ))
          .slice(this.props.initial, this.props.end)}
      </Row>
    );
  }
}

export default BuildCards;
