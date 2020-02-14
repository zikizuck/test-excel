import React, {Component} from 'react';
import Post from "./Post/Post";
import {debounce} from 'lodash';


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
        fetch( 'https://sheet.best/api/sheets/96061e86-6f26-4ace-8da1-8eeded76a659' )
            .then(res => res.json())
            .then(product => {
                this.setState({product});
                console.log(product);
            })

    }
    onDebounce = debounce((e) => this.clickHandler(e) , 300);

     clickHandler = (e) => {
        if(e.target.value !==""){
            this.setState({search : e.target.value.toUpperCase()})
        }
     }

     onChange = (e) => {
         e.persist();
         this.onDebounce(e);
     }
    search2Handler (e){
        if(e.target.value !==""){
            this.setState({search2 : e.target.value.toUpperCase()})
        }

    }
    resetButton (){
        this.setState({search:''})
    }





render() {

        return (

            <div>

                <div className="container">
                    <form  className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search"
                               placeholder="Search .... "
                               onChange={this.onChange}
                               onKeyPress={(e)=>{e.key === 'Enter'&& e.preventDefault()}}/>
                        {/*<input className="form-control mr-sm-2" type="search"*/}
                        {/*       placeholder="לפי תאור מוצר"*/}
                        {/*       onChange={this.search2Handler.bind(this)}*/}
                        {/*       onKeyPress={(e)=>{e.key === 'Enter'&& e.preventDefault()}}*/}
                        {/*/>*/}
                        {/*<button className="btn btn-outline-success my-2 my-sm-0" onClick={this.resetButton.bind(this)}>clean content</button>*/}

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">איפוס</button>
                    </form>
                    <div className="card-deck">
                        {this.state.product
                            // .filter(prod => ((prod.QTY || prod.stock5) >  0))
                            .filter(prod => (prod.num.includes(this.state.search)
                                || prod.description.includes(this.state.search) || prod.OEM.includes(this.state.search)))
                            .map(product => {
                                return <Post
                                    {...product}

                                />
                            })}

                    </div>
                </div>
            </div>
        );
    }
}

export default CallApi;

