import styled from 'styled-components';
import React from 'react';
import logo_equipe from '../../assets/valeur_esprit.png';
import logo_diversite from '../../assets/valeurs_diversite.png';
import logo_plaisir from '../../assets/valeurs_plaisir.png';
import logo_humilite from '../../assets/valeurs_humilite.png'

const Titrevaleurs = () => {
    return (
        <div id="valeurs">
            <Postitle>
                <Texttitle>NOS VALEURS</Texttitle>
            </Postitle>
            <Poseequip>
                <img style={{marginLeft:'2rem'}}  src={logo_equipe} height={101} width={135} alt=""/>
                <Textsecond>
                    <br/><br/>𝗟’𝗘𝘀𝗽𝗿𝗶𝘁 𝗱’𝗘́𝗾𝘂𝗶𝗽𝗲
                    <br/>Nous encourageons la
                    <br/>bienveillance, l’honnêteté,
                    <br/>la confiance, la
                    <br/>fidélité, la générosité, le partage,
                    <br/>l'entraide, le goût
                    <br/>des autres pour réussir
                    <br/>ensemble.</Textsecond>
            </Poseequip>
            <Posevaleurs>
                <img style={{marginLeft:'4rem'}} src={logo_diversite} height={91} alt=""/>
                <Textsecond>
                    <br/><br/>𝗟𝗮 𝗗𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝗲́
                    <br/>Nous pensons que la
                    <br/>diversité est une richesse
                    <br/>pour l’entreprise et la
                    <br/>société et nous prônons
                    <br/>l'égalité des chances et
                    <br/>l'inclusion.
                </Textsecond>
            </Posevaleurs>
            <Poseplaisr>
                <img style={{marginLeft:'2rem'}} src={logo_plaisir} height={101} alt=""/>
                <Textsecond>
                    <br/><br/>𝗟𝗲 𝗣𝗹𝗮𝗶𝘀𝗶𝗿
                    <br/>Nous favorisons le fait
                    <br/>d’être fier de ce que l’on
                    <br/>fait, de se sentir bien dans
                    <br/>l’entreprise et de ne pas
                    <br/>oublier de prendre le
                    <br/>temps de passer
                    <br/>régulièrement de bons
                    <br/>moments ensemble.
                </Textsecond>
            </Poseplaisr>
            <Posehumilite>
                <img style={{marginLeft:'2rem'}}  src={logo_humilite} height={101} alt=""/>
                <Textsecond>
                    <br/><br/>𝗟’𝗛𝘂𝗺𝗶𝗹𝗶𝘁𝗲́
                    <br/>Nous préconisons l’écoute,
                    <br/>la simplicité, la modestie,
                    <br/>la capacité de se remettre
                    <br/>en question et de
                    <br/>comprendre les autres, les
                    <br/>cultures, les coutumes et
                    <br/>son environnement.
                </Textsecond>
            </Posehumilite>
        </div>
    );
};

const Postitle = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 5%;
`;

const Poseequip = styled.div`
    position: absolute;
    margin-left: 10%;
    margin-top: 15%;
`;

const Posevaleurs = styled.div`
    position: absolute;
    margin-left: 30%;
    margin-top: 15%;
`;

const Poseplaisr = styled.div`
    position: absolute;
    margin-left: 50%;
    margin-top: 15%;
`;

const Posehumilite = styled.div`
    position: absolute;
    margin-left: 70%;
    margin-top: 15%;
`;

const Texttitle = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 70px;
    font-family: 'Greycliff CF';
`;

const Textsecond = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 16px;
    font-family: 'Nunito Sans';
`;

export default Titrevaleurs;
