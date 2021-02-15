import React, { Component } from "react";
import axios from "axios";

export default class CreatBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book_title:"",
      book_author:"",
      book_desc :"",
      book_genre:""
    };
  }

  onSubmit = (e) => {
      e.preventDefault();
     const { book_title, book_author, book_desc, book_genre } = this.state;
     const data = {
         book_title:book_title,
         book_author:book_author,
         book_desc:book_desc,
         book_genre:book_genre
     };
     console.log(data);
     axios.post("http://localhost:2000/books/add", data).then((res) => {
       if (res.data.success) {
         alert("data added");
         this.setState({
           book_title: "",
           book_author: "",
           book_desc: "",
           book_genre: "",
         });
         console.log(this.state.docs);
       }
     });

  }

  handleInput = (e) => {
const {name , value} = e.target;
this.setState({
    ...this.state,
    [name]:value

})


  };
  
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Book Title</label>
            <input
              value={this.state.book_title}
              onChange={this.handleInput}
              name="book_title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Book Title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Book Author</label>
            <input
              value={this.state.book_author}
              onChange={this.handleInput}
              name="book_author"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Book Author"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Book Description</label>
            <input
              value={this.state.book_desc}
              onChange={this.handleInput}
              type="text"
              name="book_desc"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Book Description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Book Genre</label>
            <input
              value={this.state.book_genre}
              onChange={this.handleInput}
              type="text"
              name="book_genre"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Book Genre"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
