import {
  Flex,
  Box,
  Link as StyledLink,
  Image,
} from "rebass/styled-components";
import { Link as RouterLink } from 'react-router-dom'
import Container from "./Container"
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Flex bg="black" color="white" justifyContent="center">
      <Container>
        <Flex px={2} width="100%" alignItems="center">
          <Image size={24} src={logo} />
          {/* <RouterLink to={"/"}>React Query CRUD</RouterLink>
          <Box mx="auto" />
          <RouterLink to={"/create"}>+ Add new book</RouterLink> */}

          {/* @ts-ignore */}
          <StyledLink as={RouterLink} variant="nav" to="/">
            Home - All Books
          </StyledLink>
          <Box mx="auto" />
          {/* @ts-ignore */}
          <StyledLink as={RouterLink} variant="nav" to="/create">
            + Add new book
          </StyledLink>
        </Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;