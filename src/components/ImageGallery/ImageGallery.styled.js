import styled from 'styled-components';

export const Gallery = styled.ul`
  width: 100%;
  height: calc(100сh - 136px);
  margin: 72px auto 0 auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-auto-rows: 220px;
  grid-gap: 12px;
  justify-content: center;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 157px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1200px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 212px;
  }
`;

export const GalleryItem = styled.li`
  width: 100%;
  border-radius: 5px;
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;