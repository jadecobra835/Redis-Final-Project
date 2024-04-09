import React, { Component } from 'react';
const redis = require('redis');
const client = redis.createClient('127.0.0.1', '6379');
 
export default class searchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: ""
        }
    }

    alphaNumericString() {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "http://localhost:3000/";
        for (var i = 0, n = charset.length; i < 20; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };

    async shortenURL() {
        if (this.state.url != "") {
            await client.connect();
            console.log('Connected!');
            console.log(await client.set(alphaNumericString(), url));
            console.log(await client.KEYS('*http://localhost:3000/*'));
        } else {
            console.log('Please input a url');
        };
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div className="form-wrapper">
                <form>
                    <input type="text" onChange={this.handleChange} name="url" placeholder="Put URL here" />
                    <button type="submit" id="submit-btn">Shorten URL</button>
                </form>
            </div>
        );
    }
}

export {shortenURL}