import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Gallery = styled.ul`
  width: 100%;
  margin: 15px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const GalleryItem = styled.li`
display: flex;
flex-direction: column;
  width: 100%;
  padding: 15px;
  margin: 0;
  color: #757373;
  border-radius: 5px;
background-color: #ffffff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Info = styled.div`
display: flex;
align-items: center;
justify-content: flexx-start;
gap: 15px;
font-weight: 700;
font-size: 26px;
// flex-direction: column;
`;

export const Content = styled.div`
display: flex;
`;

export const Back = styled(NavLink)`
position: fixed;
bottom: 20px;
right: calc((100vw - 850px) / 4);
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
  background-color: #b5daf4;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.05);
  background-color: #3575f5;
  }
`;
export const Image = styled.img`
// margin-top: 10px;
height: 50px;
width: 50px;
// border-radius: 50%;
object-fit: cover;
border-radius: 5px;
transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(3);
  }
`;

// export const Author = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// font-weight: 700;
// font-size: 26px;
// `;

// export const Data = styled.div`
// display: flex;
// align-items: flex-end;
// justify-content: center;
// // font-weight: 700;
// font-size: 18px;
// `;