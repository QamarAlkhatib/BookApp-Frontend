import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Books from './components/Books.js'
import AddBookModal from './components/AddBookModal';
import Button from 'react-bootstrap/Button'


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      email: this.props.auth0.user.email,
      showModal: false
    }
  }

  handelShow = () => {
    this.setState({
      showModal: true
    })
  }

  handelClose = () => {
    this.setState({
      showModal: false
    })
  }

  componentDidMount = async () => {
    // console.log('mount function');
    let url = `http://localhost:3004/books?email=${this.state.email}`
    let books = await axios.get(url);
    this.setState({
      bookData: books.data
    });
    console.log("dattttaa", this.state.bookData);
  }

  addBook = async (event) => {
    event.preventDefault()
    // console.log('add book function');
    // using get
    // let title = event.target.title.value;
    // let description = event.target.description.value;
    // let url = `http://localhost:3004/addbook?email=${this.state.email}&title=${bookName}&description=${bookDescription}`
    // let newBooksData = await axios.get(`http://localhost:3004/addbook?email=${this.state.email}&title=${bookName}&description=${bookDescription}`);

    // using post
    let bookFormInfo = {
      email: this.state.email,
      title: event.target.title.value,
      description: event.target.description.value,
    }
    let newBooksData = await axios.post(`http://localhost:3004/addbook`, bookFormInfo);

    this.setState({
      bookData: newBooksData.data
    });
  }

  deleteBook = async (bookId) =>{
    // deleting the book id
    let newBooksData = await axios.delete(`http://localhost:3004/deleteBook?email=${this.state.email}&bookId=${bookId}`);
    this.setState({
      bookData: newBooksData.data
    });
  }

  render() {

    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>


        <Button variant="primary" onClick={this.handelShow} style={{ margin: '20px'}}>Add Book</Button>
        {this.state.showModal &&
        <>
      <AddBookModal addBook={this.addBook} show={this.state.showModal} handelShow={this.handelShow} handelClose={this.handelClose}/>
        </>

       }


        {this.state.bookData.length > 0 &&
          <>
            {this.state.bookData.map((element, index) => {
              return (
                <Books key={index} deleteBook={this.deleteBook} id={element._id} title={element.title} description={element.description} email={element.email} />
              )
            })}
          </>
        }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
