import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { useNavigate } from "react-router-dom";
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar'

// import GlobalStyle from './GlobalStyle';

import { ReactComponent as Icon } from '../../img/film.svg';
// import { Container } from '../Container/Container';
import { Container, Header, Link, Nav, Text, Logo, Box } from './SharedLayout.styled';


const SharedLayout = () => {
  // const [filter, setFilter] = useState('');
  // const navigate = useNavigate();
  // const handleSubmit = event => {
  //   const {
  //     filter: { value },
  //   } = event.target.elements;
  //   if (value !== filter) {
  //   setFilter(value);
  //   navigate(`/movies/?search=${filter}`);
  // };
  // };
// console.log(filter);
    return (
      <>
      {/* <GlobalStyle /> */}
        <Header>
        <Container>
        <Box>    
        <Logo to="/"><Icon stroke='white' /><Text>Movies</Text></Logo>
        <Searchbar />
          <Nav>
            <Link to="/" end>Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
          </Box>  
          </Container>
        </Header>
        <Container>
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        </Container>
      </>
    );
  };

export default SharedLayout;