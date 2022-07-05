import styled from 'styled-components';
import React from 'react';
import logocouleurs from '../../assets/logo_couleurs.png'
import two_point from '../../assets/deux-points.png'

const Titleexpertise = () => {
    return (
        <div>
            <Postitle>
                <Texttitle>NOS EXPERTISES</Texttitle>
            </Postitle>
            <Possoustitle>
                <Text>RESTER A LA POINTE DE LA TECHNOLOGIE EN <br/>DEV AGILE & PRODUCT MANAGEMENT</Text>
            </Possoustitle>
            <Poslogo>
                <img src={logocouleurs} height={401} width={989} alt=""/>
            </Poslogo>
            <Twopoint>
                <img src={two_point} height={163.5} width={325} alt=""/>
            </Twopoint>
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

const Poslogo = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 5%;
`;

const Twopoint = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 5%;
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
