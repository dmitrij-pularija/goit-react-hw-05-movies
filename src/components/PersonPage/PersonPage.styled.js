import styled from 'styled-components';

export const Card = styled.div`
width: 850px;
max-height: 90vh;
// height: 700px;

  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
border-radius: 10px;
background-color: #ffffff;
overflow-x: hidden;
overflow-y: auto;
`;

export const Photo = styled.img`
display: block;
max-width: 100%;
height: auto;
width: 200px;
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
font-size: 32px;
line-height: 1;
padding: 0;
// margin: 20px auto;
`;

export const Popularity = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 100%;
padding: 0;
margin: 0 auto;
gap: 15px;
`;

export const Birthday = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0;
margin: 0 auto;
gap: 15px;

`;

export const Place = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0;
margin: 0 auto;
gap: 15px;

`;

export const Biography = styled.div`
display: flex;
width: 100%;
max-height: 450px;

// height: 100%;
overflow-x: hidden;
overflow-y: auto;
text-align: justify;
line-height: 1.1;
`;

export const Param = styled.span`
display: flex;
justify-content: flex-end;
width: 50%;
font-weight: 700;
`;

export const Value = styled.span`
display: flex;
justify-content: flex-start;
width: 50%;
font-weight: 700;
`;

export const Personal = styled.div`
// height: 158px;
height: 100%;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 15px;
margin-bottom: 15px; 
`;

export const Info = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap: 15px;
`;