import React, { Fragment } from 'react';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Nav />
      
      <footer className="bg-danger col-md-12 text-center">
        Copyright &copy;2020
      </footer>
      </div>
    </Fragment>
  );
}

export default App;
