import styled from 'styled-components';
import React from "react";
import { createGlobalStyle } from 'styled-components';
import Page from './page';
import Background from '../../assets/backgroundmention.avif';

const Globalstyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const Containermention = styled.div`
  height:  25vh;
  background-image: url(${Background});
  background-size: cover;
`;

const Mention = () => {
    return (
      <div>
      <Containermention>
        <Globalstyle/>
        <Page/>
      </Containermention>
      </div>
    );
};

export default Mention;