import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #3d3c3ca6;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: none;
  outline: none;
  border: 1px solid #c0bcbca6;
  text-align: left;
  font: inherit;
  margin: 0;
  padding: 0 30px;
  transition: box-shadow var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    outline-color: #c0bcbca6;
    border-color: #c0bcbca6;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  left: -7px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  color: #3d3c3ca6;
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover,
  &:focus {
    color: #3575f5;
    transform: scale(1.3);
  }
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Clear = styled.button`
  position: absolute;
  width: 38px;
  height: 38px;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #3d3c3ca6;
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover,
  &:focus {
    color: #f32013;
    transform: scale(1.3);
  }
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
`;