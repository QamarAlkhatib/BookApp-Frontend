import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap/'

class UpdateBookModal extends React.Component {
    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>Update Book Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            < Form.Group className="mb-3" >
                                <Form.Control type="text" name='title' defaultValue={this.props.bookInfoUpdate.title} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" name='description' defaultValue={this.props.bookInfoUpdate.description} />
                            </Form.Group>
                            <Button variant="primary" type="submit" value="Update Book">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal >
            </div >
        )
    }
}
export default UpdateBookModal