import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { useQuery } from '../../services/hooks';
import Loader from '../Loader/Loader';
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
  Text,
} from './PersonPage.styled';

const PersonPage = ({ personId }) => {
  const {
    state: { loading, error },
    data,
    dataQuery,
  } = useQuery();

  useEffect(() => {
    dataQuery('person', 1, personId);
  }, [personId, dataQuery]);

  const {
    profile_path,
    name,
    popularity,
    birthday,
    place_of_birth,
    biography,
  } = data;
  const birthdayData = new Date(birthday);

  return (
    <>
      <Card>
        {loading && <Loader />}
        {!loading && data ? (
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
                <Name>{name}</Name>
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

PersonPage.propTypes = {
  personId: PropTypes.number.isRequired,
};

export default memo(PersonPage);