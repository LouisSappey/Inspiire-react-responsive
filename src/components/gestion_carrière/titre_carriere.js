import styled from 'styled-components';
import React from 'react';

const Titrecarriere = () => {
    return (
        <div id="carriere">
            <Postitle>
                <Texttitle>UNE GESTION DE CARRIÈRE SUR-MESURE</Texttitle>
            </Postitle>
            <PosText>
                <Textsecond>
                    Chaque membre de la communauté est directement rattaché aux cofondateurs
                    <br/><br/><br/><br/>Nos métiers étant en constante évolution, nous mettons en place 𝘂𝗻 𝗱𝗶𝘀𝗽𝗼𝘀𝗶𝘁𝗶𝗳 𝗱𝗲 𝗱𝗲́𝘃𝗲𝗹𝗼𝗽𝗽𝗲𝗺𝗲𝗻𝘁
                    <br/>𝗱𝗲 𝗰𝗮𝗿𝗿𝗶𝗲̀𝗿𝗲 𝘀𝘂𝗿-𝗺𝗲𝘀𝘂𝗿𝗲 𝗲𝘁 𝗮̀ 𝗹𝗼𝗻𝗴 𝘁𝗲𝗿𝗺𝗲.
                    <br/>Cela se traduit par la mise en place
                    <br/><br/><br/>d’une matrice de compétences individualisée
                    <br/><br/><br/>de formations continues et d’accompagnements réguliers
                    <br/><br/><br/>de mentors issus des différents pôles d’expertises.
                    <br/><br/><br/>Le choix des missions : 𝟭𝟬𝟬% 𝗱𝗲𝘀 𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀 𝘀𝗼𝗻𝘁 𝗰𝗵𝗼𝗶𝘀𝗶𝗲𝘀 𝗽𝗮𝗿 𝗻𝗼𝘀 𝗲𝘅𝗽𝗲𝗿𝘁𝘀 !
                    <br/><br/><br/>Chaque membre de la communauté peut participer activement au développement de la société
                    <br/>au travers de projets internes allant même jusqu’à 𝗹𝗮 𝗰𝗿𝗲́𝗮𝘁𝗶𝗼𝗻 𝗱𝗲 𝘀𝗮 𝗽𝗿𝗼𝗽𝗿𝗲 𝗲𝗻𝘁𝗿𝗲𝗽𝗿𝗶𝘀𝗲 via notre
                    <br/>startup studio.
                </Textsecond>
            </PosText>
        </div>
    );
};

const Postitle = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 5%;
`;

const PosText = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 15%;
`;

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
    font-size: 20px;
    font-family: 'Nunito Sans';
`;

export default Titrecarriere;
