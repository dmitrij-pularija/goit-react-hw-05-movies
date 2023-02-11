import noPhoto from '../../img/actor.jpg';
import getData from '../../services/Api';
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
  Text,
} from './PersonPage.styled';
const PersonPage = ({ personId }) => {
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

      getData('person', 1, personId)
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

  const { loading, error } = state;
  const {
    profile_path,
    name,
    popularity,
    birthday,
    place_of_birth,
    biography,
  } = person;
  const birthdayData = new Date(birthday);

  return (
    <>
      <Card>
        {loading && <Loader />}
        {!loading && person ? (
          <>
            <Personal>
              <Photo
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w342' + profile_path
                    : noPhoto
                }
                alt={name}
              />
              <Info>
                <Name>{person.name}</Name>
                {popularity && (
                  <Popularity>
                    <Param>Popularity</Param>
                    <Value>{popularity.toFixed(2)}</Value>
                  </Popularity>
                )}
                {birthday && (
                  <Birthday>
                    <Param>Birthday</Param>
                    <Value>{birthdayData.toLocaleDateString()}</Value>
                  </Birthday>
                )}
                {place_of_birth && (
                  <Place>
                    <Param>Place of birth</Param>
                    <Value>{place_of_birth}</Value>
                  </Place>
                )}
              </Info>
            </Personal>
            {biography && (
              <Biography>
                <Param>Biography:</Param> <Text>{biography}</Text>
              </Biography>
            )}
          </>
        ) : (
          !loading && (
            <Notification
              message={
                error
                  ? 'Something went wrong, please try again.'
                  : 'Cast info not found'
              }
            />
          )
        )}
      </Card>
    </>
  );
};
export default PersonPage;