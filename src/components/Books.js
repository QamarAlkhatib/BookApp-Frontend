import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'

export class Books extends Component {
  render() {
    return (
      <div>
        <Card style={{ backgroundColor: '#D7CCC8', width: '450px', height: '280px', float: 'left', margin: '8px', marginBottom: '40px' }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <br></br>
              {this.props.email}
              {/* {this.props.id} */}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: '#E9ECEF' }}>
            <Button variant="danger" onClick={() => { this.props.deleteBook(this.props.id) }}>Delete</Button>
          </Card.Footer >
        </Card>
      </div>
    )
  }
}

export default Books
