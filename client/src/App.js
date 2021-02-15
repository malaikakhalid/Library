import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Books from "./components/books";
import Details from "./components/Details";

import CreateBook from "./components/CreateBook";
import edit from "./components/edit";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Books} />
          <Route path="/books/:id" component={Details} />
          <Route path="/add" component={CreateBook} />
          <Route path="/edit/:id" component={edit} />
        </div>
      </BrowserRouter>
    );
  }
}
