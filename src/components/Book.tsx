import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { ThreeDots as Loader } from "react-loader-spinner";
import { IBook } from "../interfaces";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../services/api";

function Book({ author, title, id }: IBook) {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const removeHandler = async () => {
    // @ts-ignore
    await mutateAsync(id);
    queryClient.invalidateQueries('books');
  };
 
  return (
    <Flex key={id} p={3} width="100%" alignItems="center">

      {/* @ts-ignore */}
      <StyledLink as={RouterLink} to={`/edit/${id}`} mr="auto">
        {title}
      </StyledLink>
      <Text>{author}</Text>
      <Button onClick={removeHandler} ml="5" sx={{ cursor: "pointer"}} variant="secondary">
        { isLoading ? <Loader color="#fff" height={10} /> : "Remove" }
      </Button>
    </Flex>
  );
}

export default Book;
