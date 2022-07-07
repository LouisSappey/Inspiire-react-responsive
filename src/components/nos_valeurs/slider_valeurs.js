import styled from 'styled-components';
import React from 'react';
import double_quote_left from '../../assets/double_quote_left.png';
import double_quote_right from '../../assets/double_quote_right.png';

const Slidervaleurs = ({ config }) => {
  return (
    <div>
        <PosTitre>
            <TextTitle>
                Nos mottos
            </TextTitle>
        </PosTitre>
        <Posslider>
            <Text>
                Fais ce que tu veux, suis tes intuitions.
                <br/>Mais quoi que tu fasses, fais le bien.
            </Text>
        </Posslider>
        <DoubleQuoteLeft src={double_quote_left}/>
        <DoubleQuoteRight src={double_quote_right} />
    </div>
  )
}


const PosTitre = styled.div`
    width: 100%;
    margin-top: 35%;
    text-align: center;
    position: absolute;
`;

const Posslider = styled.div`
    width: 100%;
    margin-top: 38%;
    text-align: center;
    position: absolute;
`;

const DoubleQuoteLeft = styled.img`
    margin-top: 35%;
    margin-left: 18%;
    position: absolute;
`;

const DoubleQuoteRight = styled.img`
    margin-top: 47%;
    margin-left: 78%;
    position: absolute;
`;

const TextTitle = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 40px;
    font-family: 'Creycliff CF';
`;


const Text = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: black;
    font-size: 96px;
    font-family: 'Savoye LET';
`;

export default Slidervaleurs;
