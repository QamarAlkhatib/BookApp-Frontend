import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'

export class Books extends Component {
  render() {
    return (
      <div>
        <Card style={{ backgroundColor: '#D7CCC8', width: '450px', height: '280px', float: 'left', margin: '8px', marginBottom: '40px' }}>
          <Card.Body>
            <Card.Title>{this.props.element.title}</Card.Title>
            <Card.Text>
              {this.props.element.description}
              <br></br>
              {this.props.element.email}
              {/* {this.props.id} */}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: '#E9ECEF' }}>
            <Button variant="danger" onClick={() => { this.props.deleteBook(this.props.element._id) }}>Delete</Button>
            <Button variant="dark" onClick={() => { this.props.handelShowUpdateForm(this.props.element) }}>Update</Button>

          </Card.Footer >
        </Card>
      </div>
    )
  }
}

export default Books
