import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Block } from './Buttons.styled';
import PropTypes from 'prop-types';

const Buttons = ({ total, curent, onPagination }) => {
  let items = [];
  if (curent !== 1 && total > 9) items.push(<Pagination.Prev key="n1" />);
  for (let number = 1; number <= total; number++) {
    items.push(
      total <= 8 && (
        <Pagination.Item key={number} active={number === curent}>
          {number}
        </Pagination.Item>
      ),
      total > 8 && curent > 4 && number === 1 && (
        <Pagination.Item key={number} active={number === curent}>
          {number}
        </Pagination.Item>
      ),
      total > 8 && curent === 1 && number <= 6 && (
        <Pagination.Item key={number} active={number === curent}>
          {number}
        </Pagination.Item>
      ),
      total > 8 && curent > 4 && number === 2 && (
        <Pagination.Ellipsis disabled key="e1" />
      ),
      total > 8 && curent <= 4 && number <= 5 && curent !== 1 && (
        <Pagination.Item key={number} active={number === curent}>
          {number}
        </Pagination.Item>
      ),
      total > 8 && curent === total && number >= total - 5 && (
        <Pagination.Item key={number} active={number === curent}>
          {number}
        </Pagination.Item>
      ),
      total > 8 &&
        curent >= total - 4 &&
        number >= total - 4 &&
        curent !== total && (
          <Pagination.Item key={number} active={number === curent}>
            {number}
          </Pagination.Item>
        ),
      total > 8 &&
        curent > 4 &&
        curent < total - 4 &&
        number > curent - 2 &&
        number < curent + 2 && (
          <Pagination.Item key={number} active={number === curent}>
            {number}
          </Pagination.Item>
        ),
      total > 8 && curent < total - 4 && number === total - 1 && (
        <Pagination.Ellipsis disabled key="e2" />
      ),
      total > 8 && curent < total - 4 && number === total && (
        <Pagination.Item key={number} active={number === curent}>
          {number}
        </Pagination.Item>
      )
    );
  }
  if (curent !== total && total > 9) items.push(<Pagination.Next key="n2" />);

  return (
    <Block>
      <Pagination onClick={event => onPagination(event)}>{items}</Pagination>
    </Block>
  );
};

Buttons.propTypes = {
  total: PropTypes.number.isRequired,
  curent: PropTypes.number.isRequired,
  onPagination: PropTypes.func.isRequired,
};

export default Buttons;
