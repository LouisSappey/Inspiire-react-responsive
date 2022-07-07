import styled from 'styled-components';
import React from 'react';
import background from '../../assets/identité.png';
import Titreidentités from './titre_identités';

const Containeridentités= styled.div`
    height:  145vh;
    background-image: url(${background});
    background-size: cover;
    margin-top: 2%;
`;

const Identités = () => {
    return (
        <Containeridentités>
            <Titreidentités/>
        </Containeridentités>
    );
};

export default Identités;
