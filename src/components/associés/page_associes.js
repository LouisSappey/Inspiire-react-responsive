import styled from 'styled-components';
import React from 'react';
import Titleassocies from './titre_associes';
import Patron from './patron';

const Containerinterne= styled.div`
    height:  100vh;
    background-color: black;
`;

const Associes = () => {
    return (
        <Containerinterne>
            <Titleassocies/>
            <Patron/>
        </Containerinterne>
    );
};

export default Associes;
