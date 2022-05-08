import { IBook } from "../interfaces";

function Book({ author, title, id }: IBook) {
 
  return (
    <div>{`${title} (${author})`}</div>
  );
}

export default Book;
