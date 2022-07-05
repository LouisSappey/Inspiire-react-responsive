import styled from 'styled-components';
import React from 'react';
import arbre from '../../assets/arbre.png';
import elipse from '../../assets/elipse.png';

const Imageraison = () => {
    return (
        <div>
            <Poscercle/>
            <Posarbre/>
        </div>
    );
};

const Posarbre = styled.div`
    position: absolute;
    width: 819px;
    height: 1000px;
    margin-left: 56.8%;
    margin-top: -33%;
    background-image: url(${arbre});
    background-size: cover;
    text-align: right;
`;

const Poscercle = styled.div`
    position: absolute;
    width: 514px;
    height: 790px;
    margin-left: 73%;
    margin-top: -33.8%;
    background-image: url(${elipse});
    background-size: cover;
    text-align: right;
`;
export default Imageraison;
