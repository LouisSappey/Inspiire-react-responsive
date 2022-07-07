import styled from 'styled-components';
import React from 'react';
import Titleexpertise from './titre_expertise';
import Slider from './slider';
import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const config = [
  {
      title: 'logo_one',
      typeof: '*.png',
      image: 'https://i.postimg.cc/QthtNLBf/icone-black.jpg',
  },
  {
    title: 'logo_two',
    typeof: '*.png',
    image: 'https://i.postimg.cc/5tgcvjNW/logo-entreprise.png',
},
]

const Containerexpertise = styled.div`
  height:  100vh;
`;

const Expertise = () => {
    return (
      <Containerexpertise>
        <Globalstyle/>
        <Titleexpertise/>
        <Slider config={config}/>
      </Containerexpertise>
    );
};

export default Expertise;