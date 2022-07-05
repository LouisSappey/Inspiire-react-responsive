import styled from 'styled-components';
import triangle from '../../assets/forme.svg';

const Triangle = () => {
    return (
      <div>
          <Trianglepos>
            <img src={triangle} height={310} width={1919} alt=""/>
          </Trianglepos>
      </div>
    );
  };


const Trianglepos = styled.div`
    top: 86.7%;
    overflow: hidden;
    position: absolute;
    left: -1.18%;

`;

export default Triangle;
