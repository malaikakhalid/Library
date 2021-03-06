import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              LIBRARY MANAGEMENT SYSTEM
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    List Book <span class="sr-only"></span>
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
        );
    }
}
