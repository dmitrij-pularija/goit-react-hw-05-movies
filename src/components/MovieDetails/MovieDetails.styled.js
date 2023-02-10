import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardDetails = styled.div`
position: relative;
  width: 850px;
min-height: 500px;
  margin: 75px auto 15px auto;
  padding: 30px 15px 15px 15px;
//   height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
justify-content: center;
// border: 1px solid black;
border-radius: 10px;
background-color: #ffff0910;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

`;

export const Poster = styled.div`
position: relative;
display: flex;
margin-top: 10px;
height: 100%;
width: 450px;
// object-fit: cover;
// border-radius: 5px;
`;

export const Image = styled.img`
width: auto;
height: auto;
object-fit: cover;
border-radius: 5px;
`;


export const Play = styled.button`
position: absolute;
width: 70px;
height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
// bottom: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1) rotate(0);

  // left: 105px;
  background-color: #b5daf482;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    // transform: scale(1.05);
    background-color: #3575f5;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;



export const MovieInfo = styled.div`
  width: 100%;
  margin-left: 15px;
  height: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
justify-content: center;
`;
export const Name = styled.div`
  width: 100%;
  // display: flex;
  // align-items: flex-start;
  // justify-content: flex-start;
  font-weight: 700;
  font-size: 32px;
`;

export const List = styled.ul`
margin: 0;
padding: 0;
gap: 10px;

  width: 100%;
  display: flex;
  flex-direction: column;

  // align-items: flex-start;
  // justify-content: flex-start;
  font-size: 16px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
`;


export const Param = styled.div`
font-weight: 700;
  width: 30%;
`;

export const Value = styled.div`
  width: 70%;
`;

export const Overview = styled.div`
  width: 100%;
text-align: justify;
`;
export const Url = styled.div`
  width: 100%;
text-align: left;
`;

// export const LinkCast = styled(NavLink)`
//   text-decoration: none;
//   &.active {
//     color: #3d3c3ca4;
//   }
// `;

export const Link = styled(NavLink)`
  text-decoration: none;
font-weight: 700;


  &.active {
    color: #3d3c3ca4;
  }
`;

// export const LinkReturn = styled(NavLink)`
//   text-decoration: none;

//   &.active {
//     color: #3d3c3ca4;
//   }
// `;

export const Close = styled(NavLink)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: inherit;
  border: 1px solid #212121;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  &:focus,
  &:hover {
    transform: scale(1.05);
    border: 1px solid #f32013;
    // color: #f32013;
  // fill: #f32013;
  // stroke: #f32013;
  }
`;

export const IconClose = styled.img`
  pointer-events: none;
  // fill: #f32013;
  // stroke: currentColor;
  // fill: currentColor;
`;

export const Add = styled.div`
  width: 100%;
  // margin-top: 15px;
//   height: 50px;
  display: block;
  // flex-direction: column;
  // align-items: baseline;
// justify-content: center;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  // flex-direction: column;
  // align-items: baseline;
// justify-content: center;
`;

export const Vote = styled.span`
border-radius: 5px;
padding: 2px 5px;
color: #ffffff;
background-color: #3575f5;
// background-color: #b5daf4;
font-weight: 700;
`;