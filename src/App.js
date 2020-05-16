import React, {Suspense} from 'react';
import { Router, Route, Switch } from "react-router";
import './App.css';
import CallApi from "./CallApi/CallApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./CallApi/Header/Header";
import Parts from "./Parts/Parts";




function App() {
  return (


        <div className="App">


            <Header/>
            {/*<Route path="/parts">*/}
            {/*    <Parts/>*/}
            {/*</Route>*/}
            <Suspense fallback={<h1>Loadding ...</h1>}>

                <CallApi/>
            </Suspense>
        </div>


  );
}

export default App;
