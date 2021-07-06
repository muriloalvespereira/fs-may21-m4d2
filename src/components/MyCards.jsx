import { Card, Col, Row } from "react-bootstrap"
import items from '../data/horror.json'

const BuildCards = (props) => (
    <Row>
            {
                items.map(item => (
                    <Col key={item.asin} className="mb-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="card-height" variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )).slice(props.initial, props.end)
            }
    </Row>
)

export default BuildCards