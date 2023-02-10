import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Gallery = styled.ul`
  width: 100%;
  // height: calc(100сh - 136px);
  margin-top: 75px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  // grid-template-columns: repeat(auto-fit, 1fr);
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
    // grid-auto-rows: calc((100сh - 90px) / 2);

    // grid-auto-rows: 185px;
  }
`;

export const GalleryItem = styled.li`
position: relative;
display: block;
  width: 100%;
  overflow: hidden;

// height: 100%;
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

export const Link = styled(NavLink)`
  height: 100%;
  width: 100%;
  text-decoration: none;
`;

export const Image = styled.img`
height: 89%;
  // height: calc(100% - 30px);
  width: 100%;
  object-fit: cover;
  // border-radius: 5px;
  border-radius: 5px 5px 0 0;
`;
export const Name = styled.div`
position: absolute;
bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
text-align: center;
  line-height: 1.1;

`;

// export const Header = styled.div`
//   width: 100%;
//   // height: 50%;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   // align-items: center;

//   align-items: flex-start;
//   justify-content: center;
// // justify-content: space-between;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 0.9;
//   color: #3d3c3ca4;
// `;


export const Title = styled.div`
  width: 100%;
height: 11%;
  padding: 0px 2px 3px 2px;
  // height: 10%;

  // height: 50px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  // align-items: flex-start;
justify-content: space-between;
// gap: 5px; 

`;



export const Year = styled.span`
height: 100%;

// width: 100%;
display: flex;
align-items: center;
margin: auto 5px auto 0;
  font-size: 20px;
  font-weight: 700;
  color: #3575f5;
`;

export const Genre = styled.span`
width: 100%;

  padding: 0;
display: flex;
align-items: center;
justify-content: flex-start;
font-size: 14px;
line-height: 1;
color: #0294fc;
`;

export const Reyt = styled.span`
border-radius: 5px;
padding: 2px 5px;
margin: auto 0;
font-weight: 700;
line-height: 1;
font-size: 22px;
color: #ffffff;
background-color: #3575f5;

// width: 100%;
// height: 100%;
// display: flex;
// align-items: center;
  // color: #3d3c3ca4;
`;

// export const Info = styled.div`
//   width: 100%;
//   padding: 0px 2px 3px 2px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;