import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Titleraison from './titre';
import Rectangle_raison from './rectangle_text';
import Imageraison from './image';

const Globalstyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const Containerraison = styled.div`
  height:  100vh;
`;

const Raison = () => {
    return (
      <Containerraison>
          <Titleraison/>
          <Rectangle_raison/>
          <Imageraison/>
      </Containerraison>
    );
};

export default Raison;