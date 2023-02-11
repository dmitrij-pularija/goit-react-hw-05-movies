import noPhoto from '../../img/actor.jpg';
import getMovies from '../../services/Api';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
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
const PersonPage = ({personId}) => {
  const [person, setPerson] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (personId) {
      setState(prevState => {
        return { ...prevState, loading: true };
      });

      getMovies('person', 1, personId)
        .then(results => setPerson(results))
        .catch(() => {
          setState(prevState => {
            return { ...prevState, error: true };
          });
        })
        .finally(() =>
          setState(prevState => {
            return { ...prevState, loading: false };
          })
        );
    }
  }, [personId]);


const birthdayData = new Date(person.birthday);
const { loading, error } = state;
console.log(person);
console.log(loading, error);
  return (
    <>
    <Card>
    {loading && <Loader />}
{!loading && person ? (
  <>
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
      {person.biography && <Biography><Param>Biography:</Param> <Text>{person.biography}</Text></Biography>}
      </>
      ) : (!loading &&
              <Notification
          message={ error ? 'Something went wrong, please try again.' : 'Cast info not found' }
        />)}
    </Card>
    </>
  );
};
export default PersonPage;
