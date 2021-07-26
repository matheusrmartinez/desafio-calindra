import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 1920px;
  height: 226px;
  display: flex;
  background-color: var(--background-gray);
  padding-left: 151px;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 38.61px;
    height: 38.61px;
    margin-left: 0.5rem;
  }

  img:first-child {
    margin-left: 0rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 27.2px;
    color: var(--brown);
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 579px;

  span {
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 27.2px;
    color: var(--brown);

    & + span {
      font-weight: 400;
      font-size: 16.2px;
      line-height: 19px;
      color: var(--brown);
    }
  }
`;
