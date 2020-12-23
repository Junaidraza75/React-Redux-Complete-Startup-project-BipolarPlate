import React, { Component } from 'react'
import './App.css';

import AppRouter from './config/router'
import firebase from './config/firebase.js'

import {connect} from 'react-redux';
function App() {
  return (
    <div className="App">
      
        <AppRouter/>

      </div>
  );
}

const mapStateToProps = (state, ownProps) => (
  {
    name: state.name,
  }
)


export default connect(mapStateToProps,null) (App);
