import React, {Component} from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';


class Post extends Component {
    render() {
        return (
                <div >
                    <div className="card" >
                        <div>{this.props.id}</div>
                        {/*<img src={this.props.thumbnailUrl} className="card-img-top" alt="..."/>*/}
                        <div className="card-body">
                            <h5 className="card-title">Card title <br/> {this.props.Lester}</h5>
                            <p className="card-text">{this.props.Comments}</p>
                            <p className="card-text">In Stock :{this.props.On_Hand}</p>
                            <p className="card-text">Price : ${this.props.price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Post;