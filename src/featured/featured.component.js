import React, { Component } from 'react';
import './featured.styles.css';

var axios = require('axios');

class Featured extends Component {

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

    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src='/static/ny.jpg' alt="New York"></img>
                        <div className="carousel-caption">
                            <h3>Featured</h3>
                        </div>
                    </div>
                    {this.state.concerts.map(function(concert) {
                        if(concert.featured) {
                            return (
                                <div className="item">
                                    <img src={'/static/' + concert.featuredImage} alt="Something"></img>
                                    <div className="carousel-caption">
                                        <h3>{concert.name}</h3>
                                    </div>
                                </div>
                            );}
                    })}
                </div>

                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Featured;