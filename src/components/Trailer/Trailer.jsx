import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { useQuery } from '../../services/hooks';
import { memo, useState, useEffect } from 'react';
import { Frame, Box } from './Trailer.styled';
import Loader from '../Loader/Loader';

const Trailer = ({ id }) => {
  const [trailer, setTrailer] = useState([]);
  const {
    state: { loading, error },
    data: { results = [] },
    dataQuery,
  } = useQuery();

  useEffect(() => {
    dataQuery('trailer', 1, id);
  }, [id, dataQuery]);

  !trailer.length &&
    results.length &&
    setTrailer(
      results.filter(res => res.type === 'Trailer' && res.site === 'YouTube')
    );

  return (
    <Box>
      {loading && <Loader />}
      {trailer.length && !loading ? (
        <Frame
          src={'https://www.youtube.com/embed/' + trailer[0].key}
          title="Video player"
          allow="fullscreen"
        ></Frame>
      ) : (
        !loading && (
          <Notification
            message={
              error
                ? 'Something went wrong, please try again...'
                : 'Trailer not found'
            }
          />
        )
      )}
    </Box>
  );
};

Trailer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default memo(Trailer);