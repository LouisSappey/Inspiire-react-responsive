import styled from 'styled-components';
import React from 'react';
import Titleraison from './titre';
import Rectangleraison from './rectangle_text';
import Imageraison from './image';


const Containerraison = styled.div`
  height:  100vh;
`;

const Raison = () => {
    return (
      <Containerraison>
          <Titleraison/>
          <Rectangleraison/>
          <Imageraison/>
      </Containerraison>
    );
};

export default Raison;