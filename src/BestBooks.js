import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Books from './components/Books.js'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookData: [],

    }
  }


  componentDidMount = async () => {

    let email = this.props.auth0.user.email;
    console.log('mount function');
    let url = `http://localhost:3004/books?email=${email}`
    let books = await axios.get(url);
    this.setState({
      bookData: books.data
    });
    console.log("dattttaa", this.state.bookData);
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
        
        {this.state.bookData.length > 0 &&
          <>
            {this.state.bookData.map(element => {
              return (
            <Books title={element.title} description={element.description} email={element.email}/>
             )
            })}
          </>
        }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
