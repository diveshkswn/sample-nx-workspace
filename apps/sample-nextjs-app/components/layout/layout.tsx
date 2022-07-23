import styled from 'styled-components';
import { Header } from '@sample-nx-workspace/sample-lib';
//npx nx g @nrwl/next:component Header --project=sample-lib

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  margin-top: 80px;
`;

export function Layout(props: LayoutProps) {
  return (
    <StyledLayout>
      <Header></Header>
      {props.children}
    </StyledLayout>
  );
}

export default Layout;
