import React, {Component} from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faShekelSign ,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Post.css';

class Post extends Component {
    render() {
        const cls = (this.props.QTY > 0) ? 'qty' : '';
        const cls2 = (this.props.stock5 > 0) ? 'qty' : '';


        return (
                <div >
                    <div className="card" >
                        <div>{this.props.id}</div>
                        {/*<img src={this.props.thumbnailUrl} className="pic" alt="..."/>*/}
                        <div className="card-body">
                            <h5 className="card-title">{this.props.num}</h5>
                            <p className="card-text">{this.props.OEM}</p>
                            <p className="card-text">{this.props.make}: דגם </p>
                            <p className="card-text">Engine Code :{this.props.engine} </p>
                            <p className="card-text" dir="rtl">{this.props.description}</p>
                            <p className= {cls}  >{this.props.QTY}   :  כמות במלאי</p>
                            <p className={cls2} >{this.props.stock5}  : במלאי מחסן 5 </p>
                            {/*<p className="card-text">{this.props.Amp}Amp </p>*/}
                            <p className="card-text">{this.props.R} {this.props.N}</p>
                            <p className="card-text"><FontAwesomeIcon icon={faShekelSign} style={{color:"blue"}}/>{this.props.price} : מחיר ברוטו  לא כולל מעמ </p>
                            <p className="card-text" dir="rtl">
                                <FontAwesomeIcon icon={faSearchLocation} style={{color:"blue"}}/>
                                {this.props.FirstFloor} כמות- {this.props.stock1} <br/> {this.props.secFloor}   כמות-{this.props.stock2}</p>
                            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Post;