import React from "react";
import styled from "styled-components";

const Descript = () => {
  return (
    <Wrapper>
      <Title>
          Hello, 
          <span>I'm Nicole</span>
      </Title>
      <Description>
        I'm a front-end web developer and open-source enthusiast with a love for clean code and accessible design, in love with pair-programming and remote work. 
        Fluent in multiple languages, frameworks, and technologies, and capable of ramping up quickly and efficiently and mentoring junior developers.
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  gap: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: semi-bold;
  font-size: 20px;
  margin-bottom:25px;
`;

export default Descript;
