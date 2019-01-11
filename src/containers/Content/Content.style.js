import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const Comic = styled(Row)`
    text-align:center;
    width:70%;
    padding:2em 5em;
    display:block;
    margin:0 auto;
`;

export const ComicTitle = styled.h1`
    font-weight:bold;
    margin-bottom:1em;
    display:inline-block;
    border-bottom:3px solid #000;
`;

export const ComicImage = styled.img`
    width:auto;
    display:block;
    margin:0 auto;
    max-width:100%;
`;

export const NewComic = styled.div`
    border-top:1px solid #000;
    margin-top:30px;

    & > button{
        color:#000;
        cursor:pointer;
        margin:15px;
        display:inline-block;
        background:#519657;
        padding:15px;
        font-size:1.2em;
        border:1px solid #000;
    }
`;
