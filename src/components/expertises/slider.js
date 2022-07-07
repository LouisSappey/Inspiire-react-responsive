import styled from 'styled-components';
import React from 'react'
import { useState } from 'react';
import arrow_right from '../../assets/arrow_right.png';
import arrow_left from '../../assets/arrow_left.png';
import two_point from '../../assets/deux-points.png'


const Slider = ({ config }) => {
    const [imageIndex, setimageIndex] = useState(0);

    const next = () => {
        setimageIndex(state => state += 1);
        if (imageIndex === config.length - 1) setimageIndex(0)

    }
    const prev = () => {
        setimageIndex(state => state -= 1);
        if (imageIndex === 0) setimageIndex(config.length - 1)
    }

  return (
    <div>
        <Posslider>
            <ImageContainer src={config[imageIndex].image}/>
            <Buttonright src={arrow_right} onClick={next}/>
            <Buttonleft src={arrow_left} onClick={prev}/>
        </Posslider>
        <Twopoint>
                <img src={two_point} height={163.5} width={325} alt=""/>
        </Twopoint>
    </div>
  )
}

const Posslider = styled.div`
    top: 50%;
    left: 20%;
    width: 60%;
    height: 30%;
    position: relative;
`;

const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: none;
`;

const Buttonright = styled.img`
    height: 10%;
    top: 40%;
    position: absolute;
    width: 5%;
`;

const Buttonleft = styled.img `
    height: 10%;
    top: 40%;
    right: 100%;
    position: absolute;
    width: 5%;
`;

const Twopoint = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 5%;
`;

export default Slider;
