import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardDetails = styled.div`
  position: relative;
  width: 850px;
  min-height: 500px;
  margin: 75px auto 15px auto;

  padding: 30px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  border-radius: 10px;
  background-color: #ffff0910;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Poster = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 450px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1) rotate(0);

  background-color: #b5daf482;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
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
  font-weight: 700;
  line-height: 1;
  font-size: 32px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  gap: 10px;

  width: 100%;
  display: flex;
  flex-direction: column;
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

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: #3d3c3ca4;
  }
`;

export const Close = styled(NavLink)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: 1px solid #212121;
  color: #212121;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.05);
    border: 1px solid #f32013;
    color: #f32013;
  }
`;

export const Add = styled.div`
  width: 100%;
  display: block;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
`;

export const Vote = styled.span`
  border-radius: 5px;
  padding: 2px 5px;
  color: #ffffff;
  background-color: #3575f5;
  font-weight: 700;
`;