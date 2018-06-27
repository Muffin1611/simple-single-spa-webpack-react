import React, { Component } from 'react';
import './concerts.styles.css';

var axios = require('axios');

class Concerts extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            concerts: []
        }
    }

    componentDidMount() {
        var th = this;
        this.serverRequest =
            axios.get('/static/concerts.json')
                .then(function(result) {
                    th.setState({
                        concerts: result.data.concerts
                    });
                })
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }


    render(){
        return (
            <div className="container text-center">
                <h2>Konzerte</h2><br/><br/><br/>
                <div className="row">
                    {this.state.concerts.map(function(concert) {
                        return (
                            <div className="col-sm-4">
                                <a className="concertItem" href="#" key={concert.id}>
                                    <p><strong>
                                        {concert.name}
                                    </strong><br/>
                                    </p>
                                    <img className="concertImg" src='/static/bandmember.jpg' alt="Random Name" width="150" height="150"></img>
                                </a>
                                <p>
                                    {concert.events[0]}<br/>
                                    {concert.events[1]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )

    }
}

export default Concerts;