import styled from 'styled-components';
import React from 'react'
import logo_meetups from '../../assets/meetups.png';
import logo_sponso from '../../assets/sponso.png';
import logo_agenda from '../../assets/agenda.png';
import logo_afterwork from '../../assets/afterwork.png'
import logo_team from '../../assets/team_building.png';

const TitleVie = () => {
  return (
    <div>
        <Postitle>
            <Texttitle>NOTRE VIE INTERNE</Texttitle>
        </Postitle>
        <PosText>
            <Textsecond>
                Nous organisons 𝗿𝗲́𝗴𝘂𝗹𝗶𝗲̀𝗿𝗲𝗺𝗲𝗻𝘁 des évènements pour nous permettre de 𝗽𝗿𝗼𝗴𝗿𝗲𝘀𝘀𝗲𝗿
                <br/>tout en développant notre réseau au sein de la communauté Inspiire !</Textsecond>
        </PosText>
        <PosMeetups>
            <img src={logo_meetups} height={71} width={71} alt=""/>
            <Textbalise>
                <br/><br/>Meetups
            </Textbalise>
        </PosMeetups>
        <Possponso>
            <img src={logo_sponso} height={71} width={71} alt=""/>
            <Textbalise>
                <br/>Sponsoring de
                <br/>conférences techniques
            </Textbalise>
        </Possponso>
        <Posagenda>
            <img src={logo_agenda} height={71} width={71} alt=""/>
            <Textbalise>
                <br/><br/>Séminaires
                <br/>Annuels
            </Textbalise>
        </Posagenda>
        <Posafterwork>
            <img src={logo_afterwork} height={71} width={71} alt=""/>
            <Textbalise>
                <br/><br/>Afterworks
            </Textbalise>
        </Posafterwork>
        <PosTeam>
            <img src={logo_team} height={71} width={71} alt=""/>
            <Textbalise>
                <br/><br/>Teambuilding
            </Textbalise>
        </PosTeam>
    </div>
  )
}

// Text Position

const Postitle = styled.div `
    margin-top: 3%;
    text-align: center;
    position: absolute;
    width: 100%;
`;

const PosText = styled.div `
    margin-top: 10%;
    margin-left: 25%;
    text-align: center;
    position: absolute;
    width: 52%;
`;

const PosMeetups = styled.div `
    margin-top: 20%;
    margin-left: 18%;
    position: absolute;
    text-align: center;
`;

const Possponso = styled.div `
    margin-top: 20%;
    margin-left: 28%;
    position: absolute;
    text-align: center;
`;

const Posagenda = styled.div `
    margin-top: 20%;
    margin-left: 48%;
    position: absolute;
    text-align: center;
`;

const Posafterwork = styled.div `
    margin-top: 20%;
    margin-left: 62%;
    position: absolute;
    text-align: center;
`;

const PosTeam = styled.div `
    margin-top: 20%;
    margin-left: 76%;
    position: absolute;
    text-align: center;
`;

// Text Police

const Texttitle = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 70px;
    font-family: 'Greycliff CF';
`;

const Textsecond = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 24px;
    font-family: 'Nunito Sans';
`;

const Textbalise = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 24px;
    font-family: 'Lora';
`;

export default TitleVie;