import styled from 'styled-components';

export const TopContainer = styled.div`
  background-color: var(--background-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
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
    max-width: 100%;
    height: auto;
  }
`;

export const BottomContainer = styled.div`
  background-color: var(--background-blue);
  display: flex;
  max-width: 100%;
  height: 1080px;
  flex-direction: column;

  span {
    font-size: 69.2px;
    line-height: 81.09px;
    font-weight: 700;
    color: var(--white);
    margin-left: 159px;
    margin-top: 449px;
    margin-bottom: 2rem;

    & + span {
      margin-top: 0.5rem;
      font-size: 48.2px;
      line-height: 56px;
      font-weight: 300;
      margin-left: 159px;
      color: var(--white);
    }
  }

  img {
    margin-left: auto;
    margin-top: -700px;
    max-width: 100%;
    height: auto;
  }
`;
