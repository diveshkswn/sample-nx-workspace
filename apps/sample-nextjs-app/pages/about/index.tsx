import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  height: 100vh;
  width: 100wv;
  display: grid;
  place-items: center;
  font-size: 48px;
  color: black;
`;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <h1>Welcome to About!</h1>
    </StyledAbout>
  );
}

export default About;
