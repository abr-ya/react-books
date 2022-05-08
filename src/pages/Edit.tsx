import { useQuery, useMutation } from "react-query";
import { Box, Heading } from "rebass/styled-components";
import { getBook, updateBook } from "../services/api";
import Container from "../components/Container";
import BookForm from "../components/BookForm";
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(["book", { id }], getBook); // error для блока
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook)

  const onFormSubmit = async (formData: {title: string, author: string}) => {
    await mutateAsync({...formData, id});
    navigate("/");
  }

  if (isLoading) {
    return (<span>лоадер страницы</span>); // todo: продумать общий компонент!
  }

  if (isError) {
    // error.message
    return (<span>ошибка страницы</span>); // todo: продумать общий компонент!
  }

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
      </Box>
    </Container>
  );
}

export default Edit;
