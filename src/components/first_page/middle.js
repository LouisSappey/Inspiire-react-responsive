import React from "react";
import styled from 'styled-components';
import '../../App.css';
import Double_arrow from '../../assets/double_arrow.png';

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
                <Decouvrirtext href="">Découvrir</Decouvrirtext>
            </Decouvrir>
            <PosDoubleArrow>
                <DoubleArrow src={Double_arrow}/>
            </PosDoubleArrow>
        </div>
    );
};

const PosDoubleArrow = styled.div `
    position: absolute;
    top: 85%;
    width: 94%;
    text-align: center;
    align-items: center;
`;

const DoubleArrow = styled.img `
    position: absolute;
    height: 80px;
`;

const Decouvrir = styled.div`
    position: absolute;
    top: 45rem;
    width: 100%;
    text-align: center;
    @media (max-width: 768px) {
        top: 50rem;
    }
`;

const Middlepos = styled.div`
    position: absolute;
    top : 35rem;
    width: 50%;
    text-align: center;
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
    top : 38.5rem;
    width: 76.67%;
    text-align: center;
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
    color: white;
    flex-direction: column;
    font-size: 55px;
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