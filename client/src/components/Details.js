import React, { Component } from "react";
import axios from "axios";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: {},
    };
  }

  componentDidMount() {
    this.detailBook();
  }
  detailBook() {
      const id = this.props.match.params.id;
    axios.get(`http://localhost:2000/books/detail/${id}`).then((res) => {
      if (res.data.success) {
        console.log(res.data.docs);
        this.setState({
          docs: res.data.docs,
        });
        console.log(this.state.docs);
      }
    });
  }
  render() {
      const {book_title,book_author, book_desc, book_genre} = this.state.docs;
    return (
    <dl class="row">
      <dt class="col-sm-3">Book Title</dt>
      <dd class="col-sm-9">
        {book_title}
      </dd>

      <dt class="col-sm-3">Book  Author</dt>
      <dd class="col-sm-9">
        <p>{book_author}</p>
       
      </dd>

      <dt class="col-sm-3">Book Description</dt>
      <dd class="col-sm-9">
        {book_desc}
      </dd>

      <dt class="col-sm-3 text-truncate">Book Genre</dt>
      <dd class="col-sm-9">
        {book_genre}
      </dd>

      
    </dl>
    );
  }
}
