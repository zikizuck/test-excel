import React, {Component} from 'react';
import Post from "./Post/Post";


class CallApi extends Component {
    constructor(props) {
        super(props);
        this.state ={
            product:[]
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



render() {
        return (

            <div className="card-deck">
                {this.state.product.map(product => {
                    return <Post
                        {...product}

                    />
                })}

            </div>
        );
    }
}

export default CallApi;