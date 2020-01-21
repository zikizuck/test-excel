import React, {Component} from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faShekelSign ,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Post.css';

class Post extends Component {
    render() {
        const cls = (this.props.QTY > 0) ? 'qty' : '';
        const cls2 = (this.props.stock5 > 0) ? 'qty2' : '';


        return (
                <div >
                    <div className="card " >
                        <div>{this.props.id}</div>
                        <span>
                            <img src={this.props.thumbnailUrl}  className="pic" alt="..."
                                 onClick={()=> window.open(this.props.thumbnailUrl,
                                     "_blank" ,
                                     'height=600,width=400')}/>
                            <img src={this.props.thumbnailUrl2}  className="pic" alt="..." onClick={()=> window.open(this.props.thumbnailUrl2, "_blank" ,'height=600,width=400')}/>
                        </span>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.num}</h5>
                            <span className="card-text">{this.props.OEM}</span>
                            <span className="card-text">{this.props.make}: דגם </span>
                            <p className="card-text">Engine Code :{this.props.engine} </p><hr/>
                            <p className="card-text" dir="rtl">{this.props.description}</p>
                            <p className="card-text" dir="rtl">{this.props.desOK}</p><hr/>
                            <p className= {cls}  >{this.props.QTY}   :  כמות במלאי</p>
                            <p className={cls2} >{this.props.stock5}  : במלאי מחסן אור- עקיבא  </p>
                            <p className={cls2} dir="rtl">{this.props.locationOK} : מיקום </p>
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