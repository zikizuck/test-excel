import React, {Component} from 'react';
import Post from "./Post/Post";


class CallApi extends Component {
    constructor(props) {
        super(props);
        this.state ={
            product:[],
            search :"",
            search2 :""
        }

    }

    componentDidMount () {
        fetch( 'https://sheet.best/api/sheets/53f61969-59d6-4aea-80b1-c55076b404f2' )
            .then(res => res.json())
            .then(product => {
                this.setState({product});
                console.log(product)
            })

    }
     clickHandler (e){
        if(e.target.value !==""){
            this.setState({search : e.target.value})
        }

     }
    search2Handler (e){
        if(e.target.value !==""){
            this.setState({search2 : e.target.value})
        }

    }



render() {
        return (

            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.clickHandler.bind(this)}/>
                    <input className="form-control mr-sm-2" type="search" placeholder="By description" onChange={this.search2Handler.bind(this)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="card-deck">
                    {this.state.product
                        .filter(prod => prod.num.includes(this.state.search) )
                        .filter(prod => prod.description.includes(this.state.search2) )
                        .map(product => {
                            return <Post
                                {...product}

                            />
                        })}

                </div>
            </div>
        );
    }
}

export default CallApi;

