import styled from 'styled-components';
import React from 'react'


const Titleassocies = () => {
    return (
      <div>
        <Postitle>
            <Texttitle>LES ASSOCIÉS</Texttitle>
        </Postitle>
        <PosText>
            <Textsecond>
                Engagés avant tout pour nos clients, nos collaborateurs mais aussi, à notre petite
                <br/>échelle, pour des enjeux environnementaux, sociétaux et éthiques !</Textsecond>
        </PosText>
      </div>
    )
}

const Postitle = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 5%;
`;

const PosText = styled.div`
    position: absolute;
    margin-left: 13%;
    margin-top: 12%;
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
    font-size: 24px;
    font-family: 'Nunito Sans';
`;

export default Titleassocies;
