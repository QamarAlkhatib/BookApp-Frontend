import React, { Component } from 'react'
import {Card,CardGroup} from 'react-bootstrap/'

export class Books extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <Card.Title>{this.props.title}</Card.Title>
                      <Card.Text>
                        {this.props.description}
                        <br></br>
                        {this.props.email}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Books
