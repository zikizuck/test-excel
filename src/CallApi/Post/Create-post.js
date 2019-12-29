import React, {Component} from 'react';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num : "",
            description2 : "",
            stock2 : ""
        }

    }

            // 'Created at': new Date(),


    componentDidMount() {
        fetch('https://sheet.best/api/sheets/96061e86-6f26-4ace-8da1-8eeded76a659', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                this.setState(data);
                // The response comes here
                console.log(data);
            })
            .catch(error => {
                // Errors are reported there
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="num"/>

            </div>
        );
    }
}

export default CreatePost;