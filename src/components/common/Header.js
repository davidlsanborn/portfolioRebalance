import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="portfolio-header">
      <div className="jumbotron">
        <h2>Stock Portfolio Balancer</h2>
      </div>
      <div>
        <IndexLink to="/" activeClassName="active">My Portfolio</IndexLink>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </div>
    </div>
  );
};

export default Header;
