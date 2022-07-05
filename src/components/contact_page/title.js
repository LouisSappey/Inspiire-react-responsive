import styled from 'styled-components';
import React from "react";
import '../../App.css';
import two_point from '../../assets/deux-points.png'

const Titrecontact = () => {
    return (
        <div>
            <Twopoint>
                <img src={two_point} height={163.5} width={325} alt=""/>
            </Twopoint>
            <Postitre>
                <Titretext>Contact</Titretext>
                <Titretextsmaller> N'hesitez pas à nous contacter !</Titretextsmaller>
            </Postitre>
        </div>
    );
};

const Twopoint = styled.div`
    top: 3rem;
    position: relative;
    width: 100%;
    text-align: center;
`;

const Postitre = styled.div`
    top: 9rem;
    width: 27%;
    height: 10%;
    flex-direction: column;
    position: relative;

`;

const Titretext = styled.a`
    padding: 0rem 7rem;
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 55px;
    font-family: 'Greycliff CF';
`;

const Titretextsmaller = styled.a`
    padding: 0rem 7rem;
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    font-size: 30px;
    color: black;
    font-size: 20px;
    font-family: 'Cairo';
`;

export default Titrecontact;
