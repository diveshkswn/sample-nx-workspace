import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SampleLibProps {}

const StyledSampleLib = styled.div`
  color: pink;
`;

export function SampleLib(props: SampleLibProps) {
  return (
    <StyledSampleLib>
      <h1>Welcome to SampleLib!</h1>
    </StyledSampleLib>
  );
}

export default SampleLib;
