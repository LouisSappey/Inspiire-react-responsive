import styled from 'styled-components';
import React from 'react'
import Franck_black from '../../assets/franck_black.png';
import Nicolas_black from '../../assets/nicolas_black.png';
import Linkedin_Franck from '../../assets/linkedin_franck.png';
import Linkedin_Nicolas from '../../assets/linkedin_nicolas.png';
import Rond_Nicolas from '../../assets/rond_nicolas.svg';
import Rond_Franck from '../../assets/rond_franck.svg';

const Patron = () => {
    return (
      <div>
        <RondNicolas src={Rond_Nicolas}/>
        <RondFranck src={Rond_Franck}/>
        <PosFranck src={Franck_black}/>
        <PosFranckinfo>
            <Textsecond>
                Franck Marty
                <br/>Co-fondateur
                <br/>Tel : 06 62 06 98 97
                <br/>Mail : fmarty@inspiire.fr
                <br/><br/>
                <a href="https://www.linkedin.com/in/franck-marty-7596142a/">
                    <img src={Linkedin_Franck} height={61} width={61} alt=""/>
                </a>
                </Textsecond>
        </PosFranckinfo>
        <PosTextFrank>
            <Textparagraphe>
                Inspiire est une entreprise pensée pour le 𝗯𝗶𝗲𝗻𝗲̂𝘁𝗿𝗲, la
                <br/>quête de 𝗰𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲 mais aussi de 𝘀𝗲𝗻𝘀. Si
                <br/>vous désirez rejoindre une communauté
                <br/>passionnée et solidaire, n’hésitez pas à nous
                <br/>contacter !
            </Textparagraphe>
        </PosTextFrank>
        <PosNicolas src={Nicolas_black}/>
        <PosNicolaskinfo>
            <Textsecond>
                Nicolas Sappey
                <br/>Co-fondateur
                <br/>07 86 00 43 19
                <br/>nsappey@inspiire.fr
                <br/><br/>
                <a href="https://www.linkedin.com/in/nicolas-sappey-8228361a/">
                    <img src={Linkedin_Nicolas} height={61} width={61} alt=""/>
                </a>
            </Textsecond>
        </PosNicolaskinfo>
        <PosTextNicolas>
            <Textparagraphe>
            Notre ADN : 𝗧𝗲𝗰𝗵 𝗛𝘂𝗺𝗮𝗻 & 𝗣𝗹𝗮𝗻𝗲𝘁 ! Apporter le
            <br/>meilleur en terme technologique tout en mettant l’Humain
            <br/>et notre Planète au cœur de notre raison d’être.
            </Textparagraphe>
        </PosTextNicolas>
      </div>
    )
}

// Partie Franck
const PosFranck = styled.img`
    position: absolute;
    margin-left: 10%;
    margin-top: 20%;
    width: 20%;
    height: 33%;
`;

const PosFranckinfo = styled.div`
    position: absolute;
    margin-left: 30%;
    margin-top: 26%;
`;

const PosTextFrank = styled.div`
    position: absolute;
    margin-left: 10%;
    margin-top: 40%;
`;

const RondFranck = styled.img `
    position: absolute;
    margin-left: 11.3%;
    margin-top: 20.5%;
    height: 26%;
`;

// Partie Nicolas

const PosNicolas = styled.img`
    position: absolute;
    margin-left: 75%;
    margin-top: 24%;
    width: 20%;
    height: 33%;
`;

const PosNicolaskinfo = styled.div`
    position: absolute;
    margin-left: 61%;
    margin-top: 32%;
`;

const PosTextNicolas = styled.div`
    position: absolute;
    margin-left: 61%;
    margin-top: 45%;
`;

const RondNicolas = styled.img `
    position: absolute;
    margin-left: 80.1%;
    margin-top: 27%;
    height: 26%;
`;
// Police de texte

const Textsecond = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 24px;
    font-weight: 2000;
    font-family: 'Nunito Sans';
`;

const Textparagraphe = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 24px;
    font-family: 'Lora';
`;

export default Patron;
