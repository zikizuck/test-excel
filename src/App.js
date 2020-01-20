import React, {Suspense} from 'react';
import './App.css';
import CallApi from "./CallApi/CallApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./CallApi/Header/Header";




function App() {
  return (

    <div className="App">


        <Header/>
        <Suspense fallback={<h1>Loadding ...</h1>}>

            <CallApi/>
        </Suspense>
    </div>
  );
}

export default App;
