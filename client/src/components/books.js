import React, { Component } from "react";
import axios from "axios";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    };
    
  }

  

  componentDidMount() {
    this.getBook();
  }
  getBook() {
    axios.get("http://localhost:2000/books").then((res) => {
      if (res.data.success) {
        console.log(res.data.docs);
        this.setState({
          docs: res.data.docs,
        });
        console.log(this.state.docs);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:2000/books/delete/${id}`).then((res) => {
      alert(res.data.book_title + " has been deleted successfully");
      this.getBook();
    });
  };

  filterContent(docs, searchTerm) {
    console.log("docs" + JSON.stringify(docs[0]));
    const result = docs.filter((doc) => doc.book_title.includes(searchTerm));
    this.setState({
      docs: result,
    });
    console.log("filter" + result);
  }

  handleSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(e.currentTarget.value);
    axios.get("http://localhost:2000/books?search").then((res) => {
      if (res.data.success) {
        // console.log("This is Handle"+res);
        console.log(res.data);
        this.filterContent(res.data.docs, searchTerm);
        this.setState({
          docs: res.data.docs,
        });
        console.log(this.state.docs[0]);
      }
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleSearch}
          type="search"
          name="searchTerm"
          className="form-control"
          id="input1"
          placeholder="Search"
        />
        <div>
          <button type="button" className="btn btn-secondary">
            <a href="/add">ADD NEW BOOK</a>
          </button>
        </div>

        {this.state.docs.map((doc, index) => (
          <div
            className="card"
            style={{
              width: "18rem",
              display: "inline-block",
              margin: "20px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <a href={`/books/${doc._id}`}>{doc.book_title}</a>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {doc.book_author}
              </h6>
              <p className="card-text">{doc.book_desc}</p>
              <p className="card-text">{doc.book_genre}</p>
              <button type="button" className="btn btn-info">
                <a href={`/edit/${doc._id}`}>EDIT</a>
              </button>
              <button type="button" className="btn btn-danger">
                <a href="/" onClick={() => this.onDelete(doc._id)}>
                  DELETE
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
