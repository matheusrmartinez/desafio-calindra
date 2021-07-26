import styled from 'styled-components';

export const Container = styled.main`
  height: 110px;
  background-color: var(--white);
`;

export const Content = styled.div`
  max-width: 1920px;
  background-color: var(--white);
  height: 110px;

  padding: 0 0 0 1.5rem;

  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 61.08px;
  }

  span {
    color: var(--dark-yellow);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 40rem;

  span:first-child {
    font-weight: 700;
    font-size: 41.2px;
  }

  span {
    font-weight: 300;
    font-size: 16.2px;
  }
`;

export const NavContainer = styled.nav`
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 700px;

  a {
    font-weight: 300;
  }
`;
