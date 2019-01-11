import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import StarRatings from 'react-star-ratings';

import {
    Comic,
    ComicTitle,
    ComicImage,
    NewComic
} from './Content.style';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            comic_data: null
        };

        this.changeRating = this.changeRating.bind(this);
        this.getComic = this.getComic.bind(this);
    }

    componentDidMount() {
        this.getComic();
    }

    getComic(){
        let number = Math.floor(Math.random() * 1000) + 1

        this.setState({
            rating: 0,
            comic_data: null
        });

        fetch('https://xkcd.now.sh/' + number, {
            crossDomain:true,
            type: 'GET',
        }).then( response => response.json()).then(
            data => this.setState({ 
                comic_data: data 
            })
        );
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    render(){
        return(
            <div>
                { this.state.comic_data ? (
                    <Comic>
                        <Col md={12}>
                            <Row>
                                <Col md={6}>
                                    <ComicImage src={ this.state.comic_data.img }></ComicImage>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={12}>
                                            <ComicTitle>
                                                { this.state.comic_data.title }
                                            </ComicTitle>
                                        </Col>
                                        <Col md={12}>
                                            <StarRatings
                                                rating={ this.state.rating }
                                                starRatedColor="yellow"
                                                changeRating={ this.changeRating }
                                                numberOfStars={ 5 }
                                                name='comic-rating'
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <NewComic>
                                        <button onClick={this.getComic}>
                                            Load New
                                        </button>
                                    </NewComic>
                                </Col>
                            </Row>
                        </Col>
                    </Comic>
                ) : (
                    <Comic>
                        <h1> Loading ... </h1>
                    </Comic>
                )}
            </div>
        );
    }
}

export default Content;
