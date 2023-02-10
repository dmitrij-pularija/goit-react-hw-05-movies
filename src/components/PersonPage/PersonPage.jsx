import noPhoto from '../../img/actor.jpg';
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
  Info
} from './PersonPage.styled';
const PersonPage = ({ person }) => {
const birthdayData = new Date(person.birthday);

  return (
    <>
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
      <Popularity><Param>Popularity</Param><Value>{person.popularity && person.popularity.toFixed(2)}</Value></Popularity>
      <Birthday><Param>Birthday</Param><Value>{birthdayData.toLocaleDateString()}</Value></Birthday>
      <Place><Param>Place of birth</Param><Value>{person.place_of_birth}</Value></Place>
      <Param>Biography</Param>
      </Info>
      </Personal>
      <Biography>{person.biography}</Biography>
    </Card>
    </>
  );
};
export default PersonPage;
