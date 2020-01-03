import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallApi from "./CallApi/CallApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Header from "./CallApi/Header/Header";
import TestingSearch from "./Testing-search/Testing-search";
import CreatePost from "./CallApi/Post/Create-post";


function App() {
  return (

    <div className="App">


        <Header/>
        {/*<TestingSearch/>*/}
        {/*<TestingSearch />*/}
        <CallApi/>
    </div>
  );
}

export default App;
