import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <ul className="social-icons">
            <li>
              <a href="https://twitter.com/SerinJeon" className="social-icon">
                {" "}
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/serin-jeon/"
                className="social-icon"
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/serin0837" className="social-icon">
                {" "}
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
