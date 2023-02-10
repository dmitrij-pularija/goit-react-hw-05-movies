import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background-color: #b5daf4;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1230px;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  // width: 100%;
  width: 156px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
`;

export const Text = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;

    @media screen and (min-width: 480px) {
        display: flex;
  }
`;

export const Nav = styled.nav`
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;
//   border-bottom: 1px solid #aaabac;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 3px 0;
//   border-radius: 5px 5px 0 0;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;
  color: #c9c8c8;
  border-bottom: 3px solid #b5daf4;

//   background-color: #f5f5f5;
//   border: 1px solid #aaabac;

//   @media screen and (min-width: 400px) {
//     padding: 8px;
//     font-size: 18px;
//   }

  &:hover,
  &:focus {
  color: #ffffff;
}   
  &.active {
  color: #ffffff;
    border-bottom: 3px solid #ffffff;
  }
`;