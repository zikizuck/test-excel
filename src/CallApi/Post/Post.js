import React, {Component} from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faShekelSign ,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Post extends Component {
    render() {
        return (
                <div >
                    <div className="card" >
                        <div>{this.props.id}</div>
                        {/*<img src={this.props.thumbnailUrl} className="card-img-top" alt="..."/>*/}
                        <div className="card-body">
                            <h5 className="card-title">{this.props.num}</h5>
                            <p className="card-text">{this.props.OEM}</p>
                            <p className="card-text">{this.props.make}: דגם </p>
                            <p className="card-text" dir="rtl">{this.props.description}</p>
                            <p className="card-text">{this.props.QTY}: כמות במלאי</p>
                            <p className="card-text">Stock OK :{this.props.stock5} </p>
                            <p className="card-text">{this.props.Amp}Amp </p>
                            <p className="card-text">{this.props.R} {this.props.N}</p>
                            <p className="card-text"><FontAwesomeIcon icon={faShekelSign} style={{color:"blue"}}/>{this.props.price} : מחיר ברוטו  לא כולל מעמ </p>
                            <p className="card-text"><FontAwesomeIcon icon={faSearchLocation} style={{color:"blue"}}/>{this.props.FirstFloor} / {this.props.secFloor}</p>
                            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Post;