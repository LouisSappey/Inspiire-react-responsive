import styled from 'styled-components';
import React from "react";
import '../../App.css';
import phone from '../../assets/pictos-telephone.png';
import mail from '../../assets/pictos-mail.png';
import adress from '../../assets/pictos-lieu.png'

const Info = () => {
    return (
        <div style={{
        }}>
            {/* telephone */}
            <Imagephonepos>
                <img src={phone} height={80} width={80} alt=""/>
            </Imagephonepos>
            <Infophonepos>
                <Infotxt>07 86 00 43 19 </Infotxt>
                <Infotxt>06 62 06 98 97</Infotxt>
            </Infophonepos>
            {/* Mail */}
            <Imagecontactpos>
                <img src={mail} height={80} width={80} alt=""/>
            </Imagecontactpos>
            <Infocontactpos>
                <Infotxt>contact@inspiire.fr</Infotxt>
            </Infocontactpos>
            {/* Adresse */}
            <Imageadresspos>
            <img src={adress} height={80} width={80} alt=""/>
            </Imageadresspos>
            <Infoadresspos>
                <Infotxt>112, Avenue Charles de Gaulle 92200 Neuilly-Sur-Seine</Infotxt>
            </Infoadresspos>
        </div>
    );
};

// Position

const Infophonepos = styled.div`
    top: 12rem;
    padding: 0rem 12rem;
    width: 130px;
    flex-direction: column;
    position: relative;
`;

const Imagephonepos = styled.div`
    top: 17rem;
    padding: 0rem 6rem;
    flex-direction: column;
    position: relative;
`;

const Infocontactpos = styled.div`
    top: 12rem;
    padding: 0rem 12rem;
    flex-direction: column;
    position: relative;
`;

const Imagecontactpos = styled.div`
    top: 16rem;
    padding: 0rem 6rem;
    flex-direction: column;
    position: relative;
`;

const Infoadresspos = styled.div`
    top: 11rem;
    width: 300px;
    padding: 0rem 12rem;
    flex-direction: column;
    position: relative;
`;

const Imageadresspos = styled.div`
    top: 16rem;
    padding: 0rem 6rem;
    flex-direction: column;
    position: relative;
`;

// Text

const Infotxt = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 20px;
    font-family: 'Cairo';
`;


export default Info;