import styled from 'styled-components';
import React from 'react';

const Titreidentités = () => {
    return (
        <div>
            <Postitle>
                <Texttitle id="identites">NOTRE IDENTITÉ </Texttitle>
            </Postitle>
            <Postext>
                <Text>Nous pensons que la technologie est porteuse de <br/>progrès à partir du moment où nous plaçons l’Humain <br/>au cœur du processus</Text>
            </Postext>
            <Postextsecond>
                <Textsecond>Inspiire accompagne des startups, des PME et des grandes entreprises à concevoir,<br/> réaliser et délivrer les meilleures solutions digitales du marché.<br/>
                Inspiire est avant tout 𝘂𝗻𝗲 𝗮𝘃𝗲𝗻𝘁𝘂𝗿𝗲 𝗵𝘂𝗺𝗮𝗶𝗻𝗲 𝗲𝘁 𝗲𝗻𝘁𝗿𝗲𝗽𝗿𝗲𝗻𝗲𝘂𝗿𝗶𝗮𝗹𝗲. Nous avons <br/>choisi de construire une société par et pour nos collaborateurs.</Textsecond>
            </Postextsecond>
            <Postextthird>
                <Textthird>𝗨𝗻𝗲 𝗲𝗻𝘁𝗿𝗲𝗽𝗿𝗶𝘀𝗲 𝗮𝘂 𝘀𝗲𝗶𝗻 𝗱𝗲 𝗹𝗮𝗾𝘂𝗲𝗹𝗹𝗲 les initiatives, 𝗹𝗮 <br/>bienveillance, 𝗹𝗮 quête de sens 𝘀𝗼𝗻𝘁 𝗲𝗻𝗰𝗼𝘂𝗿𝗮𝗴𝗲́𝗲𝘀.</Textthird>
            </Postextthird>
            <Postextfourth>
                <Textsecond>Avec la création de 𝗻𝗼𝘁𝗿𝗲 𝘀𝘁𝗮𝗿𝘁𝘂𝗽 𝘀𝘁𝘂𝗱𝗶𝗼, chaque membre de la communauté peut <br/>devenir manager de sa société spécialisée dans des domaines qui l’inspirent.</Textsecond>
            </Postextfourth>
        </div>
    );
};

const Postitle = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 20%;
`;

const Postext = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 30%;
`;

const Postextsecond = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 40%;
`;

const Postextthird= styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 47%;
`;

const Postextfourth= styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 52%;
`;

const Texttitle = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 70px;
    font-family: 'Greycliff CF';
`;

const Text = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 22px;
    font-family: 'Cairo';
`;

const Textsecond = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 16px;
    font-family: 'Nunito Sans';
`;

const Textthird = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 23px;
    font-family: 'Nunito Sans';
`;

export default Titreidentités;
