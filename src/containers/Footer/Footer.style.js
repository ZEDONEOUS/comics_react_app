import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const FooterCredits = styled(Row)`
    background:#509556;

    & p{
        padding:10px;
        margin:0;
        color: #fff;
        font-size:1.8em;
        font-family: 'Libre Barcode 128 Text', cursive;
        text-align:right;
        text-transform:uppercase;
    }
`;
