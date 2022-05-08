import { useMutation } from "react-query";
import { Box, Heading } from "rebass/styled-components";
import { createBook } from "../services/api";
import Container from "../components/Container";
import BookForm from "../components/BookForm";
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createBook);

  const onFormSubmit = async (formData: {title: string, author: string}) => {
    await mutateAsync({...formData});
    navigate("/");
  }

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
}

export default Create;
