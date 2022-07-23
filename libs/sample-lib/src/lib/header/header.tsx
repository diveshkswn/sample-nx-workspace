import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled('div')(
  (props) => css`
    width: 100vw;
    height: 78px;
    color: rgba(55, 65, 81, 1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 0px 10px;
    background-color: aliceblue;
    position: fixed;
    top: 0px;
    /* From https://css.glass */
    background: rgba(18, 42, 76, 0.24);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    & > h1 {
      font-weight: 900;
      font-size: 24px;
    }
    @media (max-width: 1024px) {
      & > h1 {
        text-align: center;
        font-size: 12px;
      }
    }
  `
);
export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>Welcome to Sample-nextjs-app with Nx.js!</h1>
    </StyledHeader>
  );
}

export default Header;
