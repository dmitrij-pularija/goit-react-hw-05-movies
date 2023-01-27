import PropTypes from 'prop-types';
import clear from '../../img/clear.svg';
import search from '../../img/search.svg';
import { Header, Input, Form, Button, Clear, Icon } from './Searchbar.styled';

const Searchbar = ({ formSubmit }) => {
  const input = document.querySelector('input');
  const clrBut = document.getElementById('clr');

  return (
    <Header>
      <Form
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          formSubmit(event);
        }}
      >
        <Input
          name="filter"
          type="text"
          autoFocus
          placeholder="Search images and photos"
          onChange={() => {
            if (input.value) clrBut.style.display = 'flex';
          }}
        />
        <Button type="submit">
          <Icon src={search} width="18px" />
        </Button>
        <Clear
          id="clr"
          type="button"
          onClick={() => {
            input.value = '';
            clrBut.style.display = 'none';
          }}
          title="Сlick to clear filter"
        >
          <Icon src={clear} width="25px" />
        </Clear>
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
