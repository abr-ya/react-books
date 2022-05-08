import { Flex } from "rebass/styled-components";
import { Container } from "../components/Container";
import { useQuery } from "react-query";
import { getAllBooks } from "../services/api";
import Book from "../components/Book";
import { ThreeDots as Loader } from "react-loader-spinner";
import { IBook } from "../interfaces";

const Home = () => {
  const booksQuery = useQuery("books", getAllBooks);

  if (booksQuery.isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader color="#cccccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (booksQuery.isError) {
    const error = booksQuery.error as Error;
    console.log('Ошибка при получении всех книг: ', error.message);
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {booksQuery.data.map(({ author, title, id }: IBook) => (
          <Book author={author} title={title} key={id} id={id} />
        ))}
      </Flex>
    </Container>
  );
};

export default Home;
