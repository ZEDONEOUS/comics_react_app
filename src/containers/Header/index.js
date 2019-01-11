import React, { Component } from 'react';

import {
    Head
} from './Header.style';

class Header extends Component{
    render(){
        return(
            <div>
                <Head>
                    <h1> Comics valoration </h1>
                </Head>
            </div>
        );
    }
}

export default Header;
