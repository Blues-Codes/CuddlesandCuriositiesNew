import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bio from './Bio';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bio">Bio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <h1>Welcome to Cuddles and Curiosities</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
