import styled from 'styled-components';
import React from 'react';
import Titrecarriere from './titre_carriere';
import Imagecarriere from './image_carriere';
import background from '../../assets/gestion_de_carriere_fond.png';
import Vie from '../../assets/background_vie_interne.png';

const Containercarriere= styled.div`
    height:  125vh;
    background-image: url(${background});
    background-size: 100%;
`;

const ImageVie = styled.img `
    width: 100%;
    height: 75%;
    margin-top: 58%;
`;

const Carriere = () => {
    return (
        <Containercarriere>
            <Titrecarriere/>
            <Imagecarriere/>
            <ImageVie src={Vie}/>
        </Containercarriere>
    );
};

export default Carriere;
