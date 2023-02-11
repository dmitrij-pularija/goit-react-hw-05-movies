import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';

import { ReactComponent as Icon } from '../../img/film.svg';
import {
  Container,
  Header,
  Link,
  Nav,
  Text,
  Logo,
  Box,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Box>
            <Logo to="/">
              <Icon stroke="white" />
              <Text>Movies</Text>
            </Logo>
            <Searchbar />
            <Nav>
              <Link to="/" end>
                Home
              </Link>
              <Link to="/movies">Movies</Link>
            </Nav>
          </Box>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default SharedLayout;