import noPhoto from '../../img/actor.jpg';
import Notification from '../Notification/Notification';
import {
  Card,
  Photo,
  Name,
  Popularity,
  Birthday,
  Place,
  Biography,
  Param,
  Value,
  Personal,
  Info,
  Text
} from './PersonPage.styled';
const PersonPage = ({ person }) => {
const birthdayData = new Date(person.birthday);

  return (
    <>
{person.name ? (
    <Card>
      <Personal>  
      <Photo
        src={
          person.profile_path
            ? 'https://image.tmdb.org/t/p/w342' + person.profile_path
            : noPhoto
        }
        alt={person.name}
      />
      <Info>
      <Name>{person.name}</Name>
      {person.popularity && <Popularity><Param>Popularity</Param><Value>{person.popularity.toFixed(2)}</Value></Popularity>}
      {person.birthday && <Birthday><Param>Birthday</Param><Value>{birthdayData.toLocaleDateString()}</Value></Birthday>}
      {person.place_of_birth && <Place><Param>Place of birth</Param><Value>{person.place_of_birth}</Value></Place>}
      </Info>
      </Personal>
      {person.biography && <Biography>
      <Param>Biography:</Param>  
      <Text>{person.biography}</Text></Biography>}
    </Card>
    ) : <Card><Notification message={'Something went wrong, please try again.'}/></Card>}
    </>
  );
};
export default PersonPage;
