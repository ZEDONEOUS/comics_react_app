import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

import {
    FooterCredits
} from './Footer.style';

class Footer extends Component{
    render(){
        return(
            <div>
                <FooterCredits>
                    <Col md={12}>
                        <p>
                            SanTiago Silva Cartagena.
                        </p>
                    </Col>
                </FooterCredits>
            </div>
        );
    }
}

export default Footer;
