export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
  if (!response.ok) throw new Error("Something went wrong.");
  
  return response.json();
};

export const removeBook = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    { method: "DELETE" }
  );

  // response.json().message
  if (!response.ok) throw new Error("Ошибка удаления книги!");

  return true;
};
