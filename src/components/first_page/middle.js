import React from "react";
import styled from 'styled-components';
import '../../App.css';

const Middle = () => {
    return (
        <div>
        <Middlepos>
            <Middletext>NOTRE MISSION DÉPASSE</Middletext>
        </Middlepos>
        <Middlepossecond>
            <Middletext>LA CRÉATION D’APPLICATIONS WEB & MOBILE</Middletext>
        </Middlepossecond>
        <Decouvrir>
            <Decouvrirtext>Découvrir</Decouvrirtext>
        </Decouvrir>
        </div>
    );
};

const Decouvrir = styled.div`
    position: absolute;
    top: 45rem;
    left: 55rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        top: 50rem;
        left: 15rem;;
    }
`;

const Middlepos = styled.div`
    position: absolute;
    top : 35rem;
    left: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        left: 0rem;
        overflow: hidden;
        flex-direction: column;
        align-items: baseline;
        width: 100%;
    }
`;

const Middlepossecond = styled.div`
    position: absolute;
    top : 37.5rem;
    left: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        overflow: hidden;
        left: 0rem;
        align-items: baseline;
        flex-direction: column;
        width: 100%;
    }
`;

const Middletext = styled.a`
    padding: 0rem 6rem;
    cursor: pointer;
    text-align: justify;
    text-decoration: none;
    font-size: 30px;
    color: white;
    flex-direction: column;
    font-size: 40px;
    font-family: 'Greycliff CF';
`;

const Decouvrirtext = styled.button`
    border: 2px solid white;
    font-size: 1.2em;
    height: 50px;
    width: 140px;
    border-radius: 10px;
    font-family: 'Ubuntu';
`;


export default Middle;