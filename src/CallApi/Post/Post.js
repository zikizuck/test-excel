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
                            <h5 className="card-title">Part # :{this.props.num}</h5>
                            <p className="card-text">{this.props.make}</p>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text">In Stock :{this.props.QTY}</p>
                            <p className="card-text">{this.props.R} {this.props.N}</p>
                            <p className="card-text">Location :{this.props.FirstFloor} / {this.props.secFloor}</p>
                            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Post;