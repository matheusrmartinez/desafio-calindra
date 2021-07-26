import styled from 'styled-components';

export const TopContainer = styled.div`
  background-color: var(--background-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;

  span {
    font-size: 82.2px;
    line-height: 96px;
    font-weight: 700;
    color: var(--brown);
  }

  img {
    background-color: var(--background-gray);
    margin-left: 2rem;
  }
`;

export const BottomContainer = styled.div`
  background-color: var(--background-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;
`;
