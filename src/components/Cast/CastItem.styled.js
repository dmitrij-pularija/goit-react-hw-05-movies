import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Gallery = styled.ul`
  width: 100%;
  margin: 15px 0 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  grid-auto-rows: auto-fit;
  grid-gap: 15px;
  justify-content: center;

  @media screen and (min-width: 372px) {
    grid-template-columns: repeat(2, 1fr);
    // grid-auto-rows: 185px;
  }

  @media screen and (min-width: 729px) {
    grid-template-columns: repeat(3, 1fr);
    // grid-auto-rows: 185px;
  }

  @media screen and (min-width: 1101px) {
    // max-width: 1230px;
    grid-template-columns: repeat(5, 1fr);
    // grid-auto-rows: calc((100сh - 120px) / 3);

    grid-auto-rows: 225px;
  }
`;

export const GalleryItem = styled.li`
position: relative;
display: block;
  width: 100%;
  overflow: hidden;

height: 100%;
  border-radius: 5px;
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  // box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    // 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`

display: block;
width: 100%;
height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

`;

export const Title = styled.div`
position: absolute;
bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
background-color: #b5daf4bb;
`;

export const Name = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
// justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
//   color: #3d3c3ca4;
`;

export const Character = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
// justify-content: space-between;
//   font-weight: 700;
  font-size: 12px;
  color: #ffffff;
//   line-height: 1;
//   color: #3d3c3ca4;
`;