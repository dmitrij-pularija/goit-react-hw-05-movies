// import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { ReactComponent as IconClear } from '../../img/clear.svg';
import { ReactComponent as IconSearch } from '../../img/search.svg';

// import clear from '../../img/clear.svg';
// import search from '../../img/search.svg';
// import { ReactComponent as Logo } from '../../img/film.svg';

import { Input, Form, Button, Clear } from './Searchbar.styled';

// const Searchbar = ({ formSubmit }) => {
const Searchbar = () => {
  const btnRef = useRef();
  const inpRef = useRef();
  const formRef = useRef();

  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   location.pathname.includes("movies") ? formRef.current.style.display = 'flex' : formRef.current.style.display = 'none';
  // }, [location]);
  useEffect(() => {
    console.log(location.pathname);    
    filter && (location.pathname.endsWith("movies")) && navigate(`/movies/?search=${filter}`);
    (location.pathname.endsWith("movies") || location.pathname.endsWith("movies/")) ? formRef.current.style.display = 'flex' : formRef.current.style.display = 'none';
  }, [filter,location, navigate]);

  const handleSubmit = event => {
    event.preventDefault();
    const {
      filter: { value },
    } = event.target.elements;
    if (value !== filter) {
    setFilter(value);
    value && navigate(`/movies/?search=${value}`);
    console.log(value, filter);
  };
  };

  // const input = document.getElementById('filter');
  // const clrBut = document.getElementById('clr');
  return (
    // <Header>
      // <Logo stroke='white' /><Name>Movies</Name>
      <Form
        ref={formRef}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          ref={inpRef}
          name="filter"
          type="text"
          autoFocus
          placeholder="Search movies"
          onChange={() => {
            if (inpRef.current.value) btnRef.current.style.display = 'flex';
          }}
        />
        <Button type="submit">
          <IconSearch stroke='currentColor' />
        </Button>
        <Clear
          ref={btnRef}
          type="button"
          onClick={() => {
            inpRef.current.value = '';
            btnRef.current.style.display = 'none';
          }}
          title="Сlick to clear filter"
        >
          <IconClear stroke='currentColor' />
        </Clear>
      </Form>
    // </Header>
  );
};

// Searchbar.propTypes = {
//   formSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;
