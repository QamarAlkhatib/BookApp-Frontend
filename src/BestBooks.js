import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
// import { withAuth0 } from "@auth0/auth0-react";
import { Card, CardGroup } from 'react-bootstrap/'
class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      
    }
}


 componentDidMount = async () =>{
    // const { user,isAuthenticated} = withAuth0();
    console.log('mount function');

    let books =  await axios.get(`${process.env.REACT_APP_SERVER}/books`);
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
        {this.state.bookData &&
          <>
            {this.state.bookData.map(element => {
              return (
                <>
                  <CardGroup>
                    <Card>
                      <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>
                          {element.description}
                          <br></br>
                          {element.email}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </>
              )
            })}
          </>
        }
      </>
    )
  }
}

export default MyFavoriteBooks;
