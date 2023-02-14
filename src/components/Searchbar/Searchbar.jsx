import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Input, Form, Button, Clear } from './Searchbar.styled';
import { ReactComponent as IconClear } from '../../img/clear.svg';
import { ReactComponent as IconSearch } from '../../img/search.svg';

const Searchbar = () => {
  const [filter, setFilter] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef();
  const btnRef = useRef();
  const inpRef = useRef();

  useEffect(() => {
    if (location.pathname.endsWith('movies')) {
      formRef.current.style.display = 'flex';
      const search = searchParams.get('search');
      setFilter(search);
      inpRef.current.value = search;
    } else {
      formRef.current.style.display = 'none';
      setFilter('');
    }
  }, [location, filter, navigate, searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    const {
      filter: { value },
    } = event.target.elements;
    if (value !== filter) {
      setFilter(value);
      value && navigate(`/movies?search=${value}&page=1`);
    }
  };

  return (
    <Form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
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
        <IconSearch stroke="currentColor" />
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
        <IconClear stroke="currentColor" />
      </Clear>
    </Form>
  );
};

export default Searchbar;