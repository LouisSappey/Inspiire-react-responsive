import styled from 'styled-components';
import React from 'react';

const Titleexpertise = () => {
    return (
        <div id="expertise">
            <Postitle>
                <Texttitle>NOS EXPERTISES</Texttitle>
            </Postitle>
            <Possoustitle>
                <Text>RESTER A LA POINTE DE LA TECHNOLOGIE EN <br/>DEV AGILE & PRODUCT MANAGEMENT</Text>
            </Possoustitle>
        </div>
    );
};

const Postitle = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 10%;
`;

const Possoustitle = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 2%;
`;

const Texttitle = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 70px;
    font-family: 'Greycliff CF';
`;

const Text = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: #7E46AD;
    font-size: 32px;
    font-family: 'Cairo';
`;


export default Titleexpertise;
