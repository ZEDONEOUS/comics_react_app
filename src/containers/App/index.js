import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import { GlobalStyle } from './App.style';


class App extends Component {
    render() {
        return (
            <Grid fluid>
                <Header/>
                <Content/>
                <Footer/>
                <GlobalStyle/>
            </Grid>
        );
    }
}

export default App;
