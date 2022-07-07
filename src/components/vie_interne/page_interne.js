import styled from 'styled-components';
import React from 'react';
import TitleVie from './titre_expertise';

const Containerinterne= styled.div`
    height:  80vh;
    background-color: black;
`;

const Vieinterne = () => {
    return (
        <Containerinterne>
            <TitleVie/>
        </Containerinterne>
    );
};

export default Vieinterne;
