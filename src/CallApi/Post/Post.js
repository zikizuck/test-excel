import React, {Component} from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faShekelSign ,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description:""
        }
    }


    clickHandler = (e) => {
        console.log(e.target.value);
        if(e.target.value !==""){
            this.setState({description : e.target.value})
        }
        prompt("you can edit the description", `${this.props.description}`);

    }
    // componentDidMount() {
    //     fetch('https://sheet.best/api/sheets/96061e86-6f26-4ace-8da1-8eeded76a659', {
    //         method: 'PATCH',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             Amp: `this.props.description`,
    //         }),
    //     })
    //         .then(r => r.json())
    //         .then(data => {
    //             // The response comes here
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             // Errors are reported there
    //             console.log(error);
    //         });
    // }


    render() {
        const cls = (this.props.QTY > 0) ? 'qty' : '';
        const cls2 = (this.props.stock5 > 0) ? 'qty2' : '';
        const bgClass = (this.props.stock5 > 0 || this.props.QTY > 0) ? 'bg' : '';


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
                            <h5 className={"card-title " , bgClass} >{this.props.num}</h5><br/>
                            <span className="card-text">{this.props.OEM}</span><br/>
                            <span className="card-text">{this.props.make} </span>
                            <p className="card-text">{this.props.engine} </p>
                            <p className="card-text" dir="rtl">
                                {/*<button onClick={this.clickHandler.bind(this)}>edit</button>*/}
                               {this.props.description} {this.state.description}
                            </p>
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