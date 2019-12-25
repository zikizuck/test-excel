import React, {Component} from 'react';
import Post from "./Post/Post";


class CallApi extends Component {
    constructor(props) {
        super(props);
        this.state ={
            product:[],
            search :""
        }

    }

    componentDidMount () {
        fetch( './db.json' )
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



render() {
        return (

            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.clickHandler.bind(this)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="card-deck">
                    {this.state.product
                        .filter(prod => prod.num.includes(this.state.search) )
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

