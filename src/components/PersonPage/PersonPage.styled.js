import styled from 'styled-components';

export const Card = styled.div`
  width: 850px;
  height: 682px;
  padding: 40px 15px 15px 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  background-color: #ffffeb;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 15px;
  color: #757373;
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  overflow: hidden;
  padding: 0;
`;

export const Name = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  color: #212121;
  padding: 15px 0 10px 0;
`;

export const Popularity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;

export const Birthday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;

export const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;

export const Biography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  max-height: 625px;
  line-height: 1.1;
  gap: 5px;
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  line-height: 1.1;
`;

export const Param = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35%;
  font-weight: 700;
  font-size: 16px;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 65%;
  font-size: 16px;
`;

export const Personal = styled.div`
  // height: 158px;
  height: 100%;
  width: 40%;
  // width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  line-height: 1.2;
  gap: 5px;
`;