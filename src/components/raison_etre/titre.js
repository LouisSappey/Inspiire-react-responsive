import styled from 'styled-components';
import React from 'react';

const Titleraison = () => {
    return (
        <div id="raison">
            <Postitle>
                <Texttitle>NOTRE RAISON D’ÊTRE</Texttitle>
            </Postitle>
            <Postext>
                <Text>Nous avons fait le choix d’être une société à mission c’est-à-dire que, en plus d’être une société experte en <br/> développement Agile & Product Management , nous entendons prendre part à la protection du capital <br/>humain et de la planète.</Text>
            </Postext>
            <Postextsecond>
                <Text>En d’autres termes, nous entendons générer 𝘂𝗻 𝗶𝗺𝗽𝗮𝗰𝘁 𝘀𝗼𝗰𝗶𝗮𝗹 𝗲𝘁 𝗲𝗻𝘃𝗶𝗿𝗼𝗻𝗻𝗲𝗺𝗲𝗻𝘁𝗮𝗹 𝗽𝗼𝘀𝗶𝘁𝗶𝗳 dans <br/>l’exercice de nos activités.<br/><br/>
                    Nous avons ainsi placé 𝟰 𝗲𝗻𝗴𝗮𝗴𝗲𝗺𝗲𝗻𝘁𝘀 au cœur de notre mission qui sont 𝗶𝗻𝘀𝗰𝗿𝗶𝘁𝘀 𝗱𝗮𝗻𝘀 𝗹𝗲𝘀 𝘀𝘁𝗮𝘁𝘂𝘀 𝗱𝗲 𝗹𝗮 <br/>𝘀𝗼𝗰𝗶𝗲́𝘁𝗲́ comme ça c’est clair et défini :</Text>
            </Postextsecond>
        </div>
    );
};

const Postitle = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
`;

const Postext = styled.div`
    position: relative;
    width: 59%;
    height: auto;
    text-align: left;
    margin-left: 10%;
    margin-top: 3%;
`;

const Postextsecond = styled.div`
    position: relative;
    width: 62%;
    height: auto;
    text-align: left;
    margin-left: 10%;
    margin-top: 2%;
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
    color: black;
    font-size: 22px;
    font-weight: gras;
    font-family: 'Nunito Sans';
`;

export default Titleraison;