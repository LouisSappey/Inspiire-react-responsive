import styled from 'styled-components';
import React from 'react';
import logo_matrice from '../../assets/matrice.png';
import logo_100 from '../../assets/100%.png';
import logo_diplome from '../../assets/diplome.png'
import logo_mentioning from '../../assets/mentoring.png';
import logo_running from '../../assets/running.png';

const Imagecarriere = () => {
    return (
        <div>
            <Posmatrice>
                <img src={logo_matrice} height={73} width={92} alt=""/>
            </Posmatrice>
            <Posdiplome>
                <img src={logo_diplome} height={73} width={92} alt=""/>
            </Posdiplome>
            <Posmentor>
                <img src={logo_mentioning} height={73} width={92} alt=""/>
            </Posmentor>
            <Pos100>
                <img src={logo_100} height={73} width={92} alt=""/>
            </Pos100>
            <Posrunning>
                <img src={logo_running} height={73} width={92} alt=""/>
            </Posrunning>
        </div>
    );
};

const Posmatrice = styled.div`
    position: absolute;
    margin-left: 7%;
    margin-top: 26.5%;
`;

const Posdiplome = styled.div`
    position: absolute;
    margin-left: 7%;
    margin-top: 31%;
`;

const Posmentor = styled.div`
    position: absolute;
    margin-left: 7%;
    margin-top: 35.3%;
`;

const Pos100 = styled.div`
    position: absolute;
    margin-left: 7%;
    margin-top: 39.8%;
`;

const Posrunning = styled.div`
    position: absolute;
    margin-left: 7%;
    margin-top: 45%;
`;

export default Imagecarriere;