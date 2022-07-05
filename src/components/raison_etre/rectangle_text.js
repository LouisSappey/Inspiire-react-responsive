import styled from 'styled-components';
import React from 'react';

const Rectangle_raison = () => {
    return (
        <div>
            <PosRectangle>
                <Text>Avoir un 𝗯𝗶𝗹𝗮𝗻 𝗰𝗮𝗿𝗯𝗼𝗻𝗲<br/> 𝗽𝗼𝘀𝗶𝘁𝗶𝗳 𝗱𝗲𝗽𝘂𝗶𝘀 𝗻𝗼𝘁𝗿𝗲 <br/> 𝗰𝗿𝗲́𝗮𝘁𝗶𝗼𝗻</Text>
            </PosRectangle>
            <PosRectanglesecond>
                <Text>Favoriser une <br/>organisation permettant <br/>de préserver le bien-<br/>être de ses <br/>collaborateurs</Text>
            </PosRectanglesecond>
            <PosRectanglethird>
                <Text>Avoir 100% de nos <br/>collaborateurs formés <br/>aux questions d’impact <br/>environnemental et <br/>sensibiliser notre <br/>écosystème</Text>
            </PosRectanglethird>
            <PosRectanglefourth>
                <Text>Créer des partenariats <br/>avec des associations <br/>défendant les droits <br/>humains, la cause animale, <br/>la biodiversité ou le climat.</Text>
            </PosRectanglefourth>
        </div>
    );
};

const PosRectangle = styled.div`
    position: relative;
    display: flexbox;
    justify-content: center;
    text-align: center;
    width: 20%;
    height: 150px;
    padding-top: 4%;
    margin-left: 10%;
    margin-top: 3%;
    border: 3px;
    border-radius: 20px;
    background: linear-gradient(122.69deg, rgba(215, 72, 158, 0.1) 2.38%, rgba(153, 58, 163, 0.1) 40.51%, rgba(56, 36, 171, 0.1) 100%);
    box-shadow: -23px -23px 45px rgba(209, 71, 157, 0.07);
`;

const PosRectanglesecond = styled.div`
    position: relative;
    display: flexbox;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 20%;
    height: 226.8px;
    margin-left: 10%;
    margin-top: 2%;
    border: 3px;
    border-radius: 20px;
    background: linear-gradient(122.69deg, rgba(215, 72, 158, 0.1) 2.38%, rgba(153, 58, 163, 0.1) 40.51%, rgba(56, 36, 171, 0.1) 100%);
    box-shadow: -23px -23px 45px rgba(209, 71, 157, 0.07);
`;

const PosRectanglethird = styled.div`
    position: relative;
    display: flexbox;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 20%;
    height: 226.8px;
    margin-left: 35%;
    margin-top: -25.9%;
    border: 3px;
    border-radius: 20px;
    background: linear-gradient(122.69deg, rgba(215, 72, 158, 0.1) 2.38%, rgba(153, 58, 163, 0.1) 40.51%, rgba(56, 36, 171, 0.1) 100%);
    box-shadow: -23px -23px 45px rgba(209, 71, 157, 0.07);
`;

const PosRectanglefourth = styled.div`
    position: relative;
    display: flexbox;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 20%;
    height: 226.8px;
    margin-left: 35%;
    margin-top: 2%;
    border: 3px;
    border-radius: 20px;
    background: linear-gradient(122.69deg, rgba(215, 72, 158, 0.1) 2.38%, rgba(153, 58, 163, 0.1) 40.51%, rgba(56, 36, 171, 0.1) 100%);
    box-shadow: -23px -23px 45px rgba(209, 71, 157, 0.07);
`;

const Text = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 24px;
    font-weight: gras;
    font-family: 'Nunito Sans';
    overflow-x: 50%;
    overflow-y: 50%;
    text-anchor: middle;
`;

export default Rectangle_raison;
