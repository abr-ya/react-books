import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { ThreeDots as Loader } from "react-loader-spinner";
import { IBook } from "../interfaces";

function Book({ author, title, id }: IBook) {
  const isLoading = false;
  const remove = () => {
    console.log('remove handler');
  };
 
  return (
    <Flex key={id} p={3} width="100%" alignItems="center">

      {/* @ts-ignore */}
      <StyledLink as={RouterLink} to={`/edit/${id}`} mr="auto">{title}</StyledLink>
      <Text>{author}</Text>
      <Button onClick={remove} ml="5">
        { isLoading ? <Loader color="#fff" height={10} /> : "Remove" }
      </Button>
    </Flex>
  );
}

export default Book;
