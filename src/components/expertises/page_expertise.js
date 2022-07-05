import styled from 'styled-components';
import React from 'react';
import Titleexpertise from './titre_expertise';
import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const Containerexpertise = styled.div`
  height:  100vh;
`;

const Expertise = () => {
    return (
      <Containerexpertise>
        <Globalstyle/>
        <Titleexpertise/>
      </Containerexpertise>
    );
};

export default Expertise;