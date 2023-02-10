import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  return (
    <HashLoader
      color={'#b5daf4'}
      loading={true}
      cssOverride={{ display: 'block', height: '95vh', margin: '0 auto' }}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
